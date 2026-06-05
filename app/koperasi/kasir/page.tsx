"use client"
import { useState } from "react"
import Image from "next/image"

import Sidebar from "@/app/koperasi/components/sidebar"
import Navbar from "@/app/koperasi/components/navbar"
import Footer from "@/app/koperasi/components/footer"

const santri = {
  nama: "Ahmad Fauzan",
  kelas: "Al-Ulya",
  saldo: 500000,
}

export default function Kasir() {
    const [selectedData, setSelectedData] = useState<any>(null)
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
                    Kasir
                  </h1>

                  <p className="text-muted mb-0">
                    Sistem kasir untuk transaksi pembayaran santri
                  </p>

                </div>

              </div>

              

            </div>

           

            

            {/* TABLE */}

            <section className="row g-4 mt-3">

  {/* DATA SANTRI */}

  <div className="col-lg-4">

    <div className="card border-0 shadow-sm rounded-4 h-100">

      <div className="card-body text-center">

        <div className="mb-3">

          <i
            className="bi bi-person-circle text-primary"
            style={{ fontSize: "90px" }}
          />

        </div>

        <h4 className="fw-bold">
          {santri.nama}
        </h4>

        <p className="text-muted mb-2">
          Kelas {santri.kelas}
        </p>

        <span className="badge bg-success px-3 py-2">

          Saldo :
          {" "}
          Rp {santri.saldo.toLocaleString("id-ID")}

        </span>

      </div>

    </div>

  </div>

  {/* FORM TRANSAKSI */}

  <div className="col-lg-8">

    <div className="card border-0 shadow-sm rounded-4">

      <div className="card-body">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h5 className="fw-bold mb-0">

            <i className="bi bi-cart-check me-2" />

            Sistem Kasir

          </h5>

          <button className="btn btn-primary rounded-3">

            <i className="bi bi-qr-code-scan me-2" />

            Scan QR

          </button>

        </div>

        <div className="row g-3">

          <div className="col-md-6">

            <label className="form-label">
              Nama Santri
            </label>

            <input
              className="form-control"
              value={santri.nama}
              readOnly
            />

          </div>

          <div className="col-md-6">

            <label className="form-label">
              Kelas
            </label>

            <input
              className="form-control"
              value={santri.kelas}
              readOnly
            />

          </div>

          <div className="col-md-6">

            <label className="form-label">
              Kategori
            </label>

            <select className="form-select">

              <option>Jajanan</option>
              <option>Minuman</option>
              <option>Laundry</option>
              <option>Alat Tulis</option>
              <option>Kitab</option>
              <option>Lainnya</option>

            </select>

          </div>

          <div className="col-md-6">

            <label className="form-label">
              Nominal Belanja
            </label>

            <input
              type="number"
              className="form-control"
              placeholder="Masukkan nominal"
            />

          </div>

          <div className="col-12">

            <label className="form-label">
              Keterangan
            </label>

            <textarea
              rows={3}
              className="form-control"
              placeholder="Catatan transaksi..."
            />

          </div>

        </div>

        <hr />

        <div className="d-flex gap-2">

          <button className="btn btn-success flex-fill py-2">

            <i className="bi bi-check-circle me-2" />

            Simpan Transaksi

          </button>

          <button className="btn btn-secondary">

            Reset

          </button>

        </div>

      </div>

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
                          alt={selectedData.nama}
                          width={90}
                          height={90}
                          className="rounded-circle border"
                        />

                        <div>

                          <h4 className="fw-bold mb-1">
                            {selectedData.nama}
                          </h4>

                          <p className="text-muted mb-2">
                            {selectedData.email}
                          </p>

                          <span
                            className={`badge text-bg-${selectedData.badge}`}
                          >
                            {selectedData.status}
                          </span>

                        </div>

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

