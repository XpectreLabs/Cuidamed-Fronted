import React, {useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es"
registerLocale("es", es);

const DateInput = ({name,labelName,labelPlaceholder}) => {
  const [fecha,setFecha] = useState(null);
  const handleInputChange = event => {
    document.getElementById(labelName).classList.add("move-label");
    setFecha(event)
    console.log(event);
    if (event === null) {
      document.getElementById(labelName).classList.remove("move-label")
    }
  }

    return (
      <div className="date-input">
        <label htmlFor={name} id={labelName}>
         {labelPlaceholder}
        </label>
        <DatePicker 
        selected={fecha} 
        onChange={handleInputChange} 
        locale="es" 
        className="pickers" 
        dateFormat="dd 'de' MMMM 'de' yyyy"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        maxDate={(new Date())} 
        fixedHeight
        id={name}
        >
        </DatePicker>
      </div>
    );

}

export default DateInput;
