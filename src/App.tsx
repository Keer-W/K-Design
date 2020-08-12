import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button className="keer"> Keer </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Large Primary </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}> Small Danger </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" > Baidu </Button>
      </header>
    </div>
  );
}

export default App;
