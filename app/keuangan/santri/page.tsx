"use client"
import Image from "next/image"
import { useState } from "react"
import Sidebar from "@/app/keuangan/components/sidebar"
import Navbar from "@/app/keuangan/components/navbar"
import Footer from "@/app/keuangan/components/footer"

const saldoSantri = [
  {
    id: "S-001",
    nama: "Ahmad Fauzan",
    saldoUtama: 1500000,
    limitHarian: 50000,
    saldoHariIni: 35000,
    status: "Aktif",
    badge: "success",
  },
  {
    id: "S-002",
    nama: "Muhammad Rizki",
    saldoUtama: 850000,
    limitHarian: 30000,
    saldoHariIni: 10000,
    status: "Aktif",
    badge: "primary",
  },
  {
    id: "S-003",
    nama: "Abdul Rahman",
    saldoUtama: 25000,
    limitHarian: 50000,
    saldoHariIni: 0,
    status: "Limit Habis",
    badge: "danger",
  },
]

export default function Guru() {
  const [selectedData, setSelectedData] = useState<any>(null)
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
                    Data Saldo Santri
                  </h1>

                 <p className="text-muted mb-0">
                  Monitoring saldo dan limit transaksi santri
                  </p>

                </div>

              </div>

              <button className="btn btn-primary">

                <i className="bi bi-plus-lg me-2" />

                Tambah Santri

              </button>

            </div>

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

              <div className="panel-header d-flex justify-content-between align-items-center mb-3">

                <div>

                  <h2 className="h5 mb-1">

                    <i className="bi bi-table me-2" />

                    Data saldo Santri

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
        <th>ID</th>
        <th>Foto</th>
        <th>Nama Santri</th>
        <th>Saldo Utama</th>
        <th>Limit Harian</th>
        <th>Saldo Hari Ini</th>
        <th>Status</th>
        <th className="text-end">Aksi</th>
      </tr>
    </thead>

    <tbody>
      {saldoSantri.map((item) => (
        <tr key={item.id}>
          <td className="fw-semibold">{item.id}</td>

          <td>
            <Image
              src="/images/avatar/avatar.jpg"
              alt={item.nama}
              width={44}
              height={44}
              className="rounded-circle"
            />
          </td>

          <td>{item.nama}</td>

          <td>
            Rp {item.saldoUtama.toLocaleString("id-ID")}
          </td>

          <td>
            Rp {item.limitHarian.toLocaleString("id-ID")}
          </td>

          <td>
            Rp {item.saldoHariIni.toLocaleString("id-ID")}
          </td>

          <td>
            <span className={`badge text-bg-${item.badge}`}>
              {item.status}
            </span>
          </td>

          <td className="text-end">
            <div className="d-flex justify-content-end gap-2">
              <button
  className="btn btn-light btn-sm rounded-3"
  data-bs-toggle="modal"
  data-bs-target="#detailPembayaranModal"
  onClick={() => setSelectedData(item)}
>
  <i className="bi bi-eye" />
</button>

              <button className="btn btn-primary btn-sm rounded-3">
                <i className="bi bi-pencil-square" />
              </button>

              <button className="btn btn-danger btn-sm rounded-3">
                <i className="bi bi-trash" />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

            </section>

          </div>

        </main>

        <Footer />

              <div
                className="modal fade"
                id="detailPembayaranModal"
                tabIndex={-1}
                aria-hidden="true">
        
                <div className="modal-dialog modal-xl modal-dialog-centered">
        
                  <div className="modal-content border-0 rounded-4 overflow-hidden">
        
                    {/* MODAL HEADER */}
        
                    <div className="modal-header bg-primary text-white border-0">
        
                      <h5 className="modal-title fw-semibold">
        
                        <i className="bi bi-wallet2 me-2" />
        
                       Detail Saldo Santri
        
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
            Detail Saldo Santri
          </h5>

          <div className="row align-items-center">

            <div className="col-md-8">

              <div className="d-flex align-items-center gap-3">

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

                  <p className="text-muted mb-1">
                    Kelas : Al-Ulya
                  </p>

                  <p className="text-muted mb-0">
                    ID : {selectedData.id}
                  </p>

                </div>

              </div>

            </div>

            <div className="col-md-4 text-center">

              <Image
                src="/images/qrcode.png"
                alt="QR Code"
                width={120}
                height={120}
              />

              <small className="d-block text-muted mt-2">
                QR Santri
              </small>

            </div>

          </div>

        </div>

      </div>

      {/* INFORMASI SALDO */}

      <div className="card border-0 shadow-sm rounded-4">

        <div className="card-body p-4">

          <h5 className="fw-bold mb-4">
            <i className="bi bi-wallet2 me-2 text-success" />
            Informasi Saldo
          </h5>

          <div className="row g-3">

            <div className="col-md-3">

              <div className="bg-light rounded-4 p-3">

                <small className="text-muted">
                  Saldo Utama
                </small>

                <h5 className="fw-bold text-success mb-0">
                  Rp 500.000
                </h5>

              </div>

            </div>

            <div className="col-md-3">

              <div className="bg-light rounded-4 p-3">

                <small className="text-muted">
                  Limit Harian
                </small>

                <h5 className="fw-bold mb-0">
                  Rp 30.000
                </h5>

              </div>

            </div>

            <div className="col-md-3">

              <div className="bg-light rounded-4 p-3">

                <small className="text-muted">
                  Dipakai Hari Ini
                </small>

                <h5 className="fw-bold text-danger mb-0">
                  Rp 10.000
                </h5>

              </div>

            </div>

            <div className="col-md-3">

              <div className="bg-light rounded-4 p-3">

                <small className="text-muted">
                  Sisa Limit
                </small>

                <h5 className="fw-bold text-primary mb-0">
                  Rp 20.000
                </h5>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* AKTIVITAS */}

      <div className="card border-0 shadow-sm rounded-4">

        <div className="card-body p-4">

          <h5 className="fw-bold mb-4">

            <i className="bi bi-clock-history me-2 text-warning" />

            Aktivitas Hari Ini

          </h5>

          <div className="list-group">

            <div className="list-group-item d-flex justify-content-between align-items-center">

              <div>
                <i className="bi bi-check-circle-fill text-success me-2" />
                Koperasi
              </div>

              <span className="fw-semibold">
                Rp 5.000
              </span>

            </div>

            <div className="list-group-item d-flex justify-content-between align-items-center">

              <div>
                <i className="bi bi-check-circle-fill text-success me-2" />
                Laundry
              </div>

              <span className="fw-semibold">
                Rp 5.000
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* ACTION BUTTON */}

      <div className="d-flex flex-wrap gap-2">

        <button className="btn btn-success flex-fill">

          <i className="bi bi-plus-circle me-2" />

          Top Up Saldo

        </button>

        <button className="btn btn-primary flex-fill">

          <i className="bi bi-sliders me-2" />

          Atur Limit

        </button>

        <button className="btn btn-danger flex-fill">

          <i className="bi bi-lock me-2" />

          Nonaktifkan

        </button>

      </div>

    </div>

  )}

</div>
        
                  </div>
        
                </div>
        
              </div>

      </div>

    </div>
  )
}