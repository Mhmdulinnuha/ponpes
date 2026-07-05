"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

import Sidebar from "@/app/keuangan/components/sidebar"
import Navbar from "@/app/keuangan/components/navbar"
import Footer from "@/app/keuangan/components/footer"







export default function Pembayaran() {
    const [laporan, setLaporan] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedData, setSelectedData] = useState<any>(null)

  useEffect(() => {
    getLaporan()
  }, [])

  const getLaporan = async () => {
    try {
      const res = await fetch("http://localhost:8080/laporan")
      const result = await res.json()

      console.log(result); 

      setLaporan(result.data)

    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div>Loading...</div>
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

                  <h1 className="h3 mb-1">
  Laporan Keuangan Santri
</h1>

<p className="text-muted mb-0">
  Monitoring transaksi harian, mingguan dan bulanan santri
</p>

                  <p className="text-muted mb-0">
                    Daftar data dan informasi pembayaran santri
                  </p>

                </div>

              </div>

              <button className="btn btn-primary rounded-4 px-4 py-2 shadow-sm">

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

            <div className="row g-3 mt-3">

  <div className="col-md-3">
    <div className="panel">
      <div className="panel-body text-center">
        <h6 className="text-muted">Total Pemasukan</h6>
        <h4 className="fw-bold text-success">
          Rp 12.500.000
        </h4>
      </div>
    </div>
  </div>

  <div className="col-md-3">
    <div className="panel">
      <div className="panel-body text-center">
        <h6 className="text-muted">Total Pengeluaran</h6>
        <h4 className="fw-bold text-danger">
          Rp 8.300.000
        </h4>
      </div>
    </div>
  </div>

  <div className="col-md-3">
    <div className="panel">
      <div className="panel-body text-center">
        <h6 className="text-muted">Saldo Saat Ini</h6>
        <h4 className="fw-bold text-primary">
          Rp 4.200.000
        </h4>
      </div>
    </div>
  </div>

  <div className="col-md-3">
    <div className="panel">
      <div className="panel-body text-center">
        <h6 className="text-muted">Jumlah Transaksi</h6>
        <h4 className="fw-bold">
          356
        </h4>
      </div>
    </div>
  </div>

</div>

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
                      <th>Tanggal</th>
                      <th>Status</th>

                      <th className="text-end">
                        Aksi
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {laporan.map((item) => (

                      <tr key={item.id}>

                        {/* ID */}

                        <td className="fw-semibold text-primary">
                          {item.id}
                        </td>

                        {/* FOTO + NAMA */}

                        <td>

                          <div className="d-flex align-items-center gap-3">

                            
                            <div>

                              <h6 className="mb-0 fw-semibold">
                                {item.santri?.nama_lengkap ?? "-"}
                              </h6>

                              <small className="text-muted">
                                {item.santri?.email ?? "-"}
                              </small>

                            </div>

                          </div>

                        </td>

                        {/* JENIS */}

                        <td className="text-muted">
                          {item.jenis_pembayaran?.nama_jenis}
                        </td>

                        {/* NOMINAL */}

                        <td>
                          Rp {Number(item.nominal).toLocaleString("id-ID")}
                        </td>

                        {/* TANGGAL */}

                        <td className="text-muted">
                          {new Date(item.tanggal).toLocaleDateString("id-ID")}
                        </td>

                        {/* STATUS */}

                        <td>
                         <span
                          className={`badge ${
                            item.status === "Lunas"
                              ? "bg-success"
                              : "bg-danger"
                          }`}
                        >
                          {item.status}
                        </span>
                        </td>

                        {/* AKSI */}

                        <td className="text-end">

                          <div className="d-flex justify-content-end gap-2">

                            <button
                              className="btn btn-light btn-sm action-btn rounded-3"
                              data-bs-toggle="modal"
                              data-bs-target="#detailPembayaranModal"
                              onClick={() => setSelectedData(item)}
                            >

                              <i className="bi bi-eye" />

                            </button>

                            <button className="btn btn-primary btn-sm action-btn rounded-3">

                              <i className="bi bi-pencil-square" />

                            </button>

                            <button className="btn btn-danger btn-sm action-btn rounded-3">

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
                  Menampilkan {laporan.length} data laporan
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
              <i className="bi bi-bar-chart-line me-2" />
              Detail Laporan Keuangan
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
    <i className="bi bi-file-earmark-bar-graph me-2 text-primary" />
    Ringkasan Laporan
  </h5>

    <div className="row g-4">

      <div className="col-md-6">

        <div className="bg-light rounded-4 p-3">

          <small className="text-muted">
            Nama Santri
          </small>

          <h6 className="fw-bold mb-0">
            {selectedData.nama}
          </h6>

        </div>

      </div>

      <div className="col-md-6">

        <div className="bg-light rounded-4 p-3">

          <small className="text-muted">
            Jenis Transaksi
          </small>

          <h6 className="fw-bold mb-0">
            {selectedData.jenis}
          </h6>

        </div>

      </div>

      <div className="col-md-6">

        <div className="bg-light rounded-4 p-3">

          <small className="text-muted">
            Nominal
          </small>

          <h5 className="fw-bold text-success mb-0">
            Rp {selectedData.nominal.toLocaleString("id-ID")}
          </h5>

        </div>

      </div>

      <div className="col-md-6">

        <div className="bg-light rounded-4 p-3">

          <small className="text-muted">
            Tanggal
          </small>

          <h6 className="fw-bold mb-0">
            {selectedData.tanggal}
          </h6>

        </div>

      </div>

      <div className="col-12">

        <div className="bg-light rounded-4 p-3">

          <small className="text-muted">
            Status
          </small>

          <div className="mt-2">

            <span
              className={`badge text-bg-${selectedData.badge}`}
            >
              {selectedData.status}
            </span>

          </div>

        </div>

      </div>

    </div>

  </div>
</div>

<div className="d-flex gap-2 mt-3">

  <button className="btn btn-success flex-fill">
    <i className="bi bi-printer me-2" />
    Cetak Laporan
  </button>

  <button
    className="btn btn-secondary flex-fill"
    data-bs-dismiss="modal"
  >
    Tutup
  </button>

</div>

                  {/* RIWAYAT PEMBAYARAN */}

                  <div className="card border-0 shadow-sm rounded-4">

                    <div className="card-body p-4">

                      <h5 className="fw-bold mb-4">
                      <i className="bi bi-clock-history me-2 text-success" />
                      Riwayat Transaksi
                    </h5>

                      <div className="table-responsive">

                        <table className="table align-middle">

                          <thead>
  <tr>
    <th>ID Transaksi</th>
    <th>Jenis</th>
    <th>Tanggal</th>
    <th>Nominal</th>
    <th>Status</th>
  </tr>
</thead>

                          <tbody>

                            <tr>

                              <td>
                                {selectedData.jenis}
                              </td>

                              <td>
                                {selectedData.tanggal}
                              </td>

                              <td className="fw-bold text-success">
                                {selectedData.nominal}
                              </td>

                              <td>

                                <span
                                  className={`badge text-bg-${selectedData.badge}`}
                                >

                                  {selectedData.status}

                                </span>

                              </td>

                            </tr>

                          </tbody>

                        </table>

                      </div>

                    </div>

                  </div>

                  <div className="card border-0 shadow-sm rounded-4">
  <div className="card-body p-4">

    <h5 className="fw-bold mb-4">
      <i className="bi bi-pie-chart me-2 text-warning" />
      Statistik Keuangan
    </h5>

    <div className="row g-3">

      <div className="col-md-4">
        <div className="bg-light rounded-4 p-3 text-center">
          <small className="text-muted">
            Total Top Up
          </small>
          <h5 className="fw-bold text-success mb-0">
            Rp 1.500.000
          </h5>
        </div>
      </div>

      <div className="col-md-4">
        <div className="bg-light rounded-4 p-3 text-center">
          <small className="text-muted">
            Total Pengeluaran
          </small>
          <h5 className="fw-bold text-danger mb-0">
            Rp 750.000
          </h5>
        </div>
      </div>

      <div className="col-md-4">
        <div className="bg-light rounded-4 p-3 text-center">
          <small className="text-muted">
            Saldo Akhir
          </small>
          <h5 className="fw-bold text-primary mb-0">
            Rp 750.000
          </h5>
        </div>
      </div>

    </div>

  </div>
</div>
 

                 

                  <div className="d-flex gap-2">

  <button className="btn btn-success flex-fill">
    <i className="bi bi-printer me-2" />
    Cetak Laporan
  </button>

  <button className="btn btn-info flex-fill text-white">
    <i className="bi bi-file-earmark-excel me-2" />
    Export Excel
  </button>

  <button
    className="btn btn-secondary flex-fill"
    data-bs-dismiss="modal"
  >
    Tutup
  </button>

</div>

                </div>

              )}

            </div>

          </div>

        </div>

      </div>


      

    </div>
  )
}

