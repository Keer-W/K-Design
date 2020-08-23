import React from 'react'
// import 'vikingship/dist/index.css'
// import { Tabs } from 'vikingship'
// import Menu from './components/Menu/menu'
// import MenuItem from "./components/Menu/menuItem";
// import SubMenu from './components/Menu/subMenu'
// import Alert from './components/Alert/alert'
// import Button from './components/Button/button'
import Tabs from './components/Tabs/tabs'
import TabItem from './components/Tabs/tabItem'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tabs>
          <TabItem label="选项卡零">child0</TabItem>
          <TabItem label="选项卡一">child1</TabItem>
          <TabItem label="选项卡二">child2</TabItem>
          <TabItem label="选项卡三">child3</TabItem>
        </Tabs>
      </header>
    </div>
  );
}

export default App;
