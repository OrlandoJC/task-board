import './App.css'
import LayoutIcon from './assets/icons/Logo.svg'

function App() {
  return (
    <div className="App">
      <div className="TaskBoard">
        <div className="container">
          <div className="title_details">
            <h1 className="title">
              <img src={LayoutIcon} alt="" /> My Task Board
            </h1>
            <h2 className="subtitle">Tasks to keep organized</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
