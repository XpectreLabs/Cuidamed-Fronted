import React from "react"
import { Label, Button } from "semantic-ui-react"
import { Header } from "../components/Header"
import { CustomInput } from "../components/inputsCustom/CustomInput"
const register = () => {
  const handleSubmit = e => {
    e.preventDefault()
    console.log("works")
  }
  return (
    <div className="register">
      <Header hideElements={true} />
      <div className="background_container"></div>
      <div className="container">
        <Label className="title">Crear Perfil</Label>
        <form className="form-container" onSubmit={handleSubmit}>
          <CustomInput
            type="text"
            areYouInLogin={true}
            placeholder="Identificador"
          />
          <CustomInput
            type="email"
            areYouInLogin={true}
            placeholder="Correo electrónico"
          />
          <CustomInput
            type="password"
            areYouInLogin={true}
            placeholder="Password"
          />

          <CustomInput
            type="password"
            areYouInLogin={true}
            placeholder="Confirmar contraseña"
          />
          <Button type="submit">Seguir</Button>
        </form>
      </div>
    </div>
  )
}
export default register
