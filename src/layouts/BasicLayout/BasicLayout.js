import React from 'react'
import  { Container, Grid} from 'semantic-ui-react'

import  "./BasicLayout.scss"
import NavBarSecondary from '../../components/NavBarSecondary'

export default function BasicLayout(props) {

    const { children} = props;

    return (
        <Container fluid className="basic-layout">
            <Grid>
                <Grid.Column mobile={16} tablet={16} computer={1}>
                    <NavBarSecondary></NavBarSecondary>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={16} computer={15}>
                    <h1>información Básica</h1>
                    {children}
                </Grid.Column>
            </Grid>
        </Container>
    )
}
