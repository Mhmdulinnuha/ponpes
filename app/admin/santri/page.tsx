"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import TambahSantriModal from "./tambah"
import EditSantriModal from "./edit"
import DeleteSantriModal from "./delete"
import Sidebar from "@/app/admin/components/sidebar"
import Navbar from "@/app/admin/components/navbar"
import Footer from "@/app/admin/components/footer"



export default function Santri() {
  
  const [selectedData, setSelectedData] = useState<any>(null)
   const [santri, setSantri] = useState<any[]>([])
const [loading, setLoading] = useState(true)

const getSantri = async () => {
  try {
    const res = await fetch("http://localhost:8080/santri")

    if (!res.ok) {
      throw new Error("Gagal mengambil data")
    }

    const result = await res.json()

    setSantri(result.data)
  } catch (err) {
    console.error(err)
  } finally {
    setLoading(false)
  }
}

useEffect(() => {
  getSantri()
}, [])
if (loading) {
  return (
    <div className="container py-5">
      Loading Data Santri...
    </div>
  )
}
  return (
    <div className="admin-shell">

      <div
        className="sidebar-backdrop"
        data-sidebar-close
      />

      <Sidebar />

      <div className="admin-main">

        <Navbar />

        <main className="dashboard-content">

          <div className="container-fluid px-3 px-lg-4 py-4">

            {/* HEADER */}

            <div className="page-heading d-flex justify-content-between align-items-center">

              <div className="page-heading-copy d-flex gap-3">

                <span className="page-icon">
                  <i className="bi bi-person-vcard" />
                </span>

                <div>

                  <p className="eyebrow mb-1">
                    Master Data
                  </p>

                  

                  <h1 className="h3 mb-1">
                    Data santri
                  </h1>

                  <p className="text-muted mb-0">
                    Daftar data dan informasi seluruh santri
                  </p>

                </div>

              </div>

              <button className="btn btn-primary"  data-bs-toggle="modal"
                data-bs-target="#tambahSantriModal"
                onClick={() => setSelectedData(null)}
              >
               

                <i className="bi bi-plus-lg me-2" />

                Tambah Santri

              </button>

            </div>


            {/* TABLE */}

            <section className="panel mt-4">

              <div className="panel-header d-flex justify-content-between align-items-center mb-3">

                <div>

                  <h2 className="h5 mb-1">

                    <i className="bi bi-table me-2" />

                    Data Santri

                  </h2>

                  <p className="text-muted mb-0">
                    Cari dan kelola data santri
                  </p>

                </div>

                <input
                  type="search"
                  className="form-control form-control-sm"
                  placeholder="Cari guru..."
                  style={{ width: "260px" }}
                />

              </div>


              <div className="table-responsive">

                <table className="table align-middle">

                  <thead>

                    <tr>

                      <th>Kode</th>
                      <th>Foto</th>
                      <th>Nama Lengkap</th>
                      <th>NIS</th>
                      <th>Jenis Kelamin</th>
                      <th>Tempat Lahir</th>
                      <th>Tanggal Lahir</th>
                      <th>Status Yatim</th>
                      <th className="text-end">Aksi</th>

                    </tr>

                  </thead>


                  <tbody>

                    {santri.map((item) => (

                      <tr key={item.id}>

                      <td className="fw-semibold">
                        {item.kode_santri}
                      </td>

                      <td>

                        <Image
                          src={
                            item.foto
                              ? `http://localhost:8080/uploads/${item.foto}`
                              : "/images/avatar/avatar.jpg"
                          }
                          alt={item.nama_lengkap}
                          width={44}
                          height={44}
                          className="rounded-circle"
                        />

                      </td>

                      <td>
                        {item.nama_lengkap}
                      </td>

                      <td>
                        {item.nis}
                      </td>

                      <td>
                        {item.jenis_kelamin}
                      </td>

                      <td>
                        {item.tempat_lahir}
                      </td>

                      <td>
                      {item.tanggal_lahir
                        ? new Date(item.tanggal_lahir).toLocaleDateString("id-ID")
                        : "-"}
                    </td>

                      <td>

                        <span className="badge text-bg-primary">

                          {item.status_yatim}

                        </span>

                      </td>

                      <td className="text-end">

                        <button
                        className="btn btn-light btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#editSantriModal"
                        onClick={() => {
                        console.log(item)
                        setSelectedData(item)
                      }}
                      >
                        <i className="bi bi-pencil" />
                      </button>

                        <button
                        className="btn btn-danger btn-sm ms-2"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteSantriModal"
                        onClick={() => setSelectedData(item)}
                      >
                        <i className="bi bi-trash" />
                      </button>

                      </td>

                    </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </section>

          </div>

        </main>
        <TambahSantriModal onSuccess={getSantri} />
        <EditSantriModal onSuccess={getSantri} selectedData={selectedData}/>
        <DeleteSantriModal onSuccess={getSantri} selectedData={selectedData} />

        <Footer />

      </div>

    </div>
  )
}