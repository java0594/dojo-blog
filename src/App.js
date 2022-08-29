
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const tittle = 'Welcome to the new blog '; 
  const likes = 50;

  return (
   <div  className="App">
    <Navbar />
      <div className="content">
        <Home />
        <h1>{tittle}</h1>
        <p> Liked {likes}</p>

      </div>
   </div>
  );
}

export default App; 
