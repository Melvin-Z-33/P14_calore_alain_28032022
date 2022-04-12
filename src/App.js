import { Routes, Route } from 'react-router-dom';
import EmployeeList from './views/EmployeeList.jsx';
import Welcome from './views/Welcome.jsx';
import './css/App.css';
function App() {
	alert('oki');
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/employe-list" element={<EmployeeList />} />
			</Routes>
		</div>
	);
}

export default App;
