import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    if (count === 10) {
      alert("Você ganhou, virgem!");
    }
  }
  function decrement() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <div>
      Você Clicou <small class="text-danger"> {count} </small>vezes
      <br></br>
      <br></br>
      <button class="btn btn-primary" onClick={increment}>
        Clique aqui
      </button>
      <br></br>
      <br></br>
      <button class="btn btn-danger" onClick={decrement}>
        Clique aqui para diminuir
      </button>
      <br></br>
      <br></br>
      <button class="btn btn-warning" onClick={reset}>
        Clique aqui para resetar
      </button>
    </div>
  );
}

export default Counter;
