import './App.css'
import Paragraph from './components/Paragraph'
import Title from './components/Title'
 

function App() {
  const pageTitle ='¡Bienvenid@s a Rock{theCode}!';
  const myName = 'Rubén Piqueras';
  const myPlace = 'my home';
  const myDate = '23/12/2022';

  return (
    <div className="App">
      <Title text={pageTitle}/>
      <Paragraph name={myName} place={myPlace} date={myDate} />

      
      <text/>
      
    </div>
  )
}

export default App


