
import './App.css';
import { ProgramCard } from './components';

import { programs } from './constants/programs';

import { useState } from 'react';
function App() {

  const [playerName, setPlayerName] = useState("")
  


  console.log(programs)
  // const avaiblePrograms = programs;


  return (
    <div className="app">
      
     <header className='app__header'>
        BUDDY POINTS
        
     </header>
     <section className="app__playerName">
      {playerName&& <div>your playerID: {playerName}__{Date.now()}</div>}
      <input type="text" onChange={(e)=>{setPlayerName(e.target.value)}} value={playerName} placeholder="your name"/>
     </section>
     <section className="programmsContainer">
      {
        programs.map((program)=><ProgramCard program={program} playerId={playerName} key={program.offer_id}/>)
      }
     </section>
     <secion className="info">
      NOTE: You won't get any reward for playing these games or going to the offer page.<br/>
      This is just an inventory of the programs I recommend 😊

     </secion>
    </div>
  );
}

export default App;
