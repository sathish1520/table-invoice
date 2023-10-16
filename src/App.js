import logo from './logo.svg';
import './App.css';
import Header from './Header';
import '../src/assets/scss/main.scss'
import Home from './Home';
import Details from './Details';
function App() {
  return (
    <div >
      <Header />
      <Home/>
      <Details/>
    </div>
  );
}

export default App;
