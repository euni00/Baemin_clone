import {useState} from 'react';
import Count from './components/Count.js';
import Bottons from './components/Bottons';
function App() {
  const [count, setCount] = useState(1);
    function clickplus() {
    setCount(count+1);
    console.log("count: ", count);
  }
    function clickminus() {
    setCount(count-1);
    console.log("count: ", count);
  }
  return (
    <div className="App">
      test
      <Count count={count}/>
      <Bottons clickplus={clickplus} clickminus={clickminus}/>
    </div>
  );
}

export default App;
