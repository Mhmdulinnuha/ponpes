"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import TambahJenisModal from "./tambah"
import Sidebar from "@/app/keuangan/components/sidebar"
import Navbar from "@/app/keuangan/components/navbar"
import Footer from "@/app/keuangan/components/footer"
import EditJenisModal from "./edit"
import DeleteJenisModal from "./delete"



export default function JenisPembayaran() {
    const [selectedData, setSelectedData] = useState<any>(null)
    const [jenisPembayaran, setJenisPembayaran] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    
    const getJenis = async () => {
  try {
    const res = await fetch(
      "http://localhost:8080/jenis-pembayaran"
    )

    console.log("Status:", res.status)

    const result = await res.json()

    console.log(result)

    if (!res.ok) {
      throw new Error(result.message)
    }

        setJenisPembayaran(result.data)
    } catch (err) {
        console.error(err)
    } finally {
        setLoading(false)
    }
}
    
    useEffect(() => {
      getJenis()
    }, [])
    if (loading) {
      return (
        <div className="container py-5">
          Loading Data Jenis Pembayaran...
        </div>
      )
    }
  return (
    <div className="admin-shell">

      {/* SIDEBAR BACKDROP */}

      <div
        className="sidebar-backdrop"
        data-sidebar-close
      />

      {/* SIDEBAR */}

      <Sidebar />

      {/* MAIN */}

      <div className="admin-main">

        {/* NAVBAR */}

        <Navbar />

        {/* CONTENT */}

        <main className="dashboard-content">

          <div className="container-fluid px-3 px-lg-4 py-4">

            {/* HEADER */}

            <div className="page-heading d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3">

              <div className="page-heading-copy d-flex gap-3">

                <span className="page-icon">
                  <i className="bi bi-credit-card-2-front" />
                </span>

                <div>

                  <p className="eyebrow mb-1">
                    Keuangan
                  </p>

                  <h1 className="h3 mb-1">
                    Jenis Pembayaran
                  </h1>

                  <p className="text-muted mb-0">
                    Daftar data dan informasi pembayaran santri
                  </p>

                </div>

              </div>

              <button className="btn btn-primary"  data-bs-toggle="modal"
                data-bs-target="#tambahJenisModal"
                onClick={() => setSelectedData(null)}
              >
               

                <i className="bi bi-plus-lg me-2" />

                Tambah Jenis Pembayaran

              </button>

            </div>

            {/* FILTER */}

            <div className="panel mt-4">

              <div className="panel-body">

                <div className="row g-3">

                  {/* SEARCH */}

                  <div className="col-lg-6">

                    <div className="position-relative">

                      <i
                        className="bi bi-search position-absolute top-50 translate-middle-y ms-3 text-muted"
                      />

                      <input
                        type="search"
                        className="form-control ps-5 rounded-4"
                        placeholder="Cari nama santri..."
                      />

                    </div>

                  </div>

                  {/* FILTER BULAN */}

                  <div className="col-lg-3">

                    <select className="form-select rounded-4">

                      <option>
                        Semua Bulan
                      </option>

                      <option>
                        Januari
                      </option>

                      <option>
                        Februari
                      </option>

                      <option>
                        Maret
                      </option>

                    </select>

                  </div>

                  {/* FILTER STATUS */}

                  <div className="col-lg-3">

                    <select className="form-select rounded-4">

                      <option>
                        Semua Status
                      </option>

                      <option>
                        Lunas
                      </option>

                      <option>
                        Belum Lunas
                      </option>

                    </select>

                  </div>

                </div>

              </div>

            </div>

            {/* TABLE */}

            <section className="panel mt-4">

              {/* TABLE HEADER */}

              <div className="panel-header d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4">

                <div>

                  <h2 className="h5 mb-1">

                    <i className="bi bi-table me-2" />

                    Data Jenis Pembayaran

                  </h2>

                  <p className="text-muted mb-0">
                    Cari dan kelola data pembayaran santri
                  </p>

                </div>

                <button className="btn btn-light border rounded-4 px-4">

                  <i className="bi bi-funnel me-2" />

                  Filter

                </button>

              </div>

              {/* TABLE CONTENT */}

              <div className="table-responsive">

                <table className="table custom-table align-middle">

                  <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama Jenis</th>
                        <th>Nominal Default</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                    </thead>

                  <tbody>

                {jenisPembayaran.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>

                    <td>{item.nama_jenis}</td>

                    <td>
                    Rp {Number(item.nominal_default).toLocaleString("id-ID")}
                    </td>

                    <td>
                    <span
                        className={`badge ${
                        item.aktif
                            ? "bg-success"
                            : "bg-danger"
                        }`}
                    >
                        {item.aktif ? "Aktif" : "Nonaktif"}
                    </span>
                    </td>

                    <td>
                    <button
                        className="btn btn-warning btn-sm "  data-bs-toggle="modal"
                   data-bs-target="#editJenisModal" onClick={() => setSelectedData(item)}
                    >
                        
                        <i className="bi bi-pencil" />
                    </button>

                    <button
                        className="btn btn-danger btn-sm ms-2 "
                        data-bs-toggle="modal"
                        data-bs-target="#deleteJenisModal"
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

              {/* FOOTER */}

              <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mt-4">

                <p className="text-muted mb-0">
                  Menampilkan {jenisPembayaran.length} data jenis pembayaran
                </p>

                <div className="d-flex gap-2">

                  <button className="btn btn-light border rounded-3">
                    Previous
                  </button>

                  <button className="btn btn-primary rounded-3">
                    1
                  </button>

                  <button className="btn btn-light border rounded-3">
                    2
                  </button>

                  <button className="btn btn-light border rounded-3">
                    Next
                  </button>

                </div>

              </div>

            </section>

          </div>

        </main>
        
        <TambahJenisModal onSuccess={getJenis} />
        <EditJenisModal onSuccess={getJenis} selectedData={selectedData}/>
        <DeleteJenisModal onSuccess={getJenis} selectedData={selectedData}/>
        {/* FOOTER */}

        <Footer />

      </div>
      {/* MODAL DETAIL PEMBAYARAN */}

      
      </div>
    
  )
}

