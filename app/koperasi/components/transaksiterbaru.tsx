const transaksi = [
  {
    nama: "Ahmad Fauzan",
    kategori: "Jajanan",
    nominal: "Rp 10.000",
  },
  {
    nama: "Muhammad Rizki",
    kategori: "Minuman",
    nominal: "Rp 5.000",
  },
  {
    nama: "Abdul Rahman",
    kategori: "Laundry",
    nominal: "Rp 8.000",
  },
]

export default function TransaksiTerbaru() {
  return (
    <div className="card border-0 shadow-sm rounded-4">

      <div className="card-body">

        <h5 className="fw-bold mb-4">

          Transaksi Terbaru

        </h5>

        <table className="table">

          <thead>

            <tr>

              <th>Santri</th>
              <th>Kategori</th>
              <th>Nominal</th>

            </tr>

          </thead>

          <tbody>

            {transaksi.map((item, index) => (

              <tr key={index}>

                <td>{item.nama}</td>
                <td>{item.kategori}</td>
                <td>{item.nominal}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}