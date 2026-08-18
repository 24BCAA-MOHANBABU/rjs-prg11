import React, {useRef, useState } from"react";

function App() 
{
const [state, setState]=useState(false);
const inputRef=useRef();
const focusInput=()=>{
inputRef.current.focus();
};
return(
  <>
  <h1>Welcome {state}</h1>
  <form>
<input type="text" ref={inputRef}
type ="text" Placeholder ="Enter your name"/>
  <button onClick={focusInput}>
Login
  </button>
  </form>
  </>
);
}
export default App;