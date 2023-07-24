import { useState } from "react";
import mainLogo from "../assets/my_unsplash_logo.svg";
import Modal from "./Modal";
import SearchBar from "./SearchBar";

const Nav = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="flex justify-between">
        <div>
          <img src={mainLogo} alt="" />
        </div>
        <div className="flex gap-6">
          <SearchBar />
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
