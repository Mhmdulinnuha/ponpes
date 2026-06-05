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
        <Link className="nav-link active" href="/koperasi/dashboard">
          <span className="nav-icon">
            <i className="bi bi-speedometer2" />
          </span>
          <span className="nav-text">Dashboard</span>
        </Link>

        <Link className="nav-link" href="/koperasi/kasir">
          <span className="nav-icon">
            <i className="bi bi-people" />
          </span>
          <span className="nav-text">Kasir</span>
        </Link>

        <Link className="nav-link" href="/koperasi/kategori">
          <span className="nav-icon">
            <i className="bi bi-people" />
          </span>
          <span className="nav-text">Data Kategori</span>
        </Link>

        <Link className="nav-link" href="/koperasi/produk">
          <span className="nav-icon">
            <i className="bi bi-person-plus" />
          </span>
          <span className="nav-text">Data Produk</span>
        </Link>

        <Link className="nav-link" href="/koperasi/suplier">
          <span className="nav-icon">
            <i className="bi bi-person-badge" />
          </span>
          <span className="nav-text">Suplier</span>
        </Link>

        <Link className="nav-link" href="/koperasi/stok">
          <span className="nav-icon">
            <i className="bi bi-person-badge" />
          </span>
          <span className="nav-text">Stok</span>
        </Link>

         <Link className="nav-link" href="/koperasi/laporan">
          <span className="nav-icon">
            <i className="bi bi-person-badge" />
          </span>
          <span className="nav-text">Laporan</span>
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