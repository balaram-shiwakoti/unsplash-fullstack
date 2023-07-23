import { useState } from "react";
import mainLogo from "../assets/my_unsplash_logo.svg";
import Modal from "./Modal";

const Nav = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="flex justify-between">
        <div className="flex gap-6">
          <img src={mainLogo} alt="" />
          <input
            className="border-2 py-4 px-2 rounded-xl focus:outline-none"
            type="text"
            placeholder="search by name"
          />
        </div>
        <div>
          <button
            onClick={() => setShowModal(!showModal)}
            className="bg-[green] px-4 py-5 rounded-xl text-white "
          >
            Add a photo
          </button>
        </div>
      </nav>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
};

export default Nav;
