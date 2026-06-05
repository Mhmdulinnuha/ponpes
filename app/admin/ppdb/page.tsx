import Sidebar from "@/app/admin/components/sidebar"
import Navbar from "@/app/admin/components/navbar"
import DashboardHeader from "@/app/admin/components/dashboardheader"
import Footer from "@/app/admin/components/footer"
import "./ppdb.css"
const fitur = [
  {
    title: "Form Pendaftaran",
    desc: "Isi data calon peserta didik secara online dengan mudah.",
    icon: "bi-person-plus-fill",
    color: "primary",
    button: "Daftar Sekarang",
  },
  {
    title: "Upload Berkas",
    desc: "Upload dokumen persyaratan secara digital.",
    icon: "bi-cloud-arrow-up-fill",
    color: "success",
    button: "Upload Berkas",
  },
  {
    title: "Verifikasi Admin",
    desc: "Pantau proses verifikasi data dan berkas.",
    icon: "bi-patch-check-fill",
    color: "warning",
    button: "Lihat Status",
  },
  {
    title: "Pengumuman Seleksi",
    desc: "Informasi hasil seleksi peserta didik.",
    icon: "bi-megaphone-fill",
    color: "info",
    button: "Lihat Pengumuman",
  },
  {
    title: "Cetak Formulir",
    desc: "Cetak bukti pendaftaran.",
    icon: "bi-printer-fill",
    color: "danger",
    button: "Cetak Formulir",
  },
]

const statistik = [
  {
    total: "1.250",
    label: "Total Pendaftar",
    color: "primary",
  },
  {
    total: "980",
    label: "Terverifikasi",
    color: "success",
  },
  {
    total: "270",
    label: "Menunggu Verifikasi",
    color: "danger",
  },
]

export default function PPDB() {
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



            <div className="ppdb-page">

      <section className="hero">

        <h1 className="display-4 fw-bold">
          PPDB ONLINE 2026
        </h1>

        <p className="lead">
          Sistem Penerimaan Peserta Didik Baru
        </p>

        <button className="btn btn-light">
          Mulai Pendaftaran
        </button>

      </section>


      <div className="container-fluid px-4">

        <div className="row g-4 feature-section">

          {fitur.map((item, index) => (

            <div
              key={index}
              className={
                index < 3
                  ? "col-lg-4"
                  : "col-lg-6"
              }
            >

              <div className="feature-card">

                <div
                  className={`icon-box bg-${item.color}`}
                >

                  <i
                    className={`bi ${item.icon}`}
                  ></i>

                </div>

                <h4>
                  {item.title}
                </h4>

                <p className="text-muted">
                  {item.desc}
                </p>

                <button
                  className={`btn btn-${item.color}`}
                >
                  {item.button}
                </button>

              </div>

            </div>

          ))}

        </div>


        <div className="row mt-5 g-4">

          {statistik.map((item, index) => (

            <div
              key={index}
              className="col-md-4"
            >

              <div className="stat-card">

                <h2
                  className={`text-${item.color}`}
                >
                  {item.total}
                </h2>

                <p>
                  {item.label}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

            

            

            <section className="row g-3 mt-3">

              <div className="col-12 col-xl-8">
               
              </div>

              <div className="col-12 col-xl-4">
               
              </div>

            </section>
           

            

            <div className="mt-3">
              
            </div>

          </div>

        </main>

        <Footer />

      </div>

    </div>
  )
}