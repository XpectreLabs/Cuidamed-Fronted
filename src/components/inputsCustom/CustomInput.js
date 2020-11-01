import React from "react"

export const CustomInput = ({
  placeholder = "Input Example",
  type = "text",
  areYouInLogin = false,
}) => {
  return (
    <div className={`input-container ${areYouInLogin ? "newDesign" : ""}`}>
      <input type={type} placeholder={placeholder} />
      <label placeholder={placeholder}></label>
    </div>
  )
}
