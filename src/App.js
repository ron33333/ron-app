import './App.css';
import Avatar from "./Components/Avatar";

function App() {
  const URL='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg';
  return (
    <div className="App">
    <Avatar url={URL}/>
   </div>
  );
}


export default App;
