import Homepage from '../src/components/Homepage';
import Header from '../src/components/Header';
import '../src/index.css';
import SearchBar from './components/SearchBar';
import EmployeeList from './components/EmployeeList';
import EmployeeListItem from './components/EmployeeListItem';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="search">
      <SearchBar />
      </div>
      <div className="content">
      <div className="employee-list">
      <EmployeeList name="James King" jobTitle="President and CEO" />
      <EmployeeList name="Julie Taylor" jobTitle="VP of Marketing" />
      <EmployeeList name="Eugene Lee" jobTitle="CFO" />
      <EmployeeList name="John Williiams" jobTitle="VP of Engineering" />
      <EmployeeList name="Ray Moore" jobTitle="VP of Sales" />
      <EmployeeList name="Paul Jones" jobTitle="QA Manager" />
      </div>
      <EmployeeListItem />
      </div>
      <Homepage />
    </div>
  );
}

export default App;
