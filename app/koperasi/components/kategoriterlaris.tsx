const kategori = [
  "Jajanan",
  "Minuman",
  "Laundry",
  "Alat Tulis",
  "Kitab",
  "Lainnya",
]

export default function KategoriTerlaris() {
  return (
    <div className="card border-0 shadow-sm rounded-4">

      <div className="card-body">

        <h5 className="fw-bold mb-4">

          Kategori Terlaris

        </h5>

        {kategori.map((item, index) => (

          <div
            key={index}
            className="d-flex justify-content-between border-bottom py-2"
          >

            <span>{item}</span>

            <span className="fw-bold">

              {100 - index * 10} transaksi

            </span>

          </div>

        ))}

      </div>

    </div>
  )
}