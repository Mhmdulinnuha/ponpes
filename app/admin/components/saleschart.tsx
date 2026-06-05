import Link from "next/link"

export default function SalesChart() {
  const sales = [
    { month: "Jan", height: "bar-42" },
    { month: "Feb", height: "bar-58" },
    { month: "Mar", height: "bar-51" },
    { month: "Apr", height: "bar-72" },
    { month: "May", height: "bar-66" },
    { month: "Jun", height: "bar-83" },
  ]

  return (
    <div className="panel">

      <div className="panel-header">

        <div>

          <h2 className="h5 mb-1 section-title">

            <i
              className="bi bi-graph-up-arrow"
              aria-hidden="true"
            ></i>

            <span>Pembayaran</span>

          </h2>

          <p className="text-muted mb-0">
            Monthly revenue compared with operational targets.
          </p>

        </div>

        <Link
          className="btn btn-light btn-sm"
          href="/charts"
        >
          View Details
        </Link>

      </div>

      

      <div
        className="chart-bars"
        aria-label="Sales performance chart"
      >
        {sales.map((item, index) => (
          <div
            key={index}
            className={`chart-column ${item.height}`}
          >
            <span></span>

            <small>
              {item.month}
            </small>
          </div>
        ))}
      </div>

      <hr />

      <div className="panel-header">

        <div>

          <h2 className="h5 mb-1 section-title">

            <i
              className="bi bi-graph-up-arrow"
              aria-hidden="true"
            ></i>

            <span>Koperasi</span>

          </h2>

          <p className="text-muted mb-0">
            Monthly revenue compared with operational targets.
          </p>

        </div>

        <Link
          className="btn btn-light btn-sm"
          href="/charts"
        >
          View Details
        </Link>

      </div>


      <div
        className="chart-bars"
        aria-label="Sales performance chart"
      >
        {sales.map((item, index) => (
          <div
            key={index}
            className={`chart-column ${item.height}`}
          >
            <span></span>

            <small>
              {item.month}
            </small>
          </div>
        ))}
      </div>

      <hr />

      <div className="panel-header">

        <div>

          <h2 className="h5 mb-1 section-title">

            <i
              className="bi bi-graph-up-arrow"
              aria-hidden="true"
            ></i>

            <span>Absensi</span>

          </h2>

          <p className="text-muted mb-0">
            Monthly revenue compared with operational targets.
          </p>

        </div>

        <Link
          className="btn btn-light btn-sm"
          href="/charts"
        >
          View Details
        </Link>

      </div>

      

      <div
        className="chart-bars"
        aria-label="Sales performance chart"
      >
        {sales.map((item, index) => (
          <div
            key={index}
            className={`chart-column ${item.height}`}
          >
            <span></span>

            <small>
              {item.month}
            </small>
          </div>
        ))}
      </div>

    </div>
  )
}