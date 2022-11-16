import { useEffect, useState } from "react";
import axios from "axios";
import CryptoJS from 'crypto-js';

const App = () => {
  const [array, setArray] = useState([{ "message" : "success", "name" : "menu 1"}]);
  const [data, setData] = useState();

  const updateArray = () => () => {
    const value = array[0].message  === "success" ? "failed" : "success";
    let arrayCopy = [...array];
    arrayCopy[0].message = value;
    setArray(arrayCopy);
  };
  const removeData = (index) => () => {
    data.splice(index, 1);
    let newArr = [...data];
    console.log(data);
    setData(newArr);
  };
  const removeKey = ()=> {
    const newArr = data.map(item=>({
      id: item.id,
      title: item.title,
      body: item.body
    }));
    setData(newArr);
  }
  useEffect(()=>{
    getPost();
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const string = today.getDate().toString()+today.getMonth().toString()+today.getFullYear().toString()+"syafiqpriaifabula";
    console.log(string);
    console.log(CryptoJS.SHA512(string).toString());
  },[])

  const getPost = async() => {
    const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
    console.log(response.data);
    setData(response.data);
  }
  return (
    <>
      <div>
          <h5>Soal Utama : TES KEMAMPUAN PROGRAMMING</h5>    
          {array[0].message}
          <div><button onClick={updateArray()}>Change Value</button></div>
          <table border={1}>
            <thead>
              <tr>
                {data && data[0].userId && (<th>userId</th>)}
                <th>title</th>
                <th>body</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
          {data && data.slice(0,10).map((item, index)=>(
            <tr key={index}>
              {item.userId && (<td>{item.userId}</td>)}
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td><button onClick={removeData(index)}>Remove</button></td>
            </tr>
          ))}
          </tbody>
          </table>
          <div><button onClick={()=>removeKey()}>Remove UserId Key</button></div>
      </div>
    </>
    
  )
}

export default App