import './App.css';
import Discover from "./pages/discover";
import About from "./pages/about";
import Latest from "./pages/Latest";
import Contact from "./pages/contact";
function App() {
  return (
    <div className="App">
       <Discover></Discover>
       <About></About>
       <Latest></Latest>
       
       <Contact></Contact>
    </div>
  );
}

export default App;
