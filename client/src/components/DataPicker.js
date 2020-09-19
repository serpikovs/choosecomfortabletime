import React from "react"
import DateRangePicker from "react-bootstrap-daterangepicker"
import "bootstrap-daterangepicker/daterangepicker.css"
import "bootstrap/dist/css/bootstrap.css"
import "semantic-ui-css/semantic.min.css"
import Moment from "moment"
import Bootstrap from "react-bootstrap"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"

export default function DatePicker(props) {
  function handleCallback(start, end, label) {
    console.log(start, end)
    let a = Moment()
    Moment.updateLocale("ru", {
      months: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
    })
    start.locale("ru")
    end.locale("ru")

    props.modifyParticipantDates(props.keyProp,start.format("Do MMMM YYYY HH:mm"),end.format("Do MMMM YYYY HH:mm"))
    //props.setStartDate(start.format("Do MMMM YYYY HH:mm"))
    //props.setEndDate(end.format("Do MMMM YYYY HH:mm"))
  }


  const selectDataTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Choose time interval
    </Tooltip>
  )

  return (
    <DateRangePicker
      initialSettings={{
        opens: "center",
        timePicker: true,
        timePicker24Hour: true,
        autoUpdateInput: false,
        locale: {
          format: "DD MMMM HH:mm",
          applyLabel: "Сохранить",
          cancelLabel: "Отмена",
          customRangeLabel: "Custom",
          monthNames: [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь",
          ],
        },
      }}
      onCallback={handleCallback}
    >
      <div className="">
        {/*
            <input type="text" className="form-control" placeholder="Выберите даты"  disabled/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="bi bi-calendar3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                        <path fillRule="evenodd" d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                </button>
            </div>
  */}

          <button
            className="btn btn-outline-primary"
            type="button"
            id="button-addon2"
            style={{height:'40px'}}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="bi bi-calendar3"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"
              />
              <path
                fillRule="evenodd"
                d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
              />
            </svg>
          </button>
      </div>
    </DateRangePicker>
  )
}
