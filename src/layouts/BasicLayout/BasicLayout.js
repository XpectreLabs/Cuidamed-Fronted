import React from 'react'
import  { Container, Grid, Image} from 'semantic-ui-react'
import NavBarSecondary from '../../components/NavBarSecondary'
import InputCustom from '../../components/InputCustom'
import {ReactComponent as IconBineta} from "../../images/icons/BiñetaGrey.svg"

//imagenes
import imgMen from "../../images/icons/iconMen.png"
import imgWomen from "../../images/icons/iconWomen.png"

//css
import  "./BasicLayout.scss"




export default function BasicLayout(props) {

    const { children} = props;

    const bullet = []

    for (let index = 0; index < 5; index++) {
        bullet.push(<IconBineta className="bineta" ></IconBineta>)
    }

    return (
        <Container fluid className="basic-layout">
            <Grid>
                <Grid.Column mobile={16} tablet={2} computer={1}>
                    <NavBarSecondary></NavBarSecondary>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={14} computer={15}>
                    <Grid.Row className="justify-content">
                        <h1>Información Básica</h1>
                    </Grid.Row>
                    <InputCustom labelPlaceholder="Nombre completo"  />
                    <Grid.Row className="justify-content">
                        <h2>Sexo</h2>
                    </Grid.Row>
                    <Grid.Row className="inputs-sex">
                        <Image src={imgMen} alt="sexo masculino"></Image>
                        <Image src={imgWomen} alt="sexo femenino"></Image>
                    </Grid.Row>
                    <Grid.Row className="svg">
                        {bullet}
                    </Grid.Row>

                </Grid.Column>
            </Grid>
        </Container>
    )
}
