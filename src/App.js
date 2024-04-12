import "./App.css";
import Medication from "./components/medication/Medication";

function App() {
  return (
    <div className='App'>
      <h1 className='app-title'>Dose Dash 💊</h1>
      <h2 className='app-subtitle'>Have you taken your meds today? </h2>
      <div className='list-of-meds-wrapper'>
        {/* medication components here */}
        <Medication name='Citalopram' dosage='20' />
        <Medication name='Trazodone' dosage='50' />
        <Medication name='Alprazolam' dosage='0.25' />
        <Medication name='Tylenol' dosage='400' />
        <Medication name='Biotin' dosage='5' />
      </div>
    </div>
  );
}

export default App;
