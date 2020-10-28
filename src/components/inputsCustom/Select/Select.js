import React from "react"
import { Select } from "semantic-ui-react"

export default function SelectCustom(props) {
  const { dataOptions, placeholder, labelName, name, placeSelect = "" } = props


  const moveLabel = () => {
    document.getElementById(labelName).classList.add("move-select")
    document.getElementById(name).placeholder = 'Seleccione un tipo'

  }

  return (
    <div className="select-custom">
      <div className="select-custom__label" id={labelName}>
        <label className="label" >
          {placeholder}
        </label>
      </div>

      <Select
        id={name}
        placeholder={placeSelect}
        options={dataOptions}
        className="select-custom__item"
        onOpen={moveLabel}
      />
    </div>
  )
}
