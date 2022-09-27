// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Friends from './components/friends';
function App() {
  return (
    <>
      <Navbar logo="Find" logo2="Friend"/>
      <Friends checkFreinds="For Finding Your best Friend"/>
    </>
  );
}

export default App;
