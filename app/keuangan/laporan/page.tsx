"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

import Sidebar from "@/app/keuangan/components/sidebar"
import Navbar from "@/app/keuangan/components/navbar"
import Footer from "@/app/keuangan/components/footer"
import DetailPembayaranModal from "../laporan/detail"
import DetailLaporanModal from "../laporan/detail"



  interface Statistik {
    total_topup: number;
    total_pembayaran: number;
    saldo: number;
    jumlah_transaksi: number;
}



export default function Pembayaran() {
    const [laporan, setLaporan] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedData, setSelectedData] = useState<any>(null)


  const [summary, setSummary] = useState({
    total_topup: 0,
    total_pembayaran: 0,
    saldo_saat_ini: 0,
    jumlah_transaksi: 0,
});

  
  const [statistik, setStatistik] = useState({
    total_topup: 0,
    total_pembayaran: 0,
    saldo: 0,
    jumlah_transaksi: 0,
});

useEffect(() => {
    getLaporan();
    
}, []);



  const getstatistik = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:8080/laporan/statistik/${id}`)
      const result = await res.json()

      setStatistik(result.data)
    } catch (err) {
      console.log(err);
    }
  }

  const getLaporan = async () => {
    try {
      const res = await fetch("http://localhost:8080/laporan")
      const result = await res.json()

      console.log(result); 

      setLaporan(result.data || []);
      setSummary(result.summary);

      if (result.summary) {
    setSummary(result.summary);
   }

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
        <h6 className="text-muted">Total Topup</h6>
        <h4 className="fw-bold text-success">
          Rp {Number(summary.total_topup).toLocaleString("id-ID")}
        </h4>
      </div>
    </div>
  </div>

  <div className="col-md-3">
    <div className="panel">
      <div className="panel-body text-center">
        <h6 className="text-muted">Total Pembayaran</h6>
        <h4 className="fw-bold text-danger">
          Rp {Number(summary.total_pembayaran).toLocaleString("id-ID")}
        </h4>
      </div>
    </div>
  </div>

  <div className="col-md-3">
    <div className="panel">
      <div className="panel-body text-center">
        <h6 className="text-muted">Total Saldo Santri</h6>
        <h4 className="fw-bold text-primary">
          Rp {Number(summary.saldo_saat_ini).toLocaleString("id-ID")}
        </h4>
      </div>
    </div>
  </div>

  <div className="col-md-3">
    <div className="panel">
      <div className="panel-body text-center">
        <h6 className="text-muted">Jumlah Transaksi</h6>
        <h4 className="fw-bold">
          {summary.jumlah_transaksi}
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
                            onClick={() => {
                                setSelectedData(item);
                                getstatistik(item.santri_id);
                            }}
                             
                            >

                              <i className="bi bi-eye" />

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
    <DetailLaporanModal selectedData={selectedData}statistik={statistik}/>
    </div>
  )
}
