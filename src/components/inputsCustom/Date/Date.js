import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import "./Date.scss"


const MONTHS = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  const WEEKDAYS_LONG = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];
  const WEEKDAYS_SHORT = ['Do', 'Lu', 'Ma', 'Mie', 'Jue', 'Vie', 'Sa'];

export default class DateInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleDayChange = this.handleDayChange.bind(this);
      this.state = {
        selectedDay: undefined,
      };
    }
  
    handleDayChange(day) {
      this.setState({ selectedDay: day });
    }
  
    render() {
      const { selectedDay } = this.state;
      return (
        <div>
          {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
          {!selectedDay && <p>Choose a day</p>}
          <DayPickerInput 
          locale="es"
          months={MONTHS}
          weekdaysLong={WEEKDAYS_LONG}
          weekdaysShort={WEEKDAYS_SHORT}
          firstDayOfWeek={1}
          onDayChange={this.handleDayChange} />
        </div>
      );
    }
  }