import logo from './logo.svg';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';

const App = () => {
  return (
    <div className="App">
    <header className="App-header">
      <h1>Hello World</h1>
      <Button label="Created Successfully" icon="pi pi-check" />
    </header>
  </div>
  );
}

export default App;
