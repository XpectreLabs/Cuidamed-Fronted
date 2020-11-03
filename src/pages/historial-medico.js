import React from 'react'
import BasicLayout from "../layouts/BasicLayout"
// import Select from "../components/inputsCustom/Select"
import InputDate from "../components/inputsCustom/Date"

export default function HistorialMedico() {

    const data = [
        { key: '1', value: '1', text: 'Tabasco' },
        { key: '2', value: '2', text: 'Veracruz' },
    ]
    return (
        <BasicLayout view="historial">
            <h1>this is historial medico</h1>
            {/* <Select dataOptions={data} placeholder="Tipo de sangre" labelName="sangre" /> */}
            <InputDate />
        </BasicLayout>
    )
}
