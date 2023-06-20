import { useEffect, useState } from "react";
export default function ConfirmAlertKelas({ kelas, id, handleDelete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [first, setfirst] = useState([]);

  const openAlert = () => {
    setIsOpen(true);
    async function fetchData() {
      try {
        const response = await fetch(`/api/data-kelas/idfordelete/${id}`);
        const data = await response.json();
        console.log(data, "data di cardAlertDelete");
        setfirst(data);
        console.log(first, "first dlm");
      } catch (error) {
        console.error("Error fetching data:", error);
        console.log("Error fetching data:");
      }
    }
    fetchData();
  };
  const closeAlert = () => {
    setIsOpen(false);
  };

  // console.log(first, "first di alert del");

  const confirmDelete = async () => {
    // e.preventDefault();
    if (first === id) {
      alert("kelas sudah dipakai gabisa delete");
    } else {
      await fetch("/api/data-kelas/delete", {
        method: "DELETE",
        body: id, // assuming you need to send the 'id' as JSON data
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data, "46 46 46");
          handleDelete(id);
          // setlistSantri((prevList) => prevList.filter((item) => item.id !== id));
        })
        .catch((error) => {
          console.log(error);
        });
      closeAlert();
      alert("anda berhasil delete kelas");
    }
  };
  // useEffect await fetch get data by id for daftar_kelas confirmed to delete
  // check data id_kelas in santri_list
  // if (id) { alert : "cant delete"}
  // else { fetch delete}
  return (
    <div className="">
      <button
        onClick={openAlert}
        className="bg-transparent hover:bg-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        ❌
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">Confirmation</h2>
            <p className="mb-4">
              Are you sure you want to delete KELAS : {kelas.value}
            </p>
            <div className="flex justify-end">
              <button
                onClick={confirmDelete}
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
