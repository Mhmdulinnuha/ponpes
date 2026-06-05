const informasi = [
  {
    title: "Kalender Akademik",
    desc: "Jadwal kegiatan akademik selama satu tahun.",
    icon: "bi-calendar3",
    color: "primary",
  },
  {
    title: "Pengumuman Pondok",
    desc: "Informasi dan pemberitahuan terbaru pondok.",
    icon: "bi-megaphone-fill",
    color: "danger",
  },
  {
    title: "Agenda Kegiatan",
    desc: "Daftar agenda dan aktivitas yang akan berlangsung.",
    icon: "bi-journal-text",
    color: "success",
  },
  {
    title: "Informasi PPDB",
    desc: "Informasi penerimaan peserta didik baru.",
    icon: "bi-person-plus-fill",
    color: "warning",
  },
  {
    title: "Jadwal Kegiatan",
    desc: "Jadwal kegiatan harian dan mingguan.",
    icon: "bi-clock-history",
    color: "info",
  },
]

export default function InformasiPage() {
  return (
    <div className="info-container">

      <div className="container py-5">

        <div className="text-center mb-5">

          <h2 className="section-title">
            Informasi Utama
          </h2>

          <p className="text-secondary">
            Informasi penting dan kegiatan pondok
          </p>

        </div>

        <div className="row g-4">

          {informasi.map((item, index) => (
            <div
              key={index}
              className={
                index < 3
                  ? "col-md-6 col-lg-4"
                  : "col-md-6"
              }
            >

              <div className="card info-card shadow-sm">

                <div className="card-body">

                  <div
                    className={`icon-box bg-${item.color}-subtle`}
                  >

                    <i
                      className={`bi ${item.icon} text-${item.color}`}
                    ></i>

                  </div>

                  <h5 className="mt-4 fw-bold">
                    {item.title}
                  </h5>

                  <p className="text-secondary">
                    {item.desc}
                  </p>

                  <button
                    className={`btn btn-${item.color} w-100`}
                  >
                    Lihat Detail
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}