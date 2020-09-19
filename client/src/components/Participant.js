import React from "react"
import { Context } from "../Context"
import { Toast, ProgressBar, Button } from "react-bootstrap"
import OverlayTrigger  from "react-bootstrap/OverlayTrigger"
import Tooltip  from "react-bootstrap/Tooltip"
import DataPicker from "./DataPicker"

export default function (props) {
  const { removeParticipant,modifyParticipantDates } = React.useContext(Context)

  const [startDate, setStartDate] = React.useState("")
  const [endDate, setEndDate] = React.useState("")


  return (
    <div className="participant ">
      <div className="d-flex flex-row">
        <div className="p-2 " style={{ width: "100px" }}>
          {props.name}
        </div>
        <div className="p-2 mt-1 w-100">
          <ProgressBar now={60} label={startDate + endDate} />
        </div>
        <DataPicker keyProp={props.keyProp} modifyParticipantDates={modifyParticipantDates} />
       
          <button
            className="btn btn-outline-primary mb-3 ml-1"
            type="button"
            data-toggle="tooltip"
            data-placement="top"
            title="Copy link for user"
            style={{height:'40px'}}
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-clipboard"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
              />
              <path
                fillRule="evenodd"
                d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
              />
            </svg>
          </button>

        <button
          className="btn btn-danger mb-3 ml-1"
          type="button"
          style={{height:'40px'}}
          onClick={(e) => { removeParticipant(props.keyProp)}}
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-x-circle"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              fillRule="evenodd"
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
