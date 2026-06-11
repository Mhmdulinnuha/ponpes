import Image from "next/image"

export default function DetailPembayaranModal({
  selectedData,
  onSuccess,
}: any) {
  // Cegah rendering jika selectedData kosong/null
  if (!selectedData) return null;

  // Ekstraksi data secara aman dengan fallback jika properti undefined
  const santriNama = selectedData.Santri?.nama_lengkap || selectedData.santri?.nama_lengkap || "-";
  const jenisNama = selectedData.JenisPembayaran?.nama_jenis || "-";
  const nominal = Number(selectedData.nominal || 0);
  const bayar = Number(selectedData.bayar || 0);
  const sisa = nominal - bayar;
  const status = selectedData.status || "Belum Lunas";
  const tanggal = selectedData.tanggal
    ? new Date(selectedData.tanggal).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "-";

  // Cek apakah tagihan sudah lunas
  const isLunas = status === "Lunas" || sisa <= 0;

  return (
    <div
      className="modal fade"
      id="detailPembayaranModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-md modal-dialog-centered">
        <div className="modal-content border-0 rounded-4 shadow overflow-hidden">
          
          {/* HEADER MODAL */}
          <div className="modal-header bg-primary text-white border-0 py-3">
            <h5 className="modal-title fw-semibold d-flex align-items-center gap-2">
              <i className="bi bi-receipt fs-4" />
              Detail Pembayaran
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          {/* BODY MODAL */}
          <div className="modal-body p-4 bg-light">
            <div className="d-flex flex-column gap-3">
              
              {/* CARD PROFILE & RINCIAN UTAMA */}
              <div className="card border-0 rounded-4 shadow-sm">
                <div className="card-body p-4">
                  
                  {/* Status Ringkasan */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <span className="text-muted fw-semibold">Status Pembayaran</span>
                    <span
                      className={`badge rounded-pill px-3 py-2 fw-semibold ${
                        isLunas 
                          ? "bg-success bg-opacity-10 text-success border border-success border-opacity-25" 
                          : "bg-warning bg-opacity-10 text-dark border border-warning border-opacity-25"
                      }`}
                    >
                      {status}
                    </span>
                  </div>

                  {/* Profil Singkat Santri */}
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <Image
                      src="/images/avatar/avatar.jpg"
                      alt={santriNama}
                      width={56}
                      height={56}
                      className="rounded-circle border-2 border-primary-subtle"
                    />
                    <div>
                      <small className="text-muted d-block">Nama Santri</small>
                      <h5 className="fw-bold text-dark mb-0">{santriNama}</h5>
                    </div>
                  </div>

                  <hr className="text-muted opacity-25 my-3" />

                  {/* Detail Item Tagihan */}
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex justify-content-between">
                      <span className="text-muted">Jenis Pembayaran</span>
                      <span className="fw-semibold text-dark">{jenisNama}</span>
                    </div>

                    <div className="d-flex justify-content-between">
                      <span className="text-muted">Tanggal Transaksi</span>
                      <span className="fw-semibold text-dark">{tanggal}</span>
                    </div>

                    <div className="d-flex justify-content-between">
                      <span className="text-muted">Total Tagihan</span>
                      <span className="fw-bold text-dark">
                        Rp {nominal.toLocaleString("id-ID")}
                      </span>
                    </div>

                    <div className="d-flex justify-content-between">
                      <span className="text-muted">Sudah Dibayar</span>
                      <span className="fw-semibold text-success">
                        Rp {bayar.toLocaleString("id-ID")}
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* CARD DUKUNGAN KEPUTUSAN (BAYAR SEKARANG / LUNAS) */}
              {isLunas ? (
                /* Tampilan Jika Lunas */
                <div className="card border-0 rounded-4 shadow-sm bg-light border border-success border-opacity-25">
                  <div className="card-body p-4 text-center">
                    <div className="text-success mb-3">
                      <i className="bi bi-check-circle-fill fs-1" />
                    </div>
                    <h5 className="fw-bold text-success mb-1">Tagihan Lunas</h5>
                    <p className="text-muted small mb-0">
                      Seluruh tagihan pembayaran ini telah dibayar penuh. Terima kasih!
                    </p>
                  </div>
                </div>
              ) : (
                /* Tampilan Jika Belum Lunas (Card Bayar Sekarang) */
                <div className="card border-0 rounded-4 shadow-sm bg-light border border-danger border-opacity-25">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <small className="text-muted d-block mb-1">Sisa Tagihan</small>
                        <h3 className="fw-bold text-danger mb-0">
                          Rp {sisa.toLocaleString("id-ID")}
                        </h3>
                      </div>
                      <span className="text-danger">
                        <i className="bi bi-wallet2 fs-2" />
                      </span>
                    </div>

                    <button
                      className="btn btn-success w-100 py-3 fw-semibold rounded-4 shadow-sm mt-2 d-flex justify-content-center align-items-center gap-2"
                      data-bs-toggle="modal"
                      data-bs-target="#bayarTagihanModal"
                    >
                      <i className="bi bi-credit-card-2-front" />
                      Bayar Sekarang
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}