import { useState } from "react";

export default function ConfirmAlert({ admin, id, handleDelete }) {
  const [isOpen, setIsOpen] = useState(false);
  const openAlert = () => {
    setIsOpen(true);
  };
  const closeAlert = () => {
    setIsOpen(false);
  };

  const handleConfirm = async () => {
    // e.preventDefault();
    await fetch("/api/admin/delete", {
      method: "DELETE",
      body: id, // assuming you need to send the 'id' as JSON data
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "19 19");
        handleDelete(id);
      })
      .catch((error) => {
        console.log(error);
      });
    closeAlert();
  };

  return (
    <div className="">
      <button
        onClick={openAlert}
        className="bg-transparent hover:bg-gray-400 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline"
      >
        ❌
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">Confirmation</h2>
            <p className="mb-4">
              Are you sure you want to delete ADMINISTRATOR: {admin.email}
            </p>
            <div className="flex justify-end">
              <button
                onClick={handleConfirm}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Confirm
              </button>
              <button
                onClick={closeAlert}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
