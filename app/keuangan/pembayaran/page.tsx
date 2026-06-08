"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import TambahPembayaranModal from "./tambah"
import EditPembayaranModal from "./edit"
import DeletePembayaranModal from "./delete"
import Sidebar from "@/app/keuangan/components/sidebar"
import Navbar from "@/app/keuangan/components/navbar"
import Footer from "@/app/keuangan/components/footer"



export default function Pembayaran() {
    const [selectedData, setSelectedData] = useState<any>(null)
    const [pembayaran, setPembayaran] = useState<any[]>([])
        const [loading, setLoading] = useState(true)
        
        const getPembayaran = async () => {
  try {
    const res = await fetch(
      "http://localhost:8080/pembayaran"
    )

    const result = await res.json()

    if (!res.ok) {
      throw new Error(result.message)
    }

    setPembayaran(result.data)
  } catch (err) {
    console.error(err)
  } finally {
    setLoading(false)
  }
}
        
        useEffect(() => {
          getPembayaran()
        }, [])
        if (loading) {
          return (
            <div className="container py-5">
              Loading Data Pembayaran...
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
                    Pembayaran
                  </h1>

                  <p className="text-muted mb-0">
                    Daftar data dan informasi pembayaran santri
                  </p>

                </div>

              </div>

              <button className="btn btn-primary"  data-bs-toggle="modal"
                data-bs-target="#tambahPembayaranModal"
                onClick={() => setSelectedData(null)}
              >

                <i className="bi bi-plus-lg me-2" />

                Tambah Pembayaran

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

                    Data Pembayaran

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
                      <th>Santri</th>
                      <th>Jenis</th>
                      <th>Nominal</th>
                      <th>Bayar</th>
                      <th>Sisa</th>
                      <th>Tanggal</th>
                      <th>Status</th>

                      <th className="text-end">
                        Aksi
                      </th>

                    </tr>

                  </thead>

                  <tbody>
              {pembayaran.map((item) => (
                <tr key={item.id}>
                  <td className="fw-semibold text-primary">
                    {item.id}
                  </td>

                  <td>
                    <div className="d-flex align-items-center gap-3">

                      <Image
                        src="/images/avatar/avatar.jpg"
                        alt={item.santri?.nama_lengkap || "Santri"}
                        width={48}
                        height={48}
                        className="rounded-circle border"
                      />

                      <div>
                        <h6 className="mb-0 fw-semibold">
                          {item.Santri?.nama_lengkap}
                        </h6>

                       
                      </div>

                    </div>
                  </td>

                  <td>
                    {item.JenisPembayaran?.nama_jenis}
                  </td>

                  <td>
                  Rp {Number(item.nominal).toLocaleString("id-ID")}
                </td>

                <td>
                  Rp {Number(item.bayar).toLocaleString("id-ID")}
                </td>

                <td>
                  Rp {Number(item.nominal - item.bayar).toLocaleString("id-ID")}
                </td>

               

                  <td>
                    {new Date(item.tanggal).toLocaleDateString(
                      "id-ID"
                    )}
                  </td>

                   <td>
                  <span
                    className={`badge ${
                      item.status === "Lunas"
                        ? "bg-success"
                        : "bg-warning text-dark"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                  <td className="text-end">
                    <div className="d-flex justify-content-end gap-2">

                      <button
                        className="btn btn-light btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#detailPembayaranModal"
                        onClick={() => setSelectedData(item)}
                      >
                        <i className="bi bi-eye" />
                      </button>

                     <button
                      className="btn btn-warning btn-sm "  data-bs-toggle="modal"
                      data-bs-target="#editPembayaranModal" onClick={() => setSelectedData(item)}
                      >
                        <i className="bi bi-pencil-square" />
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#deletePembayaranModal"
                        onClick={() => setSelectedData(item)}
                      >
                        <i className="bi bi-trash" />
                      </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

                </table>

              </div>

              {/* FOOTER */}

              <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mt-4">

                <p className="text-muted mb-0">
                  Menampilkan {pembayaran.length} data pembayaran
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

        <TambahPembayaranModal onSuccess={getPembayaran} />
        <EditPembayaranModal onSuccess={getPembayaran} selectedData={selectedData}/>
        <DeletePembayaranModal onSuccess={getPembayaran} selectedData={selectedData}/>



        {/* FOOTER */}

        <Footer />

      </div>
      {/* MODAL DETAIL PEMBAYARAN */}

      <div
        className="modal fade"
        id="detailPembayaranModal"
        tabIndex={-1}
        aria-hidden="true"
      >

        <div className="modal-dialog modal-xl modal-dialog-centered">

          <div className="modal-content border-0 rounded-4 overflow-hidden">

            {/* MODAL HEADER */}

            <div className="modal-header bg-primary text-white border-0">

              <h5 className="modal-title fw-semibold">

                <i className="bi bi-receipt me-2" />

                Detail Pembayaran

              </h5>

              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              />

            </div>

            {/* MODAL BODY */}

            <div className="modal-body p-4">

              {selectedData && (

                <div className="d-flex flex-column gap-4">

                  {/* PROFILE SANTRI */}

                  <div className="card border-0 shadow-sm rounded-4">

                    <div className="card-body p-4">

                      <h5 className="fw-bold mb-4">

                        <i className="bi bi-person-circle me-2 text-primary" />

                        Profile Santri

                      </h5>

                      <div className="d-flex align-items-center gap-4">

                       <Image
                    src="/images/avatar/avatar.jpg"
                    alt={selectedData.santri?.nama_lengkap}
                    width={90}
                    height={90}
                    className="rounded-circle border"
                  />

                  <h4 className="fw-bold mb-1">
                    {selectedData.santri?.nama_lengkap}
                  </h4>


                  <span
                    className={`badge ${
                      selectedData.status === "Lunas"
                        ? "bg-success"
                        : "bg-danger"
                    }`}
                  >
                    {selectedData.status}
                  </span>

                      </div>

                    </div>

                  </div>

                  {/* RIWAYAT PEMBAYARAN */}

                  <div className="card border-0 shadow-sm rounded-4">

                    <div className="card-body p-4">

                      <h5 className="fw-bold mb-4">

                        <i className="bi bi-clock-history me-2 text-success" />

                        Riwayat Pembayaran

                      </h5>

                      <div className="table-responsive">

                        <table className="table align-middle">

                          <thead>

                            <tr>

                              <th>Jenis</th>
                              <th>Tanggal</th>
                              <th>Nominal</th>
                              <th>Status</th>

                            </tr>

                          </thead>

                          <tbody>
                      {pembayaran.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>

                          <td>
                            {item.santri?.nama_lengkap}
                          </td>

                          <td>
                            {item.jenis_pembayaran?.nama_jenis}
                          </td>

                          <td>
                            Rp{" "}
                            {Number(item.nominal).toLocaleString(
                              "id-ID"
                            )}
                          </td>

                          <td>
                            {new Date(item.tanggal).toLocaleDateString(
                              "id-ID"
                            )}
                          </td>

                          <td>
                            <span
                              className={`badge ${
                                item.status === "Lunas"
                                  ? "bg-success"
                                  : "bg-warning text-dark"
                              }`}
                            >
                              {item.status}
                            </span>
                          </td>

                          <td>
                            <button
                              className="btn btn-warning btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#editPembayaranModal"
                              onClick={() => setSelectedData(item)}
                            >
                              <i className="bi bi-pencil" />
                            </button>

                            <button
                              className="btn btn-danger btn-sm ms-2"
                              data-bs-toggle="modal"
                              data-bs-target="#deletePembayaranModal"
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

                    </div>

                  </div>

                  {/* TAGIHAN AKTIF */}

                  <div className="card border-0 shadow-sm rounded-4">

                    <div className="card-body p-4">

                      <h5 className="fw-bold mb-4">

                        <i className="bi bi-wallet2 me-2 text-danger" />

                        Tagihan Aktif

                      </h5>

                      <div className="bg-light rounded-4 p-4">

                        <div className="d-flex justify-content-between mb-2">

                          <span className="fw-semibold">
                            Syahriyah Bulan Juni
                          </span>

                          <span className="fw-bold text-danger">
                            Rp 650.000
                          </span>

                        </div>

                        <small className="text-muted">
                          Jatuh tempo 10 Juni 2026
                        </small>

                      </div>

                    </div>

                  </div>

                  {/* BUTTON BAYAR */}

                  <button className="btn btn-success rounded-4 py-3 fw-semibold shadow-sm">

                    <i className="bi bi-credit-card me-2" />

                    Bayar Sekarang

                  </button>

                </div>

              )}

            </div>

          </div>

        </div>

      </div>


      

    </div>
  )
}

