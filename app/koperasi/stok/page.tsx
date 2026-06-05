"use client"
import Image from "next/image"
import { useState } from "react"
import Sidebar from "@/app/koperasi/components/sidebar"
import Navbar from "@/app/koperasi/components/navbar"
import Footer from "@/app/koperasi/components/footer"

const stok = [
  {
    id: "STK-001",
    nama: "Aqua 600ml",
    kategori: "Minuman",
    stokAwal: 100,
    stokMasuk: 50,
    stokKeluar: 30,
    stokAkhir: 120,
    status: "Normal",
    badge: "success",
  },
  {
    id: "STK-002",
    nama: "Chitato",
    kategori: "Jajanan",
    stokAwal: 80,
    stokMasuk: 20,
    stokKeluar: 15,
    stokAkhir: 85,
    status: "Normal",
    badge: "primary",
  },
  {
    id: "STK-003",
    nama: "Kitab Jurumiyah",
    kategori: "Kitab",
    stokAwal: 10,
    stokMasuk: 0,
    stokKeluar: 8,
    stokAkhir: 2,
    status: "Menipis",
    badge: "warning",
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
                    Manajemen Stok
                    </h1>

                    <p className="text-muted mb-0">
                    Kelola stok barang koperasi
                    </p>

                </div>

              </div>

              <button className="btn btn-primary">

                <i className="bi bi-plus-lg me-2" />

               Tambah Stok

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
                        placeholder="Cari barang..."
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

                    Data Stok Barang
                  </h2>

                  <p className="text-muted mb-0">
                    Cari dan kelola data supplier koperasi
                  </p>

                </div>

                <input
                  type="search"
                  className="form-control form-control-sm"
                  placeholder="Cari kategori..."
                  style={{ width: "260px" }}
                />

              </div>


              <div className="table-responsive">
  <table className="table align-middle">
    <thead>
          <tr>
  <th>ID</th>
  <th>Foto</th>
  <th>Nama Barang</th>
  <th>Kategori</th>
  <th>Stok Awal</th>
  <th>Stok Akhir</th>
  <th>Status</th>
  <th className="text-end">Aksi</th>
</tr>
    </thead>

    <tbody>
      {stok.map((item) => (
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

<td>{item.kategori}</td>

<td>{item.stokAwal} Item</td>

<td>{item.stokAkhir} Item</td>

          <td className="text-end">
            <div className="d-flex justify-content-end gap-2">
              <button
  className="btn btn-light btn-sm rounded-3"
  data-bs-toggle="modal"
  data-bs-target="#detailStokModal"
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
                id="detailStokModal"
                tabIndex={-1}
                aria-hidden="true">
        
                <div className="modal-dialog modal-xl modal-dialog-centered">
        
                  <div className="modal-content border-0 rounded-4 overflow-hidden">
        
                    {/* MODAL HEADER */}
        
                    <div className="modal-header bg-primary text-white border-0">
        
                      <h5 className="modal-title fw-semibold">
        
                        <i className="bi bi-wallet2 me-2" />
        
                       Detail Stok Barang
        
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
            Informasi Barang
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
                    Kategori : {selectedData.kategori}
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
            Informasi Kategori
          </h5>

          <div className="row g-3">

                      <div className="col-md-3">
  <div className="bg-light rounded-4 p-3">
    <small className="text-muted">
      Stok Awal
    </small>

    <h5 className="fw-bold mb-0">
      {selectedData.stokAwal}
    </h5>
  </div>
</div>

<div className="col-md-3">
  <div className="bg-light rounded-4 p-3">
    <small className="text-muted">
      Barang Masuk
    </small>

    <h5 className="fw-bold text-success mb-0">
      {selectedData.stokMasuk}
    </h5>
  </div>
</div>

<div className="col-md-3">
  <div className="bg-light rounded-4 p-3">
    <small className="text-muted">
      Barang Keluar
    </small>

    <h5 className="fw-bold text-danger mb-0">
      {selectedData.stokKeluar}
    </h5>
  </div>
</div>

<div className="col-md-3">
  <div className="bg-light rounded-4 p-3">
    <small className="text-muted">
      Stok Akhir
    </small>

    <h5 className="fw-bold text-primary mb-0">
      {selectedData.stokAkhir}
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

            Riwayat Pergerakan Stok
          </h5>

         <div className="list-group">

  <div className="list-group-item d-flex justify-content-between">
    <span>Barang Masuk</span>
    <span>+50 Item</span>
  </div>

  <div className="list-group-item d-flex justify-content-between">
    <span>Barang Keluar</span>
    <span>-30 Item</span>
  </div>

  <div className="list-group-item d-flex justify-content-between">
    <span>Retur Barang</span>
    <span>+5 Item</span>
  </div>

  <div className="list-group-item d-flex justify-content-between">
    <span>Penyesuaian Stok</span>
    <span>-2 Item</span>
  </div>

</div>

        </div>

      </div>

      {/* ACTION BUTTON */}

      <div className="d-flex flex-wrap gap-2">

        <button className="btn btn-success flex-fill">
  <i className="bi bi-box-arrow-in-down me-2" />
  Barang Masuk
</button>

<button className="btn btn-warning flex-fill">
  <i className="bi bi-box-arrow-up me-2" />
  Barang Keluar
</button>

<button className="btn btn-info flex-fill">
  <i className="bi bi-arrow-repeat me-2" />
  Retur Barang
</button>

<button className="btn btn-primary flex-fill">
  <i className="bi bi-clipboard-check me-2" />
  Stock Opname
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