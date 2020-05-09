import React, { useState, useEffect } from "react";

let timer = null;

function App() {

    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = "componentDidMount" + count;
    },[count]);

    useEffect(() => {
      timer = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
      // 一定注意下这个顺序：
      // 告诉react在下次重新渲染组件之后，同时是下次执行上面setInterval之前调用
      return () => {
        document.title = "componentWillUnmount";
        clearInterval(timer);
      };
    }, []);

  return (
    <div className="App">
      Count: {count}
      <button onClick={() => clearInterval(timer)}>clear</button>
    </div>
  );
}

export default App;
