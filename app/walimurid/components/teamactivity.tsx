export default function TeamActivity() {
  const activities = [
    {
      title: "New campaign launched",
      description:
        "Marketing team published the May offer.",
      color: "bg-primary",
    },
    {
      title: "Payment batch cleared",
      description:
        "246 invoices were processed successfully.",
      color: "bg-success",
    },
    {
      title: "Support queue rising",
      description:
        "Average first response time is 18 minutes.",
      color: "bg-warning",
    },
  ]

  return (
    <div className="panel h-100">

      <div className="panel-header">

        <div>

          <h2 className="h5 mb-1 section-title">

            <i
              className="bi bi-activity"
              aria-hidden="true"
            ></i>

            <span>Team Activity</span>

          </h2>

          <p className="text-muted mb-0">
            Recent operational updates.
          </p>

        </div>

      </div>

      <div className="activity-list">

        {activities.map((item, index) => (
          <div
            key={index}
            className="activity-item"
          >

            <span
              className={`activity-dot ${item.color}`}
            ></span>

            <div>

              <p className="mb-1 fw-semibold">
                {item.title}
              </p>

              <p className="text-muted small mb-0">
                {item.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}