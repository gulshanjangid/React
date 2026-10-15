import { useState } from "react";
import Employee from "./components/employee";
import Welcome from "./components/welcome";



function App() {
const [count, setCount] = useState(0);

  return (
    <div>
      <Welcome />
      <Employee name="Gulshan"
      department="Development"/>

       <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
       click
      </button>
    </div>
  );
}

export default App;