import "../index.css";

const imageUrl1 = "https://source.unsplash.com/random/1";
const imageUrl2 = "https://source.unsplash.com/random/2";
const imageUrl3 = "https://source.unsplash.com/random/3";
const Pictures = () => {
  return (
    <div className="grid grid-cols-3">
      <div>
        <img
          src={imageUrl1}
          className="w-48 h-48 image-hover "
          alt="React Image"
        />
      </div>
      <div>
        <img src={imageUrl2} className="w-48 h-48 " alt="React Image" />
      </div>
      <div>
        <img src={imageUrl3} className="w-48 h-48 " alt="React Image" />
      </div>
    </div>
  );
};

export default Pictures;
