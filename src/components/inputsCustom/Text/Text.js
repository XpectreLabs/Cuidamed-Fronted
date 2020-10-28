import React from "react"

const InputCustom = ({ labelPlaceholder, name, labelName, type = "text", functionPlaces = null }) => {

  console.log(functionPlaces);
  const handleInputChange = event => {
    document.getElementById(labelName).classList.add("move-label")
    document.getElementById(name).style.textAlign = 'left'
    console.log(event.target.value)
    if (event.target.value === "") {
      document.getElementById(labelName).classList.remove("move-label")
      document.getElementById(name).style.textAlign = 'center'
    }
  }

  return (
    <div className="input-custom">
      <div className="labelText" id={labelName}>
        <label htmlFor={name} className="ui label" >
          {labelPlaceholder}
        </label>
      </div>
      <div className="ui input">
        <input
          type={type}
          id={name}

          autoComplete="off"
          {...functionPlaces}
          onKeyUp={handleInputChange}
        />
      </div>
    </div>
  )
}
export default InputCustom
