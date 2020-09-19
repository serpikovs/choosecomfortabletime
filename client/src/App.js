import React from "react"
import logo from "./logo.svg"
import "./App.css"
import "./styles.css"
import Participant from "./components/Participant"
import Jumbotron from "./components/Jumbotron"
import { Context } from "./Context"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ProgressBar} from "react-bootstrap"



function App() {


  let users = [
    { key: 'ubm1', name: "Olya",  link: "link/olya" },
    { key: 'ubm2', name: "Lena",  link: "link/lena" },
    { key: 'ubm3', name: "Polina",  link: "link/polina" },
  ]

  const [participants, setParticipants] = React.useState(users)

  //console.log(participants)


  function addParticipant(participant) {
    setParticipants([...participants, participant])
    console.log(participants)
  }

  function removeParticipant(key){
    setParticipants(participants.filter((value,index,arr)=>{return value.key!==key}))
  }

  function modifyParticipantDates(key, startDate, endDate) {    
    let tagretIndex = users.findIndex((item,index,array)=>item.key===key)

    users[tagretIndex].startDate = startDate
    users[tagretIndex].endDate = endDate

    setParticipants(users)
  }

  return (
    <Context.Provider value={{ addParticipant,removeParticipant,modifyParticipantDates }}>
      <div className="App">
        <Jumbotron />
      </div>
      {participants.map((participant,index) => {
        return(<Participant key={participant.key} keyProp={participant.key} name={participant.name} time={participant.time} link={participant.link}/>)
      })}
    </Context.Provider>
  )
}

export default App
