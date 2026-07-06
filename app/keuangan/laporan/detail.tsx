interface Statistik {
    total_topup: number;
    total_pembayaran: number;
    saldo: number;
    jumlah_transaksi: number;
}

interface DetailLaporanModalProps {
    selectedData: any;
    statistik: Statistik;
}
export default function DetailLaporanModal({
    selectedData,
    statistik,
 
}: DetailLaporanModalProps){

    return (
      <div
        className="modal fade"
        id="detailPembayaranModal"
        tabIndex={-1}
        aria-hidden="true"
      >

        <div className="modal-dialog modal-xl modal-dialog-centered">

          <div className="modal-content border-0 rounded-4 overflow-hidden">

            {/* MODAL HEADER */}

            <div className="modal-header bg-primary text-white border-0">

              <h5 className="modal-title fw-semibold">
              <i className="bi bi-bar-chart-line me-2" />
              Detail Laporan Keuangan
            </h5>

              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              />

            </div>

            {/* MODAL BODY */}

            <div className="modal-body p-4">

              {selectedData && (

                <div className="d-flex flex-column gap-4">

                  {/* PROFILE SANTRI */}

                  <div className="card border-0 shadow-sm rounded-4">
  <div className="card-body p-4">

   <h5 className="fw-bold mb-4">
    <i className="bi bi-file-earmark-bar-graph me-2 text-primary" />
    Ringkasan Laporan
  </h5>

    <div className="row g-4">

      <div className="col-md-6">

        <div className="bg-light rounded-4 p-3">

          <small className="text-muted">
            Nama Santri
          </small>

          <h6 className="fw-bold mb-0">
            {selectedData.santri?.nama_lengkap}
          </h6>

        </div>

      </div>

      <div className="col-md-6">

        <div className="bg-light rounded-4 p-3">

          <small className="text-muted">
            Jenis Transaksi
          </small>

          <h6 className="fw-bold mb-0">
            {selectedData.jenis_pembayaran?.nama_jenis}
          </h6>

        </div>

      </div>

      <div className="col-md-6">

        <div className="bg-light rounded-4 p-3">

          <small className="text-muted">
            Nominal
          </small>

          <h5 className="fw-bold text-success mb-0">
            Rp {Number(selectedData.nominal).toLocaleString("id-ID")}
          </h5>

        </div>

      </div>

      <div className="col-md-6">

        <div className="bg-light rounded-4 p-3">

          <small className="text-muted">
            Tanggal
          </small>

          <h6 className="fw-bold mb-0">
            {new Date(selectedData.tanggal).toLocaleDateString("id-ID")}
          </h6>

        </div>

      </div>

      <div className="col-12">

        <div className="bg-light rounded-4 p-3">

          <small className="text-muted">
            Status
          </small>

          <div className="mt-2">

           <span
                className={`badge ${
                    selectedData.status === "Lunas"
                        ? "bg-success"
                        : "bg-danger"
                }`}
            >
                {selectedData.status}
            </span>

          </div>

        </div>

      </div>

    </div>

  </div>
</div>

<div className="d-flex gap-2 mt-3">

  <button className="btn btn-success flex-fill">
    <i className="bi bi-printer me-2" />
    Cetak Laporan
  </button>

  <button
    className="btn btn-secondary flex-fill"
    data-bs-dismiss="modal"
  >
    Tutup
  </button>

</div>

                  {/* RIWAYAT PEMBAYARAN */}

                  <div className="card border-0 shadow-sm rounded-4">

                    <div className="card-body p-4">

                      <h5 className="fw-bold mb-4">
                      <i className="bi bi-clock-history me-2 text-success" />
                      Riwayat Transaksi
                    </h5>

                      <div className="table-responsive">

                        <table className="table align-middle">

                          <thead>
  <tr>
    <th>ID Transaksi</th>
    <th>Jenis</th>
    <th>Tanggal</th>
    <th>Nominal</th>
    <th>Status</th>
  </tr>
</thead>

                          <tbody>
                                <tr>
                                    <td>{selectedData.id}</td>

                                    <td>
                                        {selectedData.jenis_pembayaran?.nama_jenis}
                                    </td>

                                    <td>
                                        {new Date(selectedData.tanggal).toLocaleDateString("id-ID")}
                                    </td>

                                    <td>
                                        Rp {Number(selectedData.nominal).toLocaleString("id-ID")}
                                    </td>

                                    <td>
                                        <span
                                            className={`badge ${
                                                selectedData.status === "Lunas"
                                                    ? "bg-success"
                                                    : "bg-danger"
                                            }`}
                                        >
                                            {selectedData.status}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>

                        </table>

                      </div>

                    </div>

                  </div>

                  <div className="card border-0 shadow-sm rounded-4">
  <div className="card-body p-4">

    <h5 className="fw-bold mb-4">
      <i className="bi bi-pie-chart me-2 text-warning" />
      Statistik Keuangan
    </h5>

    <div className="row g-3">

      <div className="col-md-4">
        <div className="bg-light rounded-4 p-3 text-center">
          <small className="text-muted">
            Total Topup
          </small>
          <h5 className="fw-bold text-success mb-0">
            <h5 className="fw-bold text-success">
            Rp {Number(statistik?.total_topup ?? 0).toLocaleString("id-ID")}
            </h5>
          </h5>
        </div>
      </div>

      <div className="col-md-4">
        <div className="bg-light rounded-4 p-3 text-center">
          <small className="text-muted">
            Total Pembayaran
          </small>
          <h5 className="fw-bold text-success">
            Rp {Number(statistik?.total_pembayaran ?? 0).toLocaleString("id-ID")}
            </h5>
        </div>
      </div>

      <div className="col-md-4">
        <div className="bg-light rounded-4 p-3 text-center">
          <small className="text-muted">
            Saldo Saat ini
          </small>
          <h5 className="fw-bold text-primary">
            Rp {Number(statistik?.saldo ?? 0).toLocaleString("id-ID")}
            </h5>
        </div>
      </div>
      <div className="col-md-3">
                <div className="bg-light rounded-4 p-3 text-center">
                    <small className="text-muted">
                        Jumlah Transaksi
                    </small>

                    <h5 className="fw-bold">
                        {statistik.jumlah_transaksi}
                    </h5>
                </div>
            </div>


    </div>

  </div>
</div>
 

                 

                  <div className="d-flex gap-2">

  <button className="btn btn-success flex-fill">
    <i className="bi bi-printer me-2" />
    Cetak Laporan
  </button>

  <button className="btn btn-info flex-fill text-white">
    <i className="bi bi-file-earmark-excel me-2" />
    Export Excel
  </button>

  <button
    className="btn btn-secondary flex-fill"
    data-bs-dismiss="modal"
  >
    Tutup
  </button>

</div>

                </div>

              )}

            </div>

          </div>

        </div>

      </div>


            )
        }
   