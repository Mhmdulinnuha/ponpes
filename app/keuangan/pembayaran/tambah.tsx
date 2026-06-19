"use client"

import { useState, useEffect } from "react"

type TambahPembayaranModalProps = {
  onSuccess: () => void
}

export default function TambahPembayaranModal({
  onSuccess,
}: TambahPembayaranModalProps) {

    const [form, setForm] = useState({
    santri_id: "",
    jenis_pembayaran_id: "",
    nominal: "",
    bayar: "",
    metode_pembayaran: "",
    tanggal: "",
    })

  const simpanPembayaran = async () => {
  try {
    if (
      !form.santri_id ||
      !form.jenis_pembayaran_id ||
      !form.bayar ||
      !form.metode_pembayaran ||
      !form.tanggal
    ) {
      alert("Lengkapi semua data terlebih dahulu")
      return
    }

    const formData = new FormData()

    formData.append("santri_id", form.santri_id)
    formData.append(
      "jenis_pembayaran_id",
      form.jenis_pembayaran_id
    )
    formData.append("bayar", form.bayar)
        formData.append(
      "metode_pembayaran",
      form.metode_pembayaran
    )
    formData.append("tanggal", form.tanggal)

    console.log("=== DATA DIKIRIM ===")

    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1])
    }

    const res = await fetch(
      "http://localhost:8080/pembayaran",
      {
        method: "POST",
        body: formData,
      }
    )

    const result = await res.json()

    console.log(result)

    if (!res.ok) {
      alert(result.message)
      return
    }

    alert("Pembayaran berhasil ditambahkan")

    onSuccess()

    document
      .getElementById("btnCloseModal")
      ?.click()

    setForm({
      santri_id: "",
      jenis_pembayaran_id: "",
      nominal: "",
      bayar: "",
      metode_pembayaran: "",
      tanggal: "",
    })
  } catch (err) {
    console.error(err)
    alert("Gagal menyimpan data")
  }
}
    const [santri, setSantri] = useState<any[]>([])
    const [jenisPembayaran, setJenisPembayaran] = useState<any[]>([])



    const getSantri = async () => {
    const res = await fetch("http://localhost:8080/santri")
    const result = await res.json()

    if (res.ok) {
        setSantri(result.data)
    }
    }

    const getJenisPembayaran = async () => {
    const res = await fetch("http://localhost:8080/jenis-pembayaran")
    const result = await res.json()

    if (res.ok) {
        setJenisPembayaran(result.data)
    }
    }

    useEffect(() => {
    getSantri()
    getJenisPembayaran()
    }, [])

  return (
    <div
      className="modal fade"
      id="tambahPembayaranModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">

        <div className="modal-content">

          <div className="modal-header bg-primary text-white">

            <h5 className="modal-title">
              <i className="bi bi-cash-stack me-2" />
              Tambah Pembayaran
            </h5>

            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
            />

          </div>

          <div className="modal-body">

  <div className="mb-3">
    <label className="form-label">
      Santri
    </label>

    <select
      className="form-select"
      value={form.santri_id}
      onChange={(e) =>
        setForm({
          ...form,
          santri_id: e.target.value,
        })
      }
    >
      <option value="">
        Pilih Santri
      </option>

      {/* data santri */}
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

  <div className="mb-3">
    <label className="form-label">
      Jenis Pembayaran
    </label>

   <select
  className="form-select"
  value={form.jenis_pembayaran_id}
  onChange={(e) => {
    const jenis = jenisPembayaran.find(
      (j) => j.id == e.target.value
    )

    setForm({
      ...form,
      jenis_pembayaran_id: e.target.value,
      nominal: String(jenis?.nominal_default ?? ""),
    })
  }}
>
      <option value="">
        Pilih Jenis Pembayaran
      </option>

      {jenisPembayaran.map((item: any) => (
        <option
          key={item.id}
          value={item.id}
        >
          {item.nama_jenis}
        </option>
      ))}
    </select>
  </div>

  <div className="mb-3">
    <label className="form-label">
      Nominal
    </label>

    <input
  type="text"
  className="form-control"
  value={
    form.nominal
        ? Number(form.nominal).toLocaleString("id-ID")
        : ""
    }
  readOnly
/>

    
  </div>

  <div className="mb-3">
  <label className="form-label">
    Metode Pembayaran
  </label>

  <select
  className="form-select"
  value={form.metode_pembayaran}
  onChange={(e) =>
    setForm({
      ...form,
      metode_pembayaran: e.target.value,
    })
  }
>
  <option value="">
    Pilih Metode Pembayaran
  </option>

  <option value="Tunai">
    Tunai
  </option>

  <option value="Transfer">
    Transfer
  </option>

  
</select>
  </div>
  
  <div className="mb-3">
    <label className="form-label">
      Bayar
    </label>

    <input
    type="number"
    min="0"
    step="0.01"
    className="form-control"
    placeholder="Masukkan jumlah pembayaran"
    value={form.bayar}
    onChange={(e) =>
        setForm({
        ...form,
        bayar: e.target.value,
        })
    }
    />

    <small className="text-success">
    Rp{" "}
    {form.bayar
        ? Number(form.bayar).toLocaleString("id-ID")
        : "0"}
    </small>
  </div>

  <div className="mb-3">
    <label className="form-label">
      Tanggal Pembayaran
    </label>

    <input
      type="date"
      className="form-control"
      value={form.tanggal}
      onChange={(e) =>
        setForm({
          ...form,
          tanggal: e.target.value,
        })
      }
    />
  </div>

  <div className="alert alert-info mt-2">
  Status :
  {" "}
  {Number(form.bayar) >= Number(form.nominal)
    ? "Lunas"
    : "Belum Lunas"}
</div>
</div>

<div className="modal-footer">

            <button
              id="btnCloseModal"
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Batal
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={simpanPembayaran}
            >
              <i className="bi bi-save me-2" />
              Simpan
            </button>

          </div>


        </div>

      </div>
    </div>
  )
}