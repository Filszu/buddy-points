
import './App.css';
import { ProgramCard } from './components';

import { programs } from './constants/programs';
function App() {
  


  console.log(programs)
  // const avaiblePrograms = programs;


  return (
    <div className="app">
      
     <header>
        BUDDY POINTS
        
     </header>
     <div className="programmsContainer">
      {
        programs.map((program)=><ProgramCard program={program} key={program.offer_id}/>)
      }
     </div>
    </div>
  );
}

export default App;
