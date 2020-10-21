import React from 'react'
import { Container, Grid, Header, Label, Input, Button, Image } from 'semantic-ui-react'
import Logo from "../../images/CuidamedLogo.png"
import "./Login.scss"

export default function Login() {
    return (
        <div className="login">
            <Header className="header">
                <Grid verticalAlign='middle'>
                    <Grid.Column width={4}>
                        <div className="register">
                            <p>¿No tienes cuenta? <a href="#asda"><span>Crea cuenta</span></a></p>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Image src={Logo} className="logo" centered/>
                    </Grid.Column>
                    <Grid.Column width={4}>
                    </Grid.Column>
                </Grid>
            </Header>
            <Container className="container">
                <Grid centered>
                    <Grid.Row>
                        <Label>Entrar a la cuenta</Label>
                    </Grid.Row>
                    <Grid.Row>
                        <Input focus placeholder='Correo electrónico' />
                    </Grid.Row>
                    <Grid.Row>
                        <Input placeholder='Contraseña' type="password" />
                    </Grid.Row>
                    <Grid.Row>
                        <Button>Iniciar sesión</Button>
                    </Grid.Row>
                    <Grid.Row>
                        <Button className="emergency">Emergencia</Button>
                    </Grid.Row>
                </Grid>

            </Container>
        </div>
    )
}
