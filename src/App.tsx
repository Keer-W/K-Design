import React from 'react'
import 'vikingship/dist/index.css'
import Menu from './components/Menu/menu'
import MenuItem from "./components/Menu/menuItem";
// import Alert from './components/Alert/alert'
// import Button from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu onSelect={(index) => {alert(index)}} mode="vertical">
          <MenuItem index={0} disabled>
            child1
          </MenuItem>
          <MenuItem index={1}>
            child2
          </MenuItem>
          <MenuItem index={2}>
            child3
          </MenuItem>
        </Menu>
      </header>
    </div>
  );
}

export default App;
