import Employee from "./components/employee";
import Welcome from "./components/welcome";

function App() {
  return (
    <div>
      <Welcome />
      <Employee name="Gulshan"
      department="Development"/>
    </div>
  );
}

export default App;