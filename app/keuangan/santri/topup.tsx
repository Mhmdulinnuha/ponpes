import Image from "next/image"
import { useState, useEffect } from "react"

export default function TopupSaldoModal({ onSuccess }: any) {

  const [santriID, setSantriID] = useState("")
  const [santri, setSantri] = useState<any[]>([])
  const [saldoSantri, setSaldoSantri] = useState<any>(null)

  const [nominalTopup, setNominalTopup] = useState("")
  const [keterangan, setKeterangan] = useState("")
  const [limitBaru, setLimitBaru] = useState("")
  const [loading, setLoading] = useState(false)

  const isSantriSelected = !!santriID

 

 

  // =========================
  // GABUNGKAN DATA
  // =========================
  const santriData = {
    ...santri.find(s => s.id === Number(santriID)),
    ...saldoSantri,
  }

  // =========================
  // SAFE ACCESS DATA
  // =========================
  const santriNama = santriData?.nama_lengkap ?? "-"

  const saldoUtama = Number(santriData?.saldo_utama ?? 0)

  const limitHarian = Number(santriData?.limit_harian ?? 0)

  const terpakai = Number(santriData?.terpakai_hari_ini ?? 0)

  const sisaLimit = limitHarian - terpakai

  const saldoSetelahTopup =
    saldoUtama + Number(nominalTopup || 0)

  

  // =========================
  // RESET INPUT
  // =========================
  useEffect(() => {
    if (!santriID) return

    setNominalTopup("")
    setLimitBaru("")
    setKeterangan("")
  }, [santriID])

  useEffect(() => {
  if (!saldoSantri) return

  setLimitBaru(
    saldoSantri.limit_harian?.toString() ?? "0"
  )
}, [saldoSantri])

  // =========================
  // FETCH DATA
  // =========================
  useEffect(() => {
    getSantri()
    
  }, [])

  const getSantri = async () => {
    try {
      const res = await fetch("http://localhost:8080/santri")
      const result = await res.json()
      setSantri(result.data || [])
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {

  if (!santriID) {
    setSaldoSantri(null)
    return
  }

  const fetchSaldo = async () => {

    try {

      const res = await fetch(
        `http://localhost:8080/saldo-santri/detail/${santriID}`
      )

      const result = await res.json()

      setSaldoSantri(result.data)

    } catch(err) {
      console.error(err)
    }

  }

  fetchSaldo()

}, [santriID])

 

  const simpan = async () => {

    if (!santriID) {
        alert("Pilih santri")
        return
    }

   if (
    Number(nominalTopup) <= 0 &&
    Number(limitBaru) <= 0
    ){
        alert("Isi nominal atau limit.")
        return
    }

    setLoading(true)

    try {

        const res = await fetch(
            "http://localhost:8080/saldo-santri/topup",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    santri_id: Number(santriID),
                    nominal: Number(nominalTopup),
                    limit_harian: Number(limitBaru),
                    keterangan: keterangan,
                }),
            }
        )

        const result = await res.json()

        if (!res.ok) {
            throw new Error(result.message)
        }

        alert(result.message)

        onSuccess?.()

        document
            .getElementById("btnCloseTopupModal")
            ?.click()

    } catch (err: any) {
        alert(err.message)
    } finally {
        setLoading(false)
    }
}
  
  return (
    <div
      className="modal fade"
      id="topupSaldoModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-md modal-dialog-centered">
        <div className="modal-content border-0 rounded-4 shadow overflow-hidden">
          {/* HEADER MODAL */}
          <div className="modal-header bg-primary text-white border-0 py-3">
            <h5 className="modal-title fw-semibold d-flex align-items-center gap-2">
              <i className="bi bi-wallet2 fs-4" />
             Top Up Saldo Santri
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          {/* BODY MODAL */}
          <div className="modal-body p-4 bg-light">
            <div className="mb-3">
            <label className="form-label">
              Pilih Santri
            </label>

            <select
              className="form-select"
              value={santriID}
              onChange={(e) => setSantriID(e.target.value)}
            >
              <option value="">
                -- Pilih Santri --
              </option>

              {santri.map((item: any) => (
                <option
                  key={item.id}
                  value={item.id}
                >
                  {item.nama_lengkap}
                </option>
              ))}
            </select>
          </div>
            <div className="d-flex flex-column gap-3">
              
              {/* CARD PROFILE & RINCIAN UTAMA */}
              <div className="card border-0 rounded-4 shadow-sm">
                <div className="card-body p-4">
                  
                 
                  

                  {/* Profil Singkat Santri */}
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <Image
                      src="/images/avatar/avatar.jpg"
                      alt={santriNama}
                      width={56}
                      height={56}
                      className="rounded-circle border-2 border-primary-subtle"
                    />
                    <div>
                      <small className="text-muted d-block">Nama Santri</small>
                      <h5 className="fw-bold text-dark mb-0">{isSantriSelected ? santriNama : "Pilih santri dulu"}</h5>
                    </div>
                  </div>

                  <hr className="text-muted opacity-25 my-3" />

                  {/* Detail Item Tagihan */}
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex justify-content-between">
                      <span className="text-muted">Saldo Utama</span>
                     <span className="fw-bold">
                      {isSantriSelected
                        ? `Rp ${saldoUtama.toLocaleString("id-ID")}`
                        : "-"}
                    </span>
                    </div>

                    <div className="d-flex justify-content-between">
                      <span className="text-muted">Limit Harian</span>
                      <span className="fw-semibold">
                        {isSantriSelected 
                        ?`Rp ${limitHarian.toLocaleString("id-ID")}`
                        : "-"}
                      </span>
                    </div>

                    <div className="mt-3">
                      <label className="form-label">
                        Ubah Limit Harian
                      </label>

                      <input
                        type="number"
                        className="form-control"
                        value={limitBaru}
                        onChange={(e) =>
                          setLimitBaru(e.target.value)
                        }
                        placeholder="Masukkan limit harian"
                      />
                    </div>


                    <div className="mt-3">
                      <label className="form-label">
                        Nominal Top Up
                      </label>

                      <input
                        type="number"
                        className="form-control"
                        disabled={!isSantriSelected}
                        value={nominalTopup}
                        onChange={(e) =>
                          setNominalTopup(e.target.value)
                        }
                        placeholder="Masukkan nominal top up"
                      />
                    </div>

                    <div className="mt-3">
                      <label className="form-label">
                        Keterangan
                      </label>

                      <textarea
                        className="form-control"
                        rows={3}
                        value={keterangan}
                        onChange={(e) =>
                          setKeterangan(e.target.value)
                        }
                        placeholder="Contoh: Setoran wali santri"
                      />
                    </div>

                    <div className="alert alert-success mt-3">
                      <div className="fw-semibold">
                        Saldo Setelah Top Up
                      </div>

                      <h5 className="mt-2 mb-0">
                        {isSantriSelected
                        ?
                        `Rp ${saldoSetelahTopup.toLocaleString("id-ID")}`
                        : "-"}
                      </h5>
                    </div>

                    <div className="d-flex justify-content-between">
                      <span className="text-muted">
                        Sisa Limit Hari Ini
                      </span>

                      <span className="fw-semibold text-success">
                        {isSantriSelected
                        ?`Rp ${sisaLimit.toLocaleString("id-ID")}`
                        : "-"}
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              
            </div>
          </div>
          <div className="modal-footer">

          <button
            id="btnCloseTopupModal"
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Batal
          </button>

          

        <button onClick={simpan}>
            Simpan
        </button>

        </div>

        </div>
      </div>
    </div>
  );
}