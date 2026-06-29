"use client"
import Image from "next/image"

export default function DetailTopupModal({
  selectedData,
}: any) {
  if (!selectedData) return null

  const riwayat = selectedData.topup || []

  return (
    <div className="modal fade" id="detailSantriModal">
  <div className="modal-dialog modal-lg modal-dialog-centered">
    <div className="modal-content rounded-4 shadow">

      {/* HEADER */}
      <div className="modal-header bg-dark text-white">
        <h5 className="modal-title">
          Detail Santri
        </h5>
        <button className="btn-close btn-close-white" data-bs-dismiss="modal" />
      </div>

      {/* BODY */}
      <div className="modal-body p-4">

        {/* PROFILE */}
        <div className="d-flex align-items-center gap-3 mb-4">
          <Image
            src="/images/avatar/avatar.jpg"
            width={60}
            height={60}
            className="rounded-circle"
            alt="profile"
          />

          <div>
            <h5 className="mb-0">{selectedData?.nama_lengkap}</h5>
            <small className="text-muted">
              ID: {selectedData?.santri_id}
            </small>
          </div>
        </div>

        <hr />

        {/* SALDO INFO */}
        <div className="row g-3">

          <div className="col-md-6">
            <div className="card p-3 shadow-sm">
              <small className="text-muted">Saldo Utama</small>
              <h5>
                Rp {selectedData?.saldo_utama?.toLocaleString("id-ID")}
              </h5>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-3 shadow-sm">
              <small className="text-muted">Limit Harian</small>
              <h5>
                Rp {selectedData?.limit_harian?.toLocaleString("id-ID")}
              </h5>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-3 shadow-sm">
              <small className="text-muted">Terpakai Hari Ini</small>
              <h5>
                Rp {selectedData?.terpakai_hari_ini?.toLocaleString("id-ID")}
              </h5>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-3 shadow-sm">
              <small className="text-muted">Sisa Limit</small>
              <h5 className="text-success">
                Rp {(selectedData?.limit_harian - selectedData?.terpakai_hari_ini)?.toLocaleString("id-ID")}
              </h5>
            </div>
          </div>

        </div>

        <hr className="my-4" />

        {/* RINGKASAN */}
        <div>
          <h6>Ringkasan Transaksi</h6>

          <div className="d-flex justify-content-between">
            <span>Total Top Up</span>
            <b>Rp 1.250.000</b>
          </div>

          <div className="d-flex justify-content-between">
            <span>Jumlah Transaksi</span>
            <b>12x</b>
          </div>
        </div>

        <hr className="my-3" />

        {/* RIWAYAT SINGKAT */}
        <h6>Riwayat Terakhir</h6>

        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between">
            <span>Top Up</span>
            <span>+100.000</span>
          </li>

          <li className="list-group-item d-flex justify-content-between">
            <span>Top Up</span>
            <span>+50.000</span>
          </li>
        </ul>

      </div>

    </div>
  </div>
</div>
  )
}