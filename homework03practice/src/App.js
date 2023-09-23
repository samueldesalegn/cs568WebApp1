import logo from './logo.svg';
import './App.css';
import Employee from './models/people';
import EmployeeList from './components/empcomponent';

let employees = [
  new Employee("Samuel", "600 Cannon Rd, MD", "2028553721", "Data Engineer", 20000),
  new Employee("Desalegn", "600 Cannon Rd, MD", "2028553721", "Data Engineer", 15000),
  new Employee("Tumdedo", "9025 Linton st, MD", "2028553721", "Data Manager", 25000),
  new Employee("Adugna", "600 Cannon Rd, MD", "2028553721", "Cloud Engineer", 10000),
  new Employee("Betel", "600 Cannon Rd, MD", "2028553721", "Software Developer", 9000),
  new Employee("Elsa", "600 Cannon Rd, MD", "2028553721", "Infrastructure Engineer", 16000),
]

function App() {
  return (
    <div className="App">
      <EmployeeList employees={employees}/>
      
    </div>
  );
}

export default App;
