import React from "react"
import { Select } from "semantic-ui-react"

export default function SelectCustom(props) {
  const { dataOptions, placeholder, labelName } = props

  const moveLabel = () => {
    document.getElementById(labelName).classList.add("move-select")
  }

  return (
    <div className="select-custom">
      <label htmlFor="select" className="select-custom__label" id={labelName}>
        {placeholder}
      </label>
      <Select
        id="select"
        placeholder=""
        options={dataOptions}
        className="select-custom__item"
        onOpen={moveLabel}
      />
    </div>
  )
}
