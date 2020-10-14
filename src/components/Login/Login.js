import React from 'react'
import { Container, Header, Label, Input, Button, Image } from 'semantic-ui-react'
// import Imagen from "../Image"
import Logo from "../../images/logo.jpg"
import "./Login.scss"

export default function Login() {
    return (
        <div>
            <Header className="header">
                <div class="register">
                    <p>¿No tienes cuenta? <a href="#"><span>Crea cuenta</span></a></p>
                </div>
                <Image src={Logo} className="logo"/>
                {/* <Imagen fileName="logo.jpg" alt="logo-cuidamed" className="logo"/> */}
            </Header>
            <Container className="container">        
                
                <Label>Entrar a la cuenta</Label>
                <Input focus placeholder='Correo electrónico' />
                <Input placeholder='Contraseña'/>

                <Button>Iniciar sesión</Button>
                <Button className="emergency">Emergencia</Button>

            </Container>
        </div>
    )
}
