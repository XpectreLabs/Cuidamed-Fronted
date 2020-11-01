import React from "react"
import { Select } from "semantic-ui-react"

export default function SelectCustom({
  dataOptions,
  placeholder,
  labelName,
  name,
  placeSelect = "",
  setValue,
}) {
  const moveLabel = () => {
    document.getElementById(labelName).classList.add("move-select")
    document.getElementById(name).placeholder = "Seleccione un tipo"
  }

  return (
    <div className="select-custom">
      <div className="select-custom__label" id={labelName}>
        <label className="label">{placeholder}</label>
      </div>

      <Select
        id={name}
        placeholder={placeSelect}
        options={dataOptions}
        className="select-custom__item"
        onChange={e => {
          if (e.target.children.length > 0)
            setValue(e.target.children[0].innerHTML)
          else setValue(e.target.innerHTML)
        }}
        onOpen={moveLabel}
      />
    </div>
  )
}
