
import { Suspense } from 'react';
import  { fetchData } from './fetchData.js'
import './App.css'


const apiData =fetchData ("https://jsonplaceholder.typicode.com/users")
function App() {
  const data = apiData.read();
  return (
    <div className="App">
    <h1> Ejemplo de Fetch</h1>
    <Suspense fallback={<h1>Loading...</h1>}>
    <ul className="card"> 
    {data?.map((user) => (
      <li key=
      {user.id}>
      {user.name}</li>
    ))}
    </ul>
    </Suspense>
  </div>
  );
}

export default App







// import { useFetch } from './assets/useFetch';
// function App() {
//   const { data, loading, error, handleCancelRequest } = useFetch("https://jsonplaceholder.typicode.com/users")
  

//   return (
//          <div className="App">
//           <h1>Fetch like a Pro</h1>
    
//           <button onClick={handleCancelRequest}>Cancel Request</button>
//            <ul className="card">
//              {error && <li>Error: {error}</li>}
//              {loading && <li>Loading...</li>}
//              {data?.map((item) => (
//                <li key={item.id}>{item.title}</li>
//              ))}
//            </ul>
//          </div>
//       );
//     }
   
// export default App
