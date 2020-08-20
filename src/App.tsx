import React from 'react'
import 'vikingship/dist/index.css'
import Menu from './components/Menu/menu'
import MenuItem from "./components/Menu/menuItem";
import SubMenu from './components/Menu/subMenu'
// import Alert from './components/Alert/alert'
// import Button from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu
          onSelect={(index) => {
            alert(index);
          }}
        >
          <MenuItem index={0}>child1</MenuItem>
          <MenuItem index={1}>child2</MenuItem>
          <MenuItem index={2}>child3</MenuItem>
          <SubMenu title="这是个下拉框">
            <MenuItem index={0}>child1</MenuItem>
            <MenuItem index={1}>child2</MenuItem>
            <MenuItem index={2}>child3</MenuItem>
          </SubMenu>
        </Menu>
      </header>
    </div>
  );
}

export default App;
