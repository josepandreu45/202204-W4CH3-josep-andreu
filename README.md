# Lista Componentes

## App

- renderiza el componente info
- renderiza el componente display
- renderiza el componente actions
- renderiza el componente keyboard

## Info

- renderiza un texto recibido segun el estado
- tiene 2 estados

## Display

- renderiza un componente input con numeros recibidos

## Actions

- renderiza un componente action con el texto call y la accion llamar
- renderiza un componente action con el texto hang y la accion colgar
- el boton call solo se activa cuando display tiene 9 numeros y deshabilita el teclado
- solo muestra uno de los botones a la vez
- cuando se pulsa hang se tiene que habilitar el teclado

## Action

- renderiza un boton con un texto recibido
- recibe una accion

## Keyboard

- renderiza un componente key para cada numero de 0 a 9
- renderiza un componente key para el valor 'delete'
- pasa la accion a las keys basada en su texto recibido para display

## Key

- renderiza un boton con un texto recibido
- recibe una accion
