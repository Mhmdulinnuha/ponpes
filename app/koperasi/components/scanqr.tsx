export default function ScanQrCard() {
  return (
    <div className="card border-0 shadow-sm rounded-4 h-100">

      <div className="card-body">

        <h5 className="fw-bold mb-4">

          <i className="bi bi-qr-code-scan me-2" />

          Sistem Kasir

        </h5>

        <div className="text-center">

          <i
            className="bi bi-qr-code-scan"
            style={{ fontSize: "90px" }}
          />

          <p className="mt-3 text-muted">

            Scan QR Santri untuk memulai transaksi

          </p>

          <button className="btn btn-primary rounded-4">

            Scan QR

          </button>

        </div>

      </div>

    </div>
  )
}