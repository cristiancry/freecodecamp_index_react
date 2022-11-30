
import './App.css';
import Testimonio from './componentes/Testimonio';
import Pruebas from './componentes/Pruebas';
import {getOptions, myInfo} from './clients/UserInfo'

function App() {
  const info=(nombresT)=>{
    return myInfo.find(value=>value.nombre===nombresT)
  } 
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <Testimonio 
      nombre= {info('Shawn Wang').nombre}
      pais={info('Shawn Wang').pais}
      imagen={info('Shawn Wang').imagen}
      cargo={info('Shawn Wang').cargo}
      empresa={info('Shawn Wang').empresa}
      testimonio={info('Shawn Wang').testimonio}/>
      <Testimonio 
      nombre={info('Sarah Chima').nombre}
      pais={info('Sarah Chima').pais}
      imagen={info('Sarah Chima').imagen}
      cargo={info('Sarah Chima').cargo}
      empresa={info('Sarah Chima').empresa}
      testimonio={info('Sarah Chima').testimonio}/>
      <Testimonio 
      nombre={info('Emma Bostian').nombre}
      pais={info('Emma Bostian').pais}
      imagen={info('Emma Bostian').imagen}
      cargo={info('Emma Bostian').cargo}
      empresa={info('Emma Bostian').empresa}
      testimonio={info('Emma Bostian').testimonio}/>
      <Pruebas/>
      
      </div>
    </div>
  );
}

export default App;
