import React from 'react'
import 'vikingship/dist/index.css'
import { Alert } from 'vikingship'

import Alert1 from './components/Alert/alert'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Alert1 
          title="标题" 
          description="这是一个描述" 
        />
        <Alert
          title="标题"
          description="这是一个描述"
          type="danger"
          closable={true}
        />
      </header>
    </div>
  );
}

export default App;
