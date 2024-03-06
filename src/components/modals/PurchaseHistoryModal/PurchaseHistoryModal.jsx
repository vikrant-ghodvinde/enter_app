import React from "react";

const PurchaseHistoryModal = () => {
  return (
    <dialog id="purchaseHistoryModal" className="modal bg-black-400">
      <div className="modal-box max-w-5xl bg-[#6A97FF] text-white">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="relative mb-8">
          <h3 className="font-bold text-lg">Purchase History</h3>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            porro.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-border-white whitespace-nowrap">
            <thead className="text-white text-md">
              <tr>
                <th>#</th>
                <th>Transaction Id</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td></td>
                <td>1</td>
                <td>01 Mar, 2024</td>
                <td>
                  <span className="custom-badge badge-success">Success</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </dialog>
  );
};

export default PurchaseHistoryModal;
