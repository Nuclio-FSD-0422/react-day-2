import React, { useState } from 'react';
import SeatsSchema from '../SeatsSchema/SeatsSchema';
import Title from '../Title/Title';

// Estructura inicial de sitios
const planeSeats = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Componente
const Main = () => {
  const [seats, setSeats] = useState(planeSeats);

  // ** EJEMPLOS DE USESTATE **
  // const [variableAlmacen, funcionEstablecerNuevoValor] 
  // = useState(valorInicial);

  // const [edad, setEdad] = useState(99);
  // setEdad(89);

  // const [listaCompra, setListaCompra] =
  // useState(['lentejas', 'judías', 'chorizo']);

  // const nuevaListaCompra = [...listaCompra];
  // nuevaListaCompra[1] = 'jamón';
  // setListaCompra(nuevaListaCompra);

  const actionButtonHandler = (event) => {
    // Obtenemos el value del botón que ha pulsado el usuario
    const action = event.target.value;

    switch(action) {
      case 'minus':
        for(let i=(seats.length-1); i>=0; i--) {
          if(seats[i]===1) {
            const updatedSeats = [...seats];
            updatedSeats[i] = 0;
            setSeats(updatedSeats);
            break;
          }
        }
        break;
      case 'reset':
        const updatedSeats = planeSeats;
        setSeats(updatedSeats);
        break;
      case 'add':
        // Comprobar si hay sitios libres
        const emptySeat = {
          exists: false,
          position: 0
        };
        for(let i=0; i<seats.length; i++) {
          if(seats[i]===0) {
            emptySeat.exists = true;
            emptySeat.position = i;
            break;
          }
        }

        // Establecer ese sitio como ocupado
        if(emptySeat.exists) {
          const updatedSeats = [...seats];
          updatedSeats[emptySeat.position] = 1;

          // Actualizar el estado
          setSeats(updatedSeats);
        }
        break;
      default:
        break;
    }

  };

  return(
    <>
      <Title />
      <SeatsSchema seatsInfo={seats} />
      <div>
        <button value='minus' onClick={actionButtonHandler}>-1 Pasajero</button>
        <button value='reset' onClick={actionButtonHandler}>Reset</button>
        <button value='add' onClick={actionButtonHandler}>+1 Pasajero</button>
      </div>
    </>
  )
};

export default Main;
