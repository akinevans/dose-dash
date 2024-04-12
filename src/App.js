import "./App.css";
import Medication from "./components/medication/Medication";

function App() {
  return (
    <div className='App'>
      <h1 className='app-title'>Dose Dash</h1>
      <div className='list-of-meds-wrapper'>
        {/* medication components here */}
        <Medication />
      </div>
    </div>
  );
}

export default App;
