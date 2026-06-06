"use client"

import { useEffect, useState } from "react"

type EditJenisModalProps = {
  onSuccess: () => void
  selectedData: any
}

export default function EditJenisModal({
  onSuccess,
  selectedData,
}: EditJenisModalProps) {

  const [form, setForm] = useState({
    nama_jenis: "",
    nominal_default: "",
    aktif: true,
  })

  useEffect(() => {
    if (selectedData) {
      setForm({
        nama_jenis: selectedData.nama_jenis || "",
        nominal_default:
          selectedData.nominal_default?.toString() || "",
        aktif: selectedData.aktif,
      })
    }
  }, [selectedData])

  const updateData = async () => {
    try {

      const formData = new FormData()

      formData.append(
        "nama_jenis",
        form.nama_jenis
      )

      formData.append(
        "nominal_default",
        form.nominal_default
      )

      formData.append(
        "aktif",
        String(form.aktif)
      )

      const res = await fetch(
        `http://localhost:8080/jenis-pembayaran/${selectedData.id}`,
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

  return (
    <div
      className="modal fade"
      id="editJenisModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">

          <div className="modal-header bg-warning">
            <h5 className="modal-title">
              Edit Jenis Pembayaran
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
                Nama Jenis Pembayaran
              </label>

              <input
                type="text"
                className="form-control"
                value={form.nama_jenis}
                onChange={(e) =>
                  setForm({
                    ...form,
                    nama_jenis: e.target.value,
                  })
                }
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Nominal Default
              </label>

              <input
                type="number"
                className="form-control"
                value={form.nominal_default}
                onChange={(e) =>
                  setForm({
                    ...form,
                    nominal_default: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                checked={form.aktif}
                onChange={(e) =>
                  setForm({
                    ...form,
                    aktif: e.target.checked,
                  })
                }
              />

              <label className="form-check-label">
                Aktif
              </label>
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