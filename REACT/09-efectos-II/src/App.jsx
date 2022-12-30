import { useEffect } from 'react';
import { useState } from 'react';
import './App.css'

function App() {

  const [time, setTime] = useState('');

  //Creo el objeto Date
  let today = new Date();
// Obtengo la hora
  let timeNow = today.toLocaleTimeString();

//Creo intervalo para cada segundo, donde actualizo Time con la hora
  const intervalRefresh = setInterval(() => {
    setTime(timeNow)
  }, 1000);

  //monto el componente con la hora actual y elimino el intervalo tras montarlo. Escucho a la variable del intervalo, 
  //para que cuando cambie al segundo, vuelva a montar el componente y a desmontarlo
  useEffect(()=>{
    setTime(timeNow)
  return () => {
    clearInterval(intervalRefresh)
  }
  },[intervalRefresh])

//Lo renderizo
  return (
    <div className="App">
      <h1>Live TIME:  {time}</h1>
    </div>
  )
}

export default App


// import { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [time, setTime] = useState('');

//   useEffect(() => {
//     const interval = setInterval(
//       () => setTime(new Date().toLocaleTimeString()),
//       1000
//     );

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <div className="App">
//       <h1>{time}</h1>
//     </div>
//   );
// }

// export default App;