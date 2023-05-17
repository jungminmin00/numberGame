import { useState } from 'react';
import './App.css';
import Border from './Border.js';
import Button from './Button.js';
import Pic from './Pic.js';

const randomNum = (value) => {
  return Math.floor(Math.random() * value + 1)
}

function App() {
  const [aNum,setANum] = useState([]);
  const [bNum,setBNum] = useState([]);
  function playClick(){
    const aRan = randomNum(9);
    const bRan = randomNum(9);
    setANum([...aNum, aRan])
    setBNum([...bNum, bRan])
    // console.log(aNum)
    // console.log(bNum)
  }
  return (
    <div id="wrap">
      <div id='btn'>
        <Button
          onClick = {playClick}
        >start
        </Button>
        <Button>reset
        </Button>
      </div>
      <div id='contain'>
        <Border
          num = {aNum}
        >A팀
        </Border>
        <Border
          num = {bNum}
        >B팀
        </Border>
      </div>
    </div>
  );
}

export default App;
