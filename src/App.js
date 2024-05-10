import React from "react";
import Fruits from "./components/Week 2/Module 2/Fruits";
import FruitsCounter from "./components/Week 2/Module 2/FruitsCounter";

function App() {
  const [fruits] = React.useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
    {fruitName: 'plum', id: 3},
    {fruitName: 'apple', id: 4},
    {fruitName: 'plum', id: 5},
]);

  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits fruits = {fruits}/>
      <FruitsCounter fruits = {fruits}/>
    </div>
  );
}

export default App;
