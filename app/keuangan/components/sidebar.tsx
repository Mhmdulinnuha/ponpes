import Link from "next/link"
import Image from "next/image"


export default function Sidebar() {
  return (
    <aside
      className="admin-sidebar"
      id="adminSidebar"
      aria-label="Main navigation"
    >
      <div className="sidebar-header">
        <Link
          className="brand-mark"
          href="/"
          aria-label="adminHMD dashboard"
        >
          <span className="brand-icon">
            <i className="bi bi-grid-1x2-fill" />
          </span>

          <span className="brand-copy">
            <span className="brand-title">adminHMD</span>
            <span className="brand-subtitle">Admin Template</span>
          </span>
        </Link>
      </div>

      <nav className="sidebar-nav">
        <Link className="nav-link active" href="/keuangan/dashboard">
          <span className="nav-icon">
            <i className="bi bi-speedometer2" />
          </span>
          <span className="nav-text">Dashboard</span>
        </Link>

        

        <Link className="nav-link" href="/keuangan/pembayaran">
          <span className="nav-icon">
            <i className="bi bi-people" />
          </span>
          <span className="nav-text">Pembayaran</span>
        </Link>

        <Link className="nav-link" href="/keuangan/santri">
          <span className="nav-icon">
            <i className="bi bi-person-plus" />
          </span>
          <span className="nav-text">Saldo Santri</span>
        </Link>

        <Link className="nav-link" href="/keuangan/laporan">
          <span className="nav-icon">
            <i className="bi bi-person-badge" />
          </span>
          <span className="nav-text">Laporan</span>
        </Link>

         <Link className="nav-link" href="/keuangan/tunggakan">
          <span className="nav-icon">
            <i className="bi bi-person-badge" />
          </span>
          <span className="nav-text">Tunggakan</span>
        </Link>
      </nav>

      <div className="sidebar-user">
        <Image
          src="/images/avatar.jpg"
          width={50}
          height={50}
          alt="Admin Hasan"
          className="avatar-img avatar-md sidebar-user-avatar"
        />

        <strong>Admin Hasan</strong>
        <small>Active Workspace</small>
      </div>

      <div className="sidebar-footer">
        <span className="status-dot"></span>
        <span className="sidebar-footer-text">
          System running smoothly
        </span>
      </div>
    </aside>
  )
}