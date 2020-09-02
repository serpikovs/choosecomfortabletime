
import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css'
import Moment from 'moment'






export default function DatePicker(props)
  {

    function handleCallback(start, end, label) {
        console.log(start, end)
        let a =  Moment()
        Moment.updateLocale('ru', {
          months : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']
      });
      start.locale('ru')
      end.locale('ru')
      props.setStartDate(start.format('Do MMMM YYYY HH:mm'))
      props.setEndDate(end.format('Do MMMM YYYY HH:mm'))
      }

      return(
  <DateRangePicker
        initialSettings={{ 
           opens:'center' ,
           timePicker: true,
           timePicker24Hour: true,
           autoUpdateInput: false,
           locale: {
            format: 'DD MMMM HH:mm',
            applyLabel: "Сохранить",
            cancelLabel: "Отмена",
            customRangeLabel: "Custom",
            monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
          }
          }}
          onCallback={handleCallback}
      >
          <button>Выбрать дату</button>
      </DateRangePicker>
      )
  }
