import React from 'react'

import './Text.scss'

export default class InputCustom extends React.Component {

    handleInputChange = (event) => {

        document.getElementById(this.props.labelName).classList.add('move-label');
        console.log(event.target.value);
        if (event.target.value === "") {
            document.getElementById(this.props.labelName).classList.remove('move-label');

        }
    }

    render() {

        const { labelPlaceholder, name, labelName } = this.props
        return (
            <div className="input-custom">
                <label htmlFor={name} className="ui label" id={labelName}>
                    {labelPlaceholder}
                </label>
                <div className="ui input">
                    <input type="text" id={name} onChange={this.handleInputChange} autoComplete="off" />
                </div>
            </div>
        )
    }
}
