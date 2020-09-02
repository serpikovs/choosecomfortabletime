import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css'
import DataPicker from './components/DataPicker'

function App() {

  const [startDate,setStartDate] = React.useState("")
  const [endDate,setEndDate] = React.useState("")

  return (
    <div className="App">
      <div>
        Выберите время, когда Вы сможете посетить мероприятие
      </div>
      <DataPicker setStartDate={setStartDate} setEndDate={setEndDate} />
      <input style={{width:600}} value={startDate+" "+endDate}></input>
      <br/><button>Добавить участника</button>  
    </div>
  );
}

export default App;
