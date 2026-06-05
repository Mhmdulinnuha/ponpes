"use client"

import { useState, useEffect } from "react"

type JenisKelamin = "L" | "P"

type StatusYatim =
  | "Bukan Yatim"
  | "Yatim"
  | "Piatu"
  | "Yatim Piatu"

type EditSantriModalProps = {
  onSuccess: () => void
  selectedData: any // Replace 'any' with the actual type of your santri data
}

export default function EditSantriModal({
    
  onSuccess,
  selectedData,
}: EditSantriModalProps) {

  const [form, setForm] = useState({
    kode_santri: "",
    nis: "",
    nisn: "",
    nama_lengkap: "",
    jenis_kelamin: "" as JenisKelamin | "",
    tempat_lahir: "",
    tanggal_lahir: "",
    status_yatim: "Bukan Yatim" as StatusYatim,
  })

  const [foto, setFoto] = useState<File | null>(null)

  useEffect(() => {
  if (selectedData) {
    setForm({
      kode_santri: selectedData.kode_santri || "",
      nis: selectedData.nis || "",
      nisn: selectedData.nisn || "",
      nama_lengkap: selectedData.nama_lengkap || "",
      jenis_kelamin: selectedData.jenis_kelamin || "",
      tempat_lahir: selectedData.tempat_lahir || "",
      tanggal_lahir: selectedData.tanggal_lahir
        ? selectedData.tanggal_lahir.split("T")[0]
        : "",
      status_yatim: selectedData.status_yatim || "Bukan Yatim",
    })
  } else {
    setForm({
      kode_santri: "",
      nis: "",
      nisn: "",
      nama_lengkap: "",
      jenis_kelamin: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      status_yatim: "Bukan Yatim",
    })
  }
}, [selectedData])

  const simpanSantri = async () => {
    try {
    
      const formData = new FormData()

      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value)
      })

      if (foto) {
        formData.append("foto", foto)
      }

      

      if (!selectedData?.id) {
        alert("Data santri tidak ditemukan")
        return
        }

        const res = await fetch(
        `http://localhost:8080/santri/${selectedData.id}`,
        {
            method: "PUT",
            body: formData,
        }
        )

        const result = await res.json()

        console.log(result)

        console.log("UPDATE RESULT:", result)
        console.log("FORM:", form)
        console.log("SELECTED:", selectedData)

        if (!res.ok) {
        throw new Error(result.message)
        }

      

     console.log("ID:", selectedData?.id)

        for (const pair of formData.entries()) {
        console.log(pair[0], pair[1])
        }

      await onSuccess()

           alert("Data berhasil diperbarui")

            const modalElement = document.getElementById("editSantriModal")

        if (modalElement) {
        const modal =
            (window as any).bootstrap?.Modal.getInstance(modalElement)

        modal?.hide()
        }

      setForm({
        kode_santri: "",
        nis: "",
        nisn: "",
        nama_lengkap: "",
        jenis_kelamin: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        status_yatim: "Bukan Yatim",
      })

      setFoto(null)

    } catch (err) {
      console.error(err)
      alert("Terjadi kesalahan")
    }
  }

 


useEffect(() => {
  console.log("SELECTED DATA:", selectedData)
}, [selectedData])

  return (
     
<div
  className="modal fade"
  id="editSantriModal"
  tabIndex={-1}
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl modal-dialog-centered">
    <div className="modal-content border-0 rounded-4 overflow-hidden">

      {/* HEADER */}

      <div className="modal-header bg-primary text-white border-0">

        <h5 className="modal-title fw-semibold">
        <i className="bi bi-pencil-square me-2" />
        Edit Data Santri
        </h5>

        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="modal"
        />

      </div>

      {/* BODY */}

      <div className="modal-body p-4">

        <div className="row g-3">

          <div className="col-md-6">
            <label className="form-label">
              Kode Santri
            </label>

            <input
            type="text"
            className="form-control"
            placeholder="Kode Santri"
            value={form.kode_santri}
            onChange={(e) =>
                setForm({
                ...form,
                kode_santri: e.target.value,
                })
            }
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">
              NIS
            </label>

            <input
            type="text"
            className="form-control"
            value={form.nis}
            onChange={(e) =>
                setForm({
                ...form,
                nis: e.target.value,
                })
            }
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">
              NISN
            </label>

           <input
            type="text"
            className="form-control"
            value={form.nisn}
            onChange={(e) =>
                setForm({
                ...form,
                nisn: e.target.value,
                })
            }
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Nama Lengkap
            </label>

            <input
            type="text"
            className="form-control"
            value={form.nama_lengkap}
            onChange={(e) =>
                setForm({
                ...form,
                nama_lengkap: e.target.value,
                })
            }
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Jenis Kelamin
            </label>

            <select
            className="form-select"
            value={form.jenis_kelamin}
            onChange={(e) =>
                setForm({
                ...form,
                jenis_kelamin: e.target.value as JenisKelamin,
                })
            }
            >
            <option value="">
                Pilih Jenis Kelamin
            </option>

            <option value="L">
                Laki-Laki
            </option>

            <option value="P">
                Perempuan
            </option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Status Yatim
            </label>

            <select
            className="form-select"
            value={form.status_yatim}
            onChange={(e) =>
                setForm({
                ...form,
                status_yatim: e.target.value as StatusYatim,
                })
            }
            >
            <option value="Bukan Yatim">
                Bukan Yatim
            </option>

            <option value="Yatim">
                Yatim
            </option>

            <option value="Piatu">
                Piatu
            </option>

            <option value="Yatim Piatu">
                Yatim Piatu
            </option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Tempat Lahir
            </label>

            <input
            type="text"
            className="form-control"
            value={form.tempat_lahir}
            onChange={(e) =>
                setForm({
                ...form,
                tempat_lahir: e.target.value,
                })
            }
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Tanggal Lahir
            </label>

            <input
            type="date"
            className="form-control"
            value={form.tanggal_lahir}
            onChange={(e) =>
                setForm({
                ...form,
                tanggal_lahir: e.target.value,
                })
            }
            />
          </div>

          <div className="col-md-12">
            <label className="form-label">
              Foto Santri
            </label>

            <input
            type="file"
            className="form-control"
            onChange={(e) => {
                if (e.target.files) {
                setFoto(e.target.files[0])
                }
            }}
            />
          </div>

        </div>

      </div>

      {/* FOOTER */}

      <div className="modal-footer border-0">

        <button
        id="btnCloseModal"
          type="button"
          className="btn btn-light"
          data-bs-dismiss="modal"
        >
          Batal
        </button>

        <button
        type="button"
        className="btn btn-warning"
        onClick={simpanSantri}
        >
        <i className="bi bi-save me-2" />
        Update Data
        </button>

      </div>

    </div>
  </div>
</div>
  )}