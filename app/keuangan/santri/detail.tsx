export default function RiwayatTopupModal({
  selectedData,
}: any) {
  if (!selectedData) return null

  const riwayat = selectedData.topup || []

  return (
    <div
      className="modal fade"
      id="riwayatTopupModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header bg-info text-white">
            <h5 className="modal-title">
              Riwayat Top Up Saldo
            </h5>

            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
            />
          </div>

          <div className="modal-body">

            <div className="mb-3">
              <strong>Nama Santri :</strong>{" "}
              {selectedData.santri?.nama_lengkap}
            </div>

            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Tanggal</th>
                    <th>Nominal</th>
                    <th>Keterangan</th>
                  </tr>
                </thead>

                <tbody>
                  {riwayat.length > 0 ? (
                    riwayat.map(
                      (item: any, index: number) => (
                        <tr key={item.id}>
                          <td>{index + 1}</td>

                          <td>
                            {new Date(
                              item.created_at
                            ).toLocaleDateString(
                              "id-ID"
                            )}
                          </td>

                          <td>
                            Rp{" "}
                            {Number(
                              item.nominal
                            ).toLocaleString(
                              "id-ID"
                            )}
                          </td>

                          <td>
                            {item.keterangan}
                          </td>
                        </tr>
                      )
                    )
                  ) : (
                    <tr>
                      <td
                        colSpan={4}
                        className="text-center"
                      >
                        Belum ada riwayat top up
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

          </div>

          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Tutup
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}