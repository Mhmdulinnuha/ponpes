import Image from "next/image"

import Sidebar from "@/app/admin/components/sidebar"
import Navbar from "@/app/admin/components/navbar"
import Footer from "@/app/admin/components/footer"

const guru = [
  {
    id: "G-001",
    nama: "Ustadz Ahmad Hasan",
    ttl: "Bandung, 12 Mei 1990",
    jabatan: "Guru Tetap",
    badge: "primary",
    mapel: "Bahasa Arab",
    email: "guru1@pondok.id",
    wa: "081234567890",
    alamat: "Bandung",
  },
  {
    id: "G-002",
    nama: "Ustadzah Siti Aisyah",
    ttl: "Jakarta, 08 Agustus 1992",
    jabatan: "Wali Kelas",
    badge: "success",
    mapel: "Fiqih",
    email: "guru2@pondok.id",
    wa: "082345678901",
    alamat: "Jakarta",
  },
  {
    id: "G-003",
    nama: "Ustadz Abdul Karim",
    ttl: "Cirebon, 03 Maret 1988",
    jabatan: "Kepala Madrasah",
    badge: "warning",
    mapel: "Tafsir",
    email: "guru3@pondok.id",
    wa: "083456789012",
    alamat: "Cirebon",
  },
]

export default function Guru() {
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
                    Data Guru
                  </h1>

                  <p className="text-muted mb-0">
                    Daftar data dan informasi seluruh guru
                  </p>

                </div>

              </div>

              <button className="btn btn-primary">

                <i className="bi bi-plus-lg me-2" />

                Tambah Guru

              </button>

            </div>


            {/* TABLE */}

            <section className="panel mt-4">

              <div className="panel-header d-flex justify-content-between align-items-center mb-3">

                <div>

                  <h2 className="h5 mb-1">

                    <i className="bi bi-table me-2" />

                    Data Guru

                  </h2>

                  <p className="text-muted mb-0">
                    Cari dan kelola data guru
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

                      <th>ID Guru</th>
                      <th>Foto</th>
                      <th>Nama Lengkap</th>
                      <th>TTL</th>
                      <th>Jabatan</th>
                      <th>Mapel</th>
                      <th>Email</th>
                      <th>WhatsApp</th>
                      <th>Alamat</th>
                      <th className="text-end">
                        Aksi
                      </th>

                    </tr>

                  </thead>


                  <tbody>

                    {guru.map((item) => (

                      <tr key={item.id}>

                        <td className="fw-semibold">
                          {item.id}
                        </td>

                        <td>

                          <Image
                            src="/images/avatar/avatar.jpg"
                            alt={item.nama}
                            width={44}
                            height={44}
                            className="rounded-circle"
                          />

                        </td>

                        <td>
                          {item.nama}
                        </td>

                        <td>
                          {item.ttl}
                        </td>

                        <td>

                          <span
                            className={`badge text-bg-${item.badge}`}
                          >

                            {item.jabatan}

                          </span>

                        </td>

                        <td>
                          {item.mapel}
                        </td>

                        <td>
                          {item.email}
                        </td>

                        <td>
                          {item.wa}
                        </td>

                        <td>
                          {item.alamat}
                        </td>

                        <td className="text-end">

                          <button className="btn btn-light btn-sm">

                            <i className="bi bi-pencil" />

                          </button>

                          <button className="btn btn-danger btn-sm ms-2">

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

        <Footer />

      </div>

    </div>
  )
}