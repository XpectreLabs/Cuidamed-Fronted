import React from 'react'
import { map } from 'lodash'
import {ReactComponent as IconBineta} from "../../../images/icons/Biñeta.svg"
import {ReactComponent as IconIndInfBasic} from "../../../images/icons/IndInfBasica.svg"
import {ReactComponent as IconIndMedHistorial} from "../../../images/icons/IndMedHistorial.svg"
import {ReactComponent as IconIndTratamiento} from "../../../images/icons/IndTratamiento.svg"
import {ReactComponent as IconIndContacto} from "../../../images/icons/IndContacto.svg"
import {ReactComponent as IconIndContactoMedico} from "../../../images/icons/IndContactoMedico.svg"
import {ReactComponent as IconIndSeguroMedico} from "../../../images/icons/IndSeguroMedico.svg"
import './IconsNavBar.scss'

const dataIcons = [
    {
        icon: <IconIndInfBasic></IconIndInfBasic>,

    },
    {
        icon: <IconIndMedHistorial></IconIndMedHistorial>,

    },
    {
        icon: <IconIndTratamiento></IconIndTratamiento>,

    },
    {
        icon: <IconIndContacto></IconIndContacto>,

    },
    {
        icon: <IconIndContactoMedico></IconIndContactoMedico>,

    },
    {
        icon: <IconIndSeguroMedico></IconIndSeguroMedico>,

    },
]

export default function IconsNavBar() {
    return (  
        <>
            {map(dataIcons, (icon, index) => (
            <div key={index} className="icon-container">
                    <IconBineta className="bineta"></IconBineta>
                    {icon.icon}  
                </div>
            ))} 
        </>     
    )
}
