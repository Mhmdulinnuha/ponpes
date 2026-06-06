"use client"

import { useState } from "react"

type TambahJenisModalProps = {
  onSuccess: () => void
}

export default function TambahJenisModal({
  onSuccess,
}: TambahJenisModalProps) {

  const [form, setForm] = useState({
    nama_jenis: "",
    nominal_default: "",
  })

  const simpanJenis = async () => {
    try {

      const formData = new FormData()

      formData.append("nama_jenis", form.nama_jenis)
      formData.append(
        "nominal_default",
        form.nominal_default
      )

      const res = await fetch(
        "http://localhost:8080/jenis-pembayaran",
        {
          method: "POST",
          body: formData,
        }
      )

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.message)
      }

      alert("Jenis pembayaran berhasil ditambahkan")

      onSuccess()

      document
        .getElementById("btnCloseModal")
        ?.click()

      setForm({
        nama_jenis: "",
        nominal_default: "",
      })

    } catch (err) {
      console.error(err)
      alert("Gagal menyimpan data")
    }
  }

  return (
    <div
      className="modal fade"
      id="tambahJenisModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">

        <div className="modal-content">

          <div className="modal-header bg-primary text-white">

            <h5 className="modal-title">
              <i className="bi bi-cash-stack me-2" />
              Tambah Jenis Pembayaran
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
                Nama Jenis Pembayaran
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Contoh: Syahriyah Pondok"
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
                placeholder="500000"
                value={form.nominal_default}
                onChange={(e) =>
                  setForm({
                    ...form,
                    nominal_default: e.target.value,
                  })
                }
              />

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
              onClick={simpanJenis}
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