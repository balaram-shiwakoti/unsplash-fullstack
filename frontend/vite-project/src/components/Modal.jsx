import axios from "axios";
import { useState } from "react";
// eslint-disable-next-line react/prop-types

const Modal = ({ showModal, setShowModal }) => {
  const [label, setLabel] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };
  const handleImageChange = (e) => {
    setImgUrl(e.target.value);
  };
  const handleSubmit = async () => {
    const data = { label, imgUrl };

    try {
      const response = await axios.post("http://localhost:3000/add", data);
      console.log(response.data, "response");
    } catch (error) {
      console.error("Error uploading file: ", error);
    }
  };

  return (
    <>
      <dialog
        id="dialog"
        className="flex flex-col border-2 border-[#cec6c658] -500 w-[620px] h-[367px] items-center justify-center mt-6  backdrop:bg-red-500 rounded-xl"
        open
      >
        <p>Add a new photo</p>
        <form method="dialog">
          <div className="flex flex-col">
            <label htmlFor="label">Label</label>
            <input
              className="border-2 py-2 px-2 rounded-xl focus:outline-none"
              type="text"
              id="label"
              onChange={handleLabelChange}
              value={label}
              name="photLabel"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="url">URL</label>
            <input
              type="text"
              onChange={handleImageChange}
              id="url"
              value={imgUrl}
              name="imgUrl"
              className="border-2 py-2 px-2 rounded-xl focus:outline-none"
            />
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setShowModal(!showModal)}
              type="button "
              className="bg-[#BDBDBD]"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[green] px-4 py-3 rounded-xl text-white "
            >
              Submit
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
