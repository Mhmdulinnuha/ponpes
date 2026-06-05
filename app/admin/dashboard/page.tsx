import Sidebar from "@/app/admin/components/sidebar"
import Navbar from "@/app/admin/components/navbar"
import DashboardHeader from "@/app/admin/components/dashboardheader"
import MetricSection from "@/app/admin/components/metricssection"
import SalesChart from "@/app/admin/components/saleschart"
import TeamActivity from "@/app/admin/components/teamactivity"

import Footer from "@/app/admin/components/footer"
import Monitoring from "@/app/admin/components/monitoring"
import InformasiPage from "@/app/admin/components/informasi"

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

            <MetricSection />

            <section className="row g-3 mt-3">

              <div className="col-12 col-xl-8">
                <SalesChart />
              </div>

              <div className="col-12 col-xl-4">
                <TeamActivity />
              </div>

            </section>
            <Monitoring />

            <InformasiPage />

            <div className="mt-3">
              
            </div>

          </div>

        </main>

        <Footer />

      </div>

    </div>
  )
}