import Sidebar from "@/app/keuangan/components/sidebar"
import Navbar from "@/app/keuangan/components/navbar"
import DashboardHeader from "@/app/keuangan/components/dashboardheader"
import MetricSection from "@/app/keuangan/components/metricssection"
import SalesChart from "@/app/keuangan/components/saleschart"
import TeamActivity from "@/app/keuangan/components/teamactivity"
import Footer from "@/app/keuangan/components/footer"
import Monitoring from "@/app/keuangan/components/monitoring"
import InformasiPage from "@/app/keuangan/components/informasi"

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

            <DashboardHeader />

            

            <section className="row g-3 mt-3">

              <div className="col-12 col-xl-8">
                <SalesChart />
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