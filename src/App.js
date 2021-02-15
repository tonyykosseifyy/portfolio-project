import './App.css';
import React,{ useState , useEffect } from 'react' ;


function App() {
  const [ data , setData ] = useState({}) ;
  useEffect(() => {
    fetch('https://api.github.com/users/hacktivist123/repos') 
    .then(response => response.json())
    .then(data => setData(data))
    console.log(data)
  },[])
  return (
    <div className="app">
        {data?.length ? data : 'loading'} 
    </div>
  );
}

export default App;
