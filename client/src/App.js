import React from "react"
import logo from "./logo.svg"
import "./App.css"
import "./styles.css"
import Participant from "./components/Participant"
import Jumbotron from "./components/Jumbotron"
import { Context } from "./Context"
import "bootstrap/dist/css/bootstrap.min.css"
import Moment from "moment"
import { ListGroup, ProgressBar } from "react-bootstrap"

function App() {
  let users = [
    { key: "ubm1", name: "Olya", link: "link/olya", ll: 10, l: 20, c:30, r:20, rr:20 },
    { key: "ubm2", name: "Lena", link: "link/lena", ll: 10, l: 20, c:30, r:20, rr:20 },
    { key: "ubm3", name: "Polina", link: "link/polina", ll: 10, l: 20, c:30, r:20, rr:20 },
  ]


  const [participants, setParticipants] = React.useState(users)
  const [progresses, setProgresses] = React.useState(users)

  function addParticipant(participant) {
    setParticipants([...participants, participant])
    console.log(participants)
  }

  function removeParticipant(key) {
    setParticipants(
      participants.filter((value, index, arr) => {
        return value.key !== key
      })
    )
  }
  function calcIntervals(){
    participants.map((participant,index,arr)=>{
      if (participant.startDate && participant.endDate) {
        let diff = Moment(participant.endDate,'DD MM YYYY hh:mm')
        .diff(Moment(participant.startDate,'DD MM YYYY hh:mm'),'minutes')
        let tagretIndex = users.findIndex((item, index, array) => item.key === participant.key)
        users[tagretIndex] = {...users[tagretIndex],timeDiff: diff}        
        modifyParticipant(users[tagretIndex])
      }
    })
  }

  function modifyParticipant(participant) {
    let tagretIndex = users.findIndex((item, index, array) => item.key === participant.key)
    users[tagretIndex] = participant
    setParticipants(users)
  }

  //TODO Сделать общей
  function modifyParticipantDates(key, startDate, endDate) {
    let tagretIndex = users.findIndex((item, index, array) => item.key === key)

    users[tagretIndex].startDate = startDate
    users[tagretIndex].endDate = endDate

    console.log(startDate)
    setParticipants(users)


    calcIntervals()
  }

  return (
    <Context.Provider
      value={{ addParticipant, removeParticipant, modifyParticipantDates }}
    >
      <div className="App">
        <Jumbotron />
      </div>
      {participants.map((participant, index) => {
        return (
          <Participant
            key={participant.key}
            keyProp={participant.key}
            participant={participant}

          />
        )
      })}
    </Context.Provider>
  )
}

export default App
