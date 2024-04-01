import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  
  const [data, setData] = useState("");
  useEffect(() => {
    const GetData = async () => {
      const response = await axios.get("http://localhost:2000/");
      setData(response.data);
      console.log(response.data)
    };
    GetData();
  },[]);

  return (
    <div className="h-100 w-100 p-10">
      <Link
        className="font-bold font-mono text-xl hover:text-red-600"
        to="/about"
      >
        About
      </Link>
      <h1>{data}</h1>
    </div>
  );
};

export default Home;
