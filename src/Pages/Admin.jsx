import { useEffect, useState } from "react";
import axios from "axios";
// import Image from "../images/17060052347282b31b4157ee15d1b8646dfb5a1ddfbca.jpg";

function Admin() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const [category, setCategory] = useState(null);
  const [allImage, setAllImage] = useState(null);

  useEffect(() => {
    getImage();
  }, []);

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };
  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("category", category);
    try {
      const res = await axios.post("http://localhost:3000/admin", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setTitle("");
      setPrice("");
      setCategory("");
      setImage(null);
      getImage();

      console.log(res.data); // Log the response from the server
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const getImage = async () => {
    const res = await axios.get("http://localhost:3000/admin");
    console.log(res.data.data[0].image);
    setAllImage(res.data.data);
  };

  return (
    <div>
      <form onSubmit={submitImage} className="flex flex-col">
        <input type="file" accept="image/*" onChange={handleFileChange} />
        Title :{" "}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        Price :{" "}
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        Category :{" "}
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Upload</button>
      </form>
      {allImage &&
        allImage.map((data, i) => {
          return (
            <div className="border border-black w-32">
              <img
                key={i}
                src={`/src/images/${data.image}`}
                className="h-24 w-24 border "
              />
              <p>{data.title}</p>
              <p>{data.category}</p>
              <p>{data.price}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Admin;
