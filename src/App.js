import React,{useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';

function App() {

  const [ciudad,guardarCiudad] = useState('');
  const [pais,guardarPais] = useState('');
  const [error,guardarError] = useState(false);
  const [resultado,guardarResultado] = useState({})

  useEffect(() =>{
    //prevenir ejecucion
    if(ciudad === '') return;

    const consultarAPI = async () =>{
      const appId ='a20560e9506125681092765ea2530051';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
  
      //consultar la url
      const respuesta= await fetch(url);
      const resultado = await respuesta.json();
      
      guardarResultado(resultado);
    }

    consultarAPI();
  }, [ ciudad, pais ]); //[ ciudad, pais ] con esto indico que parte del state debe estar escuchando useEffect para ejecutarse
                        //se llama arreglo de dependencias

  //FUNCION CONSULTAR DATOS
  const datosConsulta =(datos) =>{

      //validar que los campos no esten vacios
      if(datos.ciudad==='' || datos.pais===''){
        guardarError(true);
        return;
      }

      //si ambos campos estan completos agregarlos al state
      guardarCiudad(datos.ciudad);
      guardarPais(datos.pais);
      guardarError(false);
  }

  //cargar un componente condicionalmente
  let componente;
  if(error){
    //hay un error
    componente = <Error mensaje='Ambos campos tienen que estar completos' />
  }else if(resultado.cod === "404"){
    componente = <Error mensaje='Esa Ciudad no existe en ese pais'
                  />
  }else{
    //no hay errores entonces mostrar el clima 
    componente = <Clima 
                    resultado={resultado}
                  />;
  }

  

  return (
    <div className='App'>
      <Header
        titulo='Clima Mundial'
      />

      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col s12 m6'>
                <Formulario 
                  datosConsulta= {datosConsulta}
                />
            </div>

            <div className='col s12 m6'>  
                {componente}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
