"use client"

import Sidebar from "@/app/koperasi/components/sidebar"
import Navbar from "@/app/koperasi/components/navbar"
import Footer from "@/app/koperasi/components/footer"

export default function Laporan() {
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

            <div className="page-heading d-flex justify-content-between align-items-center mb-4">

              <div className="page-heading-copy d-flex gap-3">

                <span className="page-icon">
                  <i className="bi bi-graph-up-arrow" />
                </span>

                <div>
                  <p className="eyebrow mb-1">
                    Dashboard Analitik
                  </p>

                  <h1 className="h3 mb-1">
                    Laporan Koperasi
                  </h1>

                  <p className="text-muted mb-0">
                    Analisis penjualan, produk, dan keuangan koperasi
                  </p>
                </div>

              </div>

              <div className="d-flex gap-2">

                <button className="btn btn-success">
                  <i className="bi bi-file-earmark-excel me-2" />
                  Export Excel
                </button>

                <button className="btn btn-danger">
                  <i className="bi bi-file-earmark-pdf me-2" />
                  Export PDF
                </button>

              </div>

            </div>

            {/* SUMMARY */}

            <div className="row g-3 mb-4">

              <div className="col-md-3">
                <div className="card border-0 shadow-sm rounded-4">
                  <div className="card-body">
                    <small className="text-muted">
                      Total Penjualan
                    </small>

                    <h4 className="fw-bold text-primary">
                      Rp 25.500.000
                    </h4>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card border-0 shadow-sm rounded-4">
                  <div className="card-body">
                    <small className="text-muted">
                      Total Produk
                    </small>

                    <h4 className="fw-bold text-success">
                      1.250 Item
                    </h4>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card border-0 shadow-sm rounded-4">
                  <div className="card-body">
                    <small className="text-muted">
                      Total Laba
                    </small>

                    <h4 className="fw-bold text-warning">
                      Rp 9.000.000
                    </h4>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card border-0 shadow-sm rounded-4">
                  <div className="card-body">
                    <small className="text-muted">
                      Arus Kas
                    </small>

                    <h4 className="fw-bold text-info">
                      Rp 12.500.000
                    </h4>
                  </div>
                </div>
              </div>

            </div>

            {/* LAPORAN PENJUALAN */}

            <div className="card border-0 shadow-sm rounded-4 mb-4">

              <div className="card-body">

                <h5 className="fw-bold mb-4">
                  <i className="bi bi-cart-check me-2 text-success" />
                  Laporan Penjualan
                </h5>

                <div className="row g-3">

                  <div className="col-md-3">
                    <div className="bg-light rounded-4 p-3">
                      <small>Harian</small>
                      <h5>Rp 850.000</h5>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="bg-light rounded-4 p-3">
                      <small>Mingguan</small>
                      <h5>Rp 5.200.000</h5>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="bg-light rounded-4 p-3">
                      <small>Bulanan</small>
                      <h5>Rp 18.400.000</h5>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="bg-light rounded-4 p-3">
                      <small>Tahunan</small>
                      <h5>Rp 215.000.000</h5>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* LAPORAN PRODUK */}

            <div className="card border-0 shadow-sm rounded-4 mb-4">

              <div className="card-body">

                <h5 className="fw-bold mb-4">
                  <i className="bi bi-box-seam me-2 text-primary" />
                  Laporan Produk
                </h5>

                <div className="list-group">

                  <div className="list-group-item d-flex justify-content-between">
                    <span>🏆 Produk Terlaris</span>
                    <strong>Aqua 600ml</strong>
                  </div>

                  <div className="list-group-item d-flex justify-content-between">
                    <span>📉 Produk Tidak Laku</span>
                    <strong>Pensil 2B</strong>
                  </div>

                  <div className="list-group-item d-flex justify-content-between">
                    <span>⚠️ Stok Menipis</span>
                    <strong>Kitab Jurumiyah</strong>
                  </div>

                </div>

              </div>

            </div>

            {/* LAPORAN KEUANGAN */}

            <div className="card border-0 shadow-sm rounded-4">

              <div className="card-body">

                <h5 className="fw-bold mb-4">
                  <i className="bi bi-cash-stack me-2 text-success" />
                  Laporan Keuangan
                </h5>

                <div className="row g-3">

                  <div className="col-md-3">
                    <div className="bg-success-subtle rounded-4 p-3">
                      <small>Pemasukan</small>
                      <h5 className="fw-bold text-success">
                        Rp 30.000.000
                      </h5>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="bg-danger-subtle rounded-4 p-3">
                      <small>Pengeluaran</small>
                      <h5 className="fw-bold text-danger">
                        Rp 21.000.000
                      </h5>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="bg-primary-subtle rounded-4 p-3">
                      <small>Laba Rugi</small>
                      <h5 className="fw-bold text-primary">
                        Rp 9.000.000
                      </h5>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="bg-warning-subtle rounded-4 p-3">
                      <small>Arus Kas</small>
                      <h5 className="fw-bold text-warning">
                        Rp 12.500.000
                      </h5>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </main>

        <Footer />

      </div>

    </div>
  )
}