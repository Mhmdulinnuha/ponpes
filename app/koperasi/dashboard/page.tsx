import Sidebar from "@/app/koperasi/components/sidebar"
import Navbar from "@/app/koperasi/components/navbar"
import Footer from "@/app/koperasi/components/footer"

import DashboardKoperasiHeader from "@/app/koperasi/components/dashboardheader"
import KoperasiMetrics from "@/app/koperasi/components/metricssection"
import ScanQrCard from "@/app/koperasi/components/scanqr"
import TransaksiTerbaru from "@/app/koperasi/components/transaksiterbaru"
import KategoriTerlaris from "@/app/koperasi/components/kategoriterlaris"

export default function Home() {
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

            <DashboardKoperasiHeader />

            <KoperasiMetrics />

            <section className="row g-4 mt-2">

              <div className="col-lg-8">
               
              </div>

              <div className="col-lg-4">
                <ScanQrCard />
              </div>

            </section>

            <section className="row g-4 mt-2">

              <div className="col-lg-7">
                <TransaksiTerbaru />
              </div>

              <div className="col-lg-5">
                <KategoriTerlaris />
              </div>

            </section>

          </div>

        </main>

        <Footer />

      </div>

    </div>
  )
}