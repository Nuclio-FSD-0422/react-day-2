import React from 'react';
import './SeatsSchema.css';

const SeatsSchema = (props) => {
  const seatsInfo = props.seatsInfo;

  return (
    <>
      <div>
        <h2>Visión general de los sitios</h2>
      </div>
      <div className='seats-schema-container'>
        {
          seatsInfo.map(  (seat, index) => {
            if(seat===0) {
              return <div className='seat empty' key={index}>Vacío</div>
            } else {
              return <div className='seat occupied' key={index}>Ocupado</div>
            }
          } )
        }
      </div>
    </>
  )
}

export default SeatsSchema;
