import React from "react"

export const CustomInput = ({
  placeholder = "Input Example",
  type = "text",
  areYouInLogin = true,
  functionPlaces = null,
  setValue,
  onblur = (e) => { },
}) => {


  return (
    <div className={`input-container ${areYouInLogin ? "newDesign" : ""}`}>
      <input
        type={type}
        placeholder={placeholder}
        onChange={e => { setValue(e.currentTarget.value) }}
        onBlur={e => { onblur(e.currentTarget.value) }}
        {...functionPlaces} />
      <label placeholder={placeholder}></label>
    </div>
  )
}
