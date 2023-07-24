import "../index.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Pictures = () => {
  const [cats, setCats] = useState([]);
  const [hovered, setIsHovered] = useState(-1);
  useEffect(() => {
    fetchCats();
  }, [cats]);

  const fetchCats = async () => {
    try {
      const response = await axios.get("http://localhost:3000/cats");
      setCats(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleHover = (idx) => {
    setIsHovered(idx);
  };
  const handleHoverLeave = () => {
    setIsHovered(-1);
  };

  const DeleteCats = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/cats/${id.id}`
      );
      console.log("Cat deleted:", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="columns-2  md:columns-3 lg:columns-4">
      {cats?.map((cat, idx) => (
        <div
          onMouseOver={() => handleHover(idx)}
          onMouseLeave={handleHoverLeave}
          key={idx}
        >
          <img
            className=" mb-4 rounded-2xl"
            src={cat.imgUrl}
            alt="cat-fetched-from-db"
          />
          {hovered === idx && (
            <div className="relative top-0 left-0 bg-white  rounded-lg">
              <div>
                <span className="absolute text-lg   font-bold capitalize text-[#FFFFFF] bottom-10">
                  {cat.label}
                </span>
              </div>
              <div>
                <button
                  onClick={() => DeleteCats({ id: cat._id })}
                  className=" absolute bottom-44 px-4 py-1 right-0   text-[#EB5757] border-2 border-[#EB5757] bg-transparent rounded-3xl  "
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Pictures;
