import './App.css';
import { Navbar } from './components/Navbar'
import { Table } from './components/Table'
import { Item } from './components/Item'

function App() {
  return (
    <div className="container">
      <Navbar />
      <Table />
      <Item />
    </div>
  );
}

export default App;
