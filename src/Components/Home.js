import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Home.css";

const Home = () => {
    
  const [list, setList] = useState([]);
  const getVideoList = async ( ) => {
    try {
       const data = await axios.get("https://videolibback.omkarborude8354.repl.co/videos")
      console.log(data.data.videos);
      setList(data.data.videos);
    } catch (error) {
      alert(error);
    }
  };
  
  useEffect(() => getVideoList(),[]);
  console.log(list);
  return (
    <div className="home">
      {
          list && list.map((item) =>{
          return <Card key={item.id} {...item}/>
        })
      }
    </div>
  );
};

export default Home;
