import React from "react"
import {
  Container,
  Grid,
  Header,
  Label,
  Input,
  Button,
  Image,
} from "semantic-ui-react"
import Logo from "../../images/CuidamedLogo.png"
import Text from "../inputsCustom/Text"

export default function Login() {
  return (
    <div className="login">
      <Header className="header">
        <Grid verticalAlign="middle">
          <Grid.Column width={4}>
            <div className="register">
              <p>
                ¿No tienes cuenta?{" "}
                <a href="#asda">
                  <span>Crea cuenta</span>
                </a>
              </p>
            </div>
          </Grid.Column>
          <Grid.Column width={8}>
            <Image src={Logo} className="logo" centered />
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid>
      </Header>
      <Container className="container">
        <Grid centered>
          <Grid.Row>
            <Label className="title">Entrar a la cuenta</Label>
          </Grid.Row>
          <Grid.Row>
            <Text
              labelPlaceholder="Correo electrónico"
              name="email"
              labelName="labelEmail"
            />
            {/* <Input focus placeholder='Correo electrónico' /> */}
          </Grid.Row>
          <Grid.Row>
            <Text
              labelPlaceholder="Contraseña"
              name="password"
              labelName="labelPassword"
              type="password"
            />
            {/* <Input placeholder='Contraseña' type="password" /> */}
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
