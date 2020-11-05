import React, {useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es"
registerLocale("es", es);

const DateInput = ({
  placeholder = "Input Example",
  setValue = e=>{
    console.log(e)
  },
}) => {
  
  const [fecha,setFecha] = useState(null);
  
  const handleInputChange = event => {
    setValue(event)
    setFecha(event)
    console.log(event);
    
  }

    return (
      <div className='input-container newDesign'>
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
        placeholderText={placeholder}
        >
          <label className="date" placeholder={placeholder}></label>
        </DatePicker>
        {/* <label className="date" placeholder={placeholder}></label> */}
      </div>
    );

}

export default DateInput;
