import React,{useState,useEffect} from "react";
import Home from "./Home.jsx";
import ProductPage from "./ProductPage.jsx";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

async function getData(){
  try {
    const response = await axios.get("/api");
    const gotdata = response.data;
    console.log(gotdata.message);
    setData(gotdata.message);
  }catch(error){
console.log(error);
  }
};
  //
  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);
useEffect(()=>{getData();},[])

  // return (<div> <p>{!data ? "Loading..." : data}</p> <ProductPage/></div>  );
    return (<div> <Home/></div>  );
}

export default App;
