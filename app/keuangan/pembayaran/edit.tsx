"use client"

import { useEffect, useState } from "react"

type EditPembayaranModalProps = {
  onSuccess: () => void
  selectedData: any
}

export default function EditPembayaranModal({
  onSuccess,
  selectedData,
}: EditPembayaranModalProps) {

  const [form, setForm] = useState({
    santri_id: "",
    jenis_pembayaran_id: "",
    nominal: "",
    tanggal: "",
    status: "Belum Lunas",
    })

  useEffect(() => {
    if (selectedData) {
      setForm({
        santri_id: selectedData.santri_id || "",
        jenis_pembayaran_id: selectedData.jenis_pembayaran_id || "",
        nominal: selectedData.nominal?.toString() || "",
        tanggal: selectedData.tanggal? selectedData.tanggal.split("T")[0]: "",
        status: selectedData.status || "Belum Lunas",
      })
    }
  }, [selectedData])

  const updateData = async () => {
    try {

      const formData = new FormData()

      formData.append(
        "santri_id",
        form.santri_id
      )

      formData.append(
        "jenis_pembayaran_id",
        form.jenis_pembayaran_id
      )

      formData.append(
        "nominal",
        form.nominal
      )

      formData.append(
        "tanggal",
        form.tanggal
      )

      formData.append(
        "status",
        String(form.status)
      )

      const res = await fetch(
        `http://localhost:8080/pembayaran/${selectedData.id}`,
        {
          method: "PUT",
          body: formData,
        }
      )

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.message)
      }

      alert("Data berhasil diperbarui")

      await onSuccess()

      document
        .getElementById("btnCloseEdit")
        ?.click()

    } catch (err) {
      console.error(err)
      alert("Gagal update data")
    }
  }

  const [santri, setSantri] = useState<any[]>([])
  const [jenisPembayaran, setJenisPembayaran] = useState<any[]>([])

  useEffect(() => {
  getSantri()
  getJenisPembayaran()
  }, [])

  const getSantri = async () => {
  const res = await fetch("http://localhost:8080/santri")
  const result = await res.json()

    if (res.ok) {
        setSantri(result.data)
    }
}

    const getJenisPembayaran = async () => {
    const res = await fetch(
        "http://localhost:8080/jenis-pembayaran"
    )

    const result = await res.json()

    if (res.ok) {
        setJenisPembayaran(result.data)
    }
    }

  

  return (
    <div
      className="modal fade"
      id="editPembayaranModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">

          <div className="modal-header bg-warning">
            <h5 className="modal-title">
              Edit Pembayaran
            </h5>

            <button
              type="button"
              className="btn-close"
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
                onChange={(e) =>
                  setForm({
                    ...form,
                    jenis_pembayaran_id: e.target.value,
                  })
                }
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
                type="number"
                className="form-control"
                value={form.nominal}
                onChange={(e) =>
                setForm({
                    ...form,
                    nominal: e.target.value,
                })
                }
            />
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

            <div className="mb-3">
            <label className="form-label">
                Status
            </label>

            <select
                className="form-select"
                value={form.status}
                onChange={(e) =>
                setForm({
                    ...form,
                    status: e.target.value,
                })
                }
            >
                <option value="Belum Lunas">
                Belum Lunas
                </option>

                <option value="Lunas">
                Lunas
                </option>
            </select>
            </div>
                

            

          </div>

          <div className="modal-footer">

            <button
              id="btnCloseEdit"
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Batal
            </button>

            <button
              type="button"
              className="btn btn-warning"
              onClick={updateData}
            >
              Update Data
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}