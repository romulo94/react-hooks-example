import React, { useState, useEffect } from "react";
import './App.css'

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // setCount(count);
    document.title = `Você clicou ${count} vezes.`
  }, [count])

  useEffect(() => {
    alert("Executa uma única vez")
  }, [])




  return (
    <>
    <div style={{
        display:'flex',justifyContent:'center', alignItems:'center',height:'100vh',flexDirection:"column"
    }}>
        <h1>React Hooks</h1>
        <div>

        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>

        </div>
        <h2>Meu número é: {count}</h2>
        </div>
    </>
  );
}

