import React from 'react';
import logo from './logo.svg';
import './App.css';

import './components/Divider';
import Divider from './components/Divider';
import bg_left from './imgs/background-left.png';
import bg_right from './imgs/background-right.png';
import wiggle_top from './imgs/wiggle-top.png';
import wiggle_bottom from './imgs/wiggle-bottom.png';

function App() {
  return (
    <div className="App">
     
   
      <Divider bgcolor="#95D600" bg_left={bg_left} bg_right={bg_right} wiggle_top={wiggle_top} wiggle_bottom={wiggle_bottom}/>

      <Divider bgcolor="#17D0EF"/>

      <Divider bgcolor="#DCE8E0" bg_left={bg_left} bg_right={bg_right} wiggle_top={wiggle_top} wiggle_bottom={wiggle_bottom}/>

    </div>
  );
}

export default App;
