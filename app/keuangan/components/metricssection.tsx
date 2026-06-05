export default function MetricsSection() {
  const metrics = [
    {
      title: "TotalSantri",
      value: "$48,240",
      icon: "bi-currency-dollar",
      card: "metric-primary",
      status: "+12.5%",
      statusClass: "text-success",
      subtitle: "from last month",
    },
    {
      title: "Santri Putra",
      value: "1,284",
      icon: "bi-bag-check",
      card: "metric-success",
      status: "+8.2%",
      statusClass: "text-success",
      subtitle: "new orders",
    },
    {
      title: "Santri Putri",
      value: "8,742",
      icon: "bi-people",
      card: "metric-warning",
      status: "+5.1%",
      statusClass: "text-success",
      subtitle: "active users",
    },
    {
      title: "Jumlah guru",
      value: "36",
      icon: "bi-life-preserver",
      card: "metric-danger",
      status: "3 urgent",
      statusClass: "text-danger",
      subtitle: "need review",
    },
    {
      title: "total wali santri",
      value: "36",
      icon: "bi-life-preserver",
      card: "metric-danger",
      status: "3 urgent",
      statusClass: "text-danger",
      subtitle: "need review",
    },
  ]

  return (
    <section
      className="row g-3 mt-1"
      aria-label="Dashboard metrics"
    >
      {metrics.map((item, index) => (
        <div
          key={index}
          className="col-12 col-sm-6 col-xl-3"
        >
          <article className={`metric-card ${item.card}`}>

            <div className="metric-top">
              <span className="metric-label">
                {item.title}
              </span>

              <span className="metric-icon">
                <i
                  className={`bi ${item.icon}`}
                  aria-hidden="true"
                />
              </span>
            </div>

            <div className="metric-value">
              {item.value}
            </div>

            <div className="metric-meta">
              <span className={item.statusClass}>
                {item.status}
              </span>

              <span>
                {item.subtitle}
              </span>
            </div>

          </article>
        </div>
      ))}
    </section>
  )
}