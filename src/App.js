import React, {useState} from 'react';
import Data from './Data';
import List from './List'
import './App.css'; 

function App() {
  const btn = (e) =>{
    e.preventDefault()
    setPeople([])
  }
  const [people,setPeople] = useState(Data)
  return (
    <div className="App">
         <main>
                   <section className='container'>
                       <h3>{people.length} birthdays today</h3>
                       <List people={people}/>
                       <button onClick={btn}>
                         clear all
                       </button>
                   </section>
               </main> 
    </div>
  );
}

export default App;
