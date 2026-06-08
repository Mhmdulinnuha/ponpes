"use client"



export default function DeletePembayaranModal({ selectedData, onSuccess }: { selectedData: any; onSuccess: () => void }) {
  const hapusPembayaran = async () => {
    try {
      if (!selectedData?.id) return

    const res = await fetch(
      `http://localhost:8080/pembayaran/${selectedData.id}`,
      {
        method: "DELETE",
      }
    )

    const result = await res.json()

    if (!res.ok) {
      throw new Error(result.message)
    }

    alert("Data berhasil dihapus")

    onSuccess()

    document
    .getElementById("btnCloseDeleteModal")
    ?.click()
  } catch (err) {
    console.error(err)
    alert("Gagal menghapus data")
  }
}
return (
<div
  className="modal fade"
  id="deletePembayaranModal"
  tabIndex={-1}
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">

      <div className="modal-header bg-danger text-white">
        <h5 className="modal-title">
          <i className="bi bi-exclamation-triangle me-2" />
          Konfirmasi Hapus
        </h5>

        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="modal"
        />
      </div>

      <div className="modal-body text-center">

        <i
          className="bi bi-trash-fill text-danger"
          style={{ fontSize: "4rem" }}
        />

        <h5 className="mt-3">
          Apakah Anda yakin?
        </h5>

        <p className="text-muted">
          Data pembayaran
          <strong>
            {" "}
            {selectedData?.nama_lengkap}
          </strong>
          {" "}akan dihapus permanen.
        </p>

      </div>

      <div className="modal-footer">

         <button
            id="btnCloseDeleteModal"
            type="button"
            data-bs-dismiss="modal"
            style={{ display: "none" }}
        />


        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Tidak
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={hapusPembayaran}
        >
          Ya, Hapus
        </button>

      </div>

    </div>
  </div>
</div>
)
}