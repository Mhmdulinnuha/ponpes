import Link from "next/link"
import Image from "next/image"

export default function RecentUsers() {
  const users = [
    {
      name: "Sarah Ahmed",
      email: "sarah@example.com",
      role: "Admin",
      team: "Operations",
      status: "Active",
      badge: "text-bg-success",
      joined: "Jan 12, 2026",
      avatar: "/images/avatar/avatar-1.jpg",
    },
    {
      name: "Rafi Khan",
      email: "rafi@example.com",
      role: "Manager",
      team: "Sales",
      status: "Active",
      badge: "text-bg-success",
      joined: "Feb 03, 2026",
      avatar: "/images/avatar/avatar-2.jpg",
    },
    {
      name: "Nadia Islam",
      email: "nadia@example.com",
      role: "Editor",
      team: "Content",
      status: "Pending",
      badge: "text-bg-warning",
      joined: "Mar 18, 2026",
      avatar: "/images/avatar/avatar-3.jpg",
    },
    {
      name: "Mina Torres",
      email: "mina@example.com",
      role: "Viewer",
      team: "Finance",
      status: "Suspended",
      badge: "text-bg-secondary",
      joined: "Apr 07, 2026",
      avatar: "/images/avatar/avatar-4.jpg",
    },
    {
      name: "Jon Oliver",
      email: "jon@example.com",
      role: "Analyst",
      team: "Data",
      status: "Active",
      badge: "text-bg-success",
      joined: "Apr 22, 2026",
      avatar: "/images/avatar/avatar-5.jpg",
    },
  ]

  return (
    <section className="panel mt-3">

      <div className="panel-header">

        <div>

          <h2 className="h5 mb-1 section-title">

            <i
              className="bi bi-people"
              aria-hidden="true"
            ></i>

            <span>Recent Users</span>

          </h2>

          <p className="text-muted mb-0">
            Latest account activity across the workspace.
          </p>

        </div>

        <Link
          href="/users"
          className="btn btn-outline-secondary btn-sm"
        >
          Manage Users
        </Link>

      </div>

      <div className="table-responsive">

        <table className="table align-middle mb-0">

          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Team</th>
              <th>Status</th>
              <th>Joined</th>
              <th className="text-end">
                Action
              </th>
            </tr>
          </thead>

          <tbody>

            {users.map((user, index) => (
              <tr key={index}>

                <td>

                  <div className="d-flex align-items-center gap-2">

                    <Image
                      src={user.avatar}
                      width={40}
                      height={40}
                      alt={user.name}
                      className="avatar-img avatar-sm"
                    />

                    <div>

                      <p className="fw-semibold mb-0">
                        {user.name}
                      </p>

                      <p className="text-muted small mb-0">
                        {user.email}
                      </p>

                    </div>

                  </div>

                </td>

                <td>{user.role}</td>

                <td>{user.team}</td>

                <td>
                  <span
                    className={`badge ${user.badge}`}
                  >
                    {user.status}
                  </span>
                </td>

                <td>{user.joined}</td>

                <td className="text-end">

                  <Link
                    href={`/users/${index + 1}`}
                    className="btn btn-light btn-sm"
                  >
                    View
                  </Link>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </section>
  )
}