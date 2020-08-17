import React from 'react'
import 'vikingship/dist/index.css'
import Alert from './components/Alert/alert'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Alert
          title="标题"
          description="这是一个描述"
          closable={true}
          type="warning"
        />
        <Alert
          title="标题"
          description="这是一个描述"
          closable={true}
          type="danger"
        />
        <Alert
          title="标题"
          description="这是一个描述"
          closable={true}
          type="default"
        />
        <Alert
          title="标题"
          description="这是一个描述"
          closable={false}
          type="success"
        />
      </header>
    </div>
  );
}

export default App;
