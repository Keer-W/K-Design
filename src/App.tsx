import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled> Keer </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Keer </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled> Baidu </Button>
      </header>
    </div>
  );
}

export default App;
