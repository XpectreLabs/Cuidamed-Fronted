import React from 'react'

export default function BasicLayout(props) {

    const { children} = props;

    return (
        <div>
            <h1>this is basic layout</h1>
            {children}
        </div>
    )
}
