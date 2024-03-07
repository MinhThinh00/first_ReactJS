import Nav from './components/Nav'
import Trending from './components/Trending'
import Headers from './components/Header'
import AutButton from './components/AutButton'
import './App.css';
function App() {
  return (
   <div className='grid md:grid-cols-5'>
      <Nav/>
      <main className='md:col-span-4 bg-cyan-50 px-12 py-6'>
        <AutButton/>
        <Headers/>
        <Trending/>
      </main> 
   </div>
  );
}

export default App;
