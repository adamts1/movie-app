import {useState,useEffect} from "react";
import ActorsPage from '../src/pages/Actors/ActorsPage';
import ActorsModel from '../src/model/ActorsModel';
import Actors from '../src/Data/Actors';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [actors, setActors] = useState([]);

  // Get data 
  useEffect(()=>{
    const ActorsData= Actors.map(currentActor=>{
      const actor=new ActorsModel(currentActor.firstName, currentActor.lastName, currentActor.birthYear, currentActor.img, currentActor.link);
      return actor;
        })
        setActors(ActorsData);
  },[])

  return (
    <div>
        <ActorsPage {...actors}/>
    </div>
  ); 
}

export default App;
