export default function DashboardHeader() {
  return (
    <div className="page-heading">

      <div className="page-heading-copy">

        <span className="page-icon">
          <i
            className="bi bi-speedometer2"
            aria-hidden="true"
          ></i>
        </span>

        <div>
          <p className="eyebrow mb-1">Overview</p>

          <h1 className="h3 mb-1">
            Dashboard
          </h1>

          <p className="text-muted mb-0">
            Monitor performance, sales, users, and support
            from one clean workspace.
          </p>
        </div>

      </div>

      <div className="heading-actions">

        <button
          className="btn btn-outline-secondary btn-sm"
          type="button"
        >
          <i
            className="bi bi-download me-1"
            aria-hidden="true"
          ></i>

          Export
        </button>

        <button
          className="btn btn-primary btn-sm"
          type="button"
        >
          <i
            className="bi bi-file-earmark-plus me-1"
            aria-hidden="true"
          ></i>

          Create Report
        </button>

      </div>

    </div>
  )
}