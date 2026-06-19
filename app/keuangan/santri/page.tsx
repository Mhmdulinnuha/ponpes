"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import Sidebar from "@/app/keuangan/components/sidebar"
import Navbar from "@/app/keuangan/components/navbar"
import Footer from "@/app/keuangan/components/footer"
import TopupSaldoModal from "./topup"
import RiwayatTopupModal from "./detail"


export default function SaldoSantri() {
  const [selectedData, setSelectedData] = useState<any>(null)
  const [saldoSantri, setSaldoSantri] = useState<any[]>([])
  
  const [loading, setLoading] = useState(true)
  useEffect(() => {
  getSaldoSantri()
}, [])

const getSaldoSantri = async () => {
  try {
    const res = await fetch(
      "http://localhost:8080/saldo-santri"
    )

    const result = await res.json()

    if (!res.ok) {
      throw new Error(result.message)
    }

    setSaldoSantri(result.data)
    console.log(result.data)
  } catch (err) {
    console.error(err)
  } finally {
    setLoading(false)
  }
}
if (loading) {
  return (
    <div className="container py-5">
      Loading Saldo Santri...
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
                    Data Saldo Santri
                  </h1>

                 <p className="text-muted mb-0">
                  Monitoring saldo dan limit transaksi santri
                  </p>

                </div>

              </div>

              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#topupSaldoModal"
              >
                <i className="bi bi-wallet2 me-2"></i>
                Topup Saldo
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

         

          <td>{item.santri?.nama_lengkap || "-"}</td>

          <td>
            Rp {Number(item.saldo_utama).toLocaleString("id-ID")}
          </td>

          <td>
            Rp {Number(item.limit_harian).toLocaleString("id-ID")}
          </td>

          <td>
            Rp {Number(item.terpakai_hari_ini).toLocaleString("id-ID")}
          </td>

          <td>
            <span
              className={`badge ${
                item.status === "Aktif"
                  ? "bg-success"
                  : "bg-danger"
              }`}
            >
              {item.status}
            </span>
          </td>

          <td className="text-end">
            <div className="d-flex justify-content-end gap-2">
              <button
                className="btn btn-light btn-sm"
              >
                <i className="bi bi-eye" />
              </button>

            <button
              className="btn btn-info btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#riwayatTopupModal"
              onClick={() => setSelectedData(item)}
            >
              <i className="bi bi-clock-history" />
            </button>

             <button
              className="btn btn-secondary btn-sm"
            >
              <i className="bi bi-lock" />
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

         <TopupSaldoModal onSuccess={getSaldoSantri} saldoSantri={saldoSantri}/>
         <RiwayatTopupModal selectedData={selectedData}/>

        <Footer />

       
        

              

      </div>

    </div>
  )
}