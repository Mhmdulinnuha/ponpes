

const stats = [
  {
    title: "Guru Hadir Hari Ini",
    value: 82,
    icon: "bi-person-check-fill",
    color: "primary",
  },
  {
    title: "Santri Hadir Hari Ini",
    value: 540,
    icon: "bi-people-fill",
    color: "success",
  },
  {
    title: "Guru Belum Absen",
    value: 12,
    icon: "bi-clock-fill",
    color: "warning",
  },
  {
    title: "Santri Belum Absen",
    value: 48,
    icon: "bi-calendar-x-fill",
    color: "info",
  },
  {
    title: "Guru Terlambat",
    value: 5,
    icon: "bi-exclamation-circle-fill",
    color: "danger",
  },
  {
    title: "Santri Terlambat",
    value: 21,
    icon: "bi-alarm-fill",
    color: "dark",
  },
]

export default function MonitoringPage() {
  return (
    <div className="monitoring-container">

      <div className="d-flex justify-content-between align-items-center mb-5">

        <div>
          <h2 className="dashboard-title">
            Monitoring Real-Time
          </h2>

          <p className="text-secondary">
            Data Kehadiran Hari Ini
          </p>
        </div>

        <div className="d-flex gap-2 align-items-center">
          <span className="live-dot"></span>

          <span className="fw-bold text-success">
            LIVE
          </span>
        </div>

      </div>

      <div className="row g-4">

        {stats.map((item, index) => (
          <Card
            key={index}
            {...item}
          />
        ))}

      </div>

    </div>
  )
}


function Card({
  title,
  value,
  icon,
  color,
}) {
  return (
    <div className="col-md-4">

      <div className="card monitor-card shadow-sm">

        <div className="card-body">

          <div className="d-flex justify-content-between">

            <div>

              <p className="text-secondary mb-2">
                {title}
              </p>

              <h2 className={`text-${color}`}>
                {value}
              </h2>

            </div>

            <div className={`icon-box bg-${color}-subtle`}>

              <i className={`bi ${icon} text-${color}`}></i>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}