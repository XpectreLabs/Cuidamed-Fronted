import React from 'react'
import { ReactComponent as IconBineta } from "../images/icons/BiñetaGrey.svg"
import { ReactComponent as IconMen } from "../images/icons/iconMen.svg"
import { ReactComponent as IconWomen } from "../images/icons/iconWomen.svg"
import { Grid } from 'semantic-ui-react'
import BasicLayout from "../layouts/BasicLayout";
import Text from '../components/inputsCustom/Text'



export default function InfoBasic() {

    const bullet = []

    for (let index = 0; index < 5; index++) {
        bullet.push(<IconBineta key={index} className="bineta" ></IconBineta>)
    }


    return (
        <BasicLayout view="info-basic">
            <Grid.Row className="justify-content">
                <h1>Información Básica</h1>
            </Grid.Row >

            <Text className="justify-content" labelPlaceholder="Nombre completo" name="nombre" labelName="labelNombre" />
            <Text className="justify-content" labelPlaceholder="Domicilio " name="domicilio" labelName="labeldomicilio" />
            <Grid.Row className="justify-content">
                <h2>Sexo</h2>
            </Grid.Row>
            <Grid.Row className="inputs-sex">
                <input id="iconMen" type="radio" name="gender" className="hidden" readOnly="" tabIndex="0" />
                <label htmlFor="iconMen"><IconMen /></label>
                <input id="iconWomen" type="radio" name="gender" className="hidden" readOnly="" tabIndex="0" />
                <label htmlFor="iconWomen"><IconWomen /></label>
            </Grid.Row>
            <Grid.Row className="svg">
                {bullet}
            </Grid.Row>
        </BasicLayout >
    )
}
