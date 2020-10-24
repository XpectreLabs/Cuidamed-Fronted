import React from "react"

const InputCustom = ({ labelPlaceholder, name, labelName, type = "text" }) => {
  const handleInputChange = event => {
    document.getElementById(labelName).classList.add("move-label")
    console.log(event.target.value)
    if (event.target.value === "") {
      document.getElementById(labelName).classList.remove("move-label")
    }
  }

  return (
    <div className="input-custom">
      <label htmlFor={name} className="ui label" id={labelName}>
        {labelPlaceholder}
      </label>
      <div className="ui input">
        <input
          type={type}
          id={name}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>
    </div>
  )
}
export default InputCustom
