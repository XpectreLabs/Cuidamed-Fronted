import React from 'react'

import './Text.scss'

export default class InputCustom extends React.Component {

    handleInputChange  = (event) => {
        document.getElementById('labeName').classList.add('move-label');
        console.log(event.target.value);
    }

    render() {

        const { labelPlaceholder}  = this.props
        return (
            <div className="input-custom">
                <label htmlFor="name" className="ui label" id="labeName">
                   {labelPlaceholder}
                </label>
                <div className="ui input">
                    <input type="text" id="name" onChange={this.handleInputChange} autoComplete="off"/>
                </div>
            </div>
        )
    }
}
