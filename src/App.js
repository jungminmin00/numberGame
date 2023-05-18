import { useState } from 'react';
import './App.css';
import './over.css';
import Border from './Border.js';
import Button from './Button.js';
import Victory from './Victory.js';
import Score from './Score.js';

let i = 0;
const randomNum = (value) => {
  if(i < 10){
    i++;
    return Math.floor(Math.random() * value + 1)
  }else{
    document.querySelector('#over').style.display = 'flex';
    return 0
  }
}

function App() {
  const [aNum,setANum] = useState([]);
  const [bNum,setBNum] = useState([]);
  function playClick(){
    const aRan = randomNum(9);
    const bRan = randomNum(9);
    setANum([...aNum, aRan])
    setBNum([...bNum, bRan])
  }
  function resetClick(){
    setANum([]);
    setBNum([]);
    i = 0;
  }
  function closeClick(){
    setANum([]);
    setBNum([]);
    i = 0;
    document.querySelector('#over').style.display = 'none';
  }

  return (
    <div id="wrap">
      <div id='btn'>
        <Button
          onClick = {playClick}
        >play
        </Button>
        <Button
          onClick = {resetClick}
        >reset
        </Button>
      </div>
      <div id='contain'>
        <Border
          num = {aNum}
          team = "aPic"
        >A team
        </Border>
        <Border
          num = {bNum}
          team = "bPic"
        >B team
        </Border>
      </div>
      
      {/* over */}
      <div id='over'>
        <h2>GameOver</h2>
        <Victory 
          aNum = {aNum}
          bNum = {bNum}/>
        <div>
          <Score num = {aNum}>A team</Score>
          <Score num = {bNum}>B team</Score>
        </div>
        <Button
          onClick={closeClick}
        >reStart</Button>
      </div>
    </div>
  );
}

export default App;
