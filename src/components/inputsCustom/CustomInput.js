import React from "react"

export const CustomInput = ({
  placeholder = "Input Example",
  type = "text",
  areYouInLogin = true,
  functionPlaces = null,
  setValue,
}) => {


  return (
    <div className={`input-container ${areYouInLogin ? "newDesign" : ""}`}>
      <input
        type={type}
        placeholder={placeholder}
        onChange={e => (setValue(e.currentTarget.value))}
        {...functionPlaces} />
      <label placeholder={placeholder}></label>
    </div>
  )
}
