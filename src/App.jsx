import './App.css';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar/Navbar';

function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<LandingPage />
			</main>
		</>
	);
}

export default App;
