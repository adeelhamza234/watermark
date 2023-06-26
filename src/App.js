import './App.css';
import About from './components/about/About';
import Addwatermark from './components/about/Addwatermark';
import DrawerAppBar from './components/appbar/Appbar';
import Home from './components/home/Home';

function App() {
  return (
    <div>
      <DrawerAppBar/>
      <Home/>
      <About/>
      <Addwatermark/>
    </div>
  );
}

export default App;