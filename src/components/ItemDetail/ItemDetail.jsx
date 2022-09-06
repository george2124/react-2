import React, { useState, useEffect } from 'react';

export default function ItemDetail ( {Detalle} ) {
  return(
  <div>
    <h1>Detalle de Producto</h1>
    <h2>Detalle de pokemon</h2>
    <h3>Nombre de mi pokemon</h3>
    <h1>{Detalle.name}</h1>
  </div>
  );
}
