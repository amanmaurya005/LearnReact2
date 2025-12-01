// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// import User from './User'




// function App() {


//   const [counter,setCounter]=useState(0)
// function remove(){
//     if(counter>0){
//       setCounter(counter-1)
//     }
//   }
//   return (
//     <>
//     <User />

//     <h1>count:{counter}</h1>
//     <button onClick={()=>setCounter(counter+1)}>increase</button>
//     <button onClick={remove}>decrease</button>
//     </>
//   )
// }
// export default App





// export function First1(){
//   return (
//     <div>
//       <h1>first component</h1>
//     </div>
//   )
// }

// export function Fruit1(){
//   return(
//     <div>
//       <h1>Apple</h1>
//     </div>
//   )
// }
// export function Color1(){
//   return (
//     <div>
//       <h1>red</h1>
//     </div>
//   )
// }



// import React, { useReducer } from 'react'

// export default function App() {

//   const initState={counter:0,}

//   const [state,dispatch] = useReducer(reducer,initState);
// function reducer(state,action){
// //   if(action.type==="increment"){
// //     return {counter:state.counter+1}
// //   }
// //   else if(action.type==="decrement"){
// //     return {counter:state.counter-1}
// //   }
// //   else if(action.type==="reset"){
// //     return {counter:0}
// //   }

// switch(action.type){
//   case "increment":
//   return {counter:state.counter+1};
//   case "decrement":
//     return {counter:state.counter-1};
//     case "reset":
//       return {counter:0}
// }
// }

//   return (
//   <>
//   <button onClick={()=> dispatch({type:"increment"})}>+</button>
//   <p>{state.counter}</p>
//   <button onClick={()=> dispatch({type:"decrement"})}>-</button>
//   <button onClick={()=> dispatch({type:"reset"})}>reset</button>
//   </>
//   )
// }

