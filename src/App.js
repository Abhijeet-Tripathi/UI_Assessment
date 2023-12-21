import './App.scss';
import Navbar from './Navbar/Navbar';
import Scroll1 from './Scroll1/Scroll1';
import Scroll2 from './Scroll2/Scroll2';
import  Sidebar  from './Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Sidebar/>
     <Scroll1/>
     <Scroll2/>
    </div>
  );
}

export default App;
