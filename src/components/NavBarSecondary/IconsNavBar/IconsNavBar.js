import React from "react"
import { map } from "lodash"
import { Link } from "gatsby"
import { ReactComponent as IconBineta } from "../../../images/icons/Biñeta.svg"
import { ReactComponent as IconIndInfBasic } from "../../../images/icons/IndInfBasica.svg"
import { ReactComponent as IconIndMedHistorial } from "../../../images/icons/IndMedHistorial.svg"
import { ReactComponent as IconIndTratamiento } from "../../../images/icons/IndTratamiento.svg"
import { ReactComponent as IconIndContacto } from "../../../images/icons/IndContacto.svg"
import { ReactComponent as IconIndContactoMedico } from "../../../images/icons/IndContactoMedico.svg"
import { ReactComponent as IconIndSeguroMedico } from "../../../images/icons/IndSeguroMedico.svg"

const dataIcons = [
  {
    icon: <IconIndInfBasic></IconIndInfBasic>,
    link: "/info-basic",
  },
  {
    icon: <IconIndMedHistorial></IconIndMedHistorial>,
    link: "/historial-medico",
  },
  {
    icon: <IconIndTratamiento></IconIndTratamiento>,
    link: "/tratamiento",
  },
  {
    icon: <IconIndContacto></IconIndContacto>,
    link: "/contacto",
  },
  {
    icon: <IconIndContactoMedico></IconIndContactoMedico>,
    link: "/contacto-medico",
  },
  {
    icon: <IconIndSeguroMedico></IconIndSeguroMedico>,
    link: "/seguro-medico",
  },
]

export default function IconsNavBar() {


  console.log(window.location.pathname)

  return (
    <>
      {map(dataIcons, (icon, index) => {
        if (window.location.pathname === icon.link) {

          return <Link key={index} to={icon.link} className="icon-container icon-selected">
            {icon.icon}
          </Link>

        }
        return <Link key={index} to={icon.link} className="icon-container">
          {icon.icon}
        </Link>


      })}
    </>
  )
}
