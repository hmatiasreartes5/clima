import React from 'react';

const Clima = ({resultado}) => {

    //extraer lo valores 
    console.log(resultado)
    const {name , main} = resultado;

    const kelvin = 273.15;

    if(!name) return null;

    return ( 
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>El clima de {name} es:</h2>
                <p className='temperatura'>{parseInt(main.temp - kelvin,10 )} <span> &#x2103; </span></p>
                <p>Maxima: {parseInt(main.temp_max - kelvin,10 )} &#x2103;</p> 
                <p>Minima: {parseInt(main.temp_min - kelvin,10 )} &#x2103;</p>
                <p>Humedad: {main.humidity}%</p>
            </div>
        </div>
     );
}
 //use parseInt para que me devuelva un valor entero ya que no me interesa que me devuelva con decimal
export default Clima;
