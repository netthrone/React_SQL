import React,{useEffect, useState} from 'react'
import './App.css';


function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:8081/topic')
    .then(res=>res.json())
    .then(data=> setData(data))
    .catch(err=> console.log(err));
  }, [])
  return (
    <>
    <div>
      <p style={{fontSize:10}}>sql</p>

      <table style={{padding:50}}>
        <thead>
          <th>id</th>
          <th>title</th>
          <th>profile</th>
          <th>created</th>
          <th>description</th>
          <th>author</th>
        </thead>
        <tbody>
          {data.map((d, i)=>{return(
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.title}</td>
              <td>{d.profile}</td>
              <td>{d.created}</td>
              <td>{d.description}</td>
              <td>{d.author}</td>
            </tr>
            
          )})}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default App;
