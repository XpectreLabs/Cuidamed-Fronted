import React from 'react'
import { Grid, Container } from 'semantic-ui-react'

//icons 
import {
    IconMen,
    IconWomen,
    IconFechaNacimiento,
    IconMapa,
    IconMundo,
    IconAltura,
    IconPeso,
    IconGotaSangre,
    IconOcupacion,
    IconGradoEstudio,
    IconDonador,
    IconEstadoCivil,
    IconReligion,
} from "../../images/icons/icons"

import Text from '../inputsCustom/Text'

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// import "./Slider.scss"
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


export default function Slider() {
    return (
        <Grid centered verticalAlign='middle' className="slider">
            <Grid.Row className="title">
                <h1 className="title">Información Básica</h1>
            </Grid.Row >
            <Grid.Row >
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className="slider-content"
                >
                    <SwiperSlide>
                        {/* <Text className="justify-content" labelPlaceholder="Nombre completo" name="nombre" labelName="labelNombre" />
                    <Text className="justify-content" labelPlaceholder="Domicilio " name="domicilio" labelName="labeldomicilio" /> */}
                        <Grid.Row className="justify-content">
                            <h2>Sexo</h2>
                        </Grid.Row>
                        <Container >
                            <Grid verticalAlign='middle'>
                                <Grid.Row className="inputs-sex" verticalAlign='middle'>
                                    <Grid.Column floated='left' width={6}>
                                        <input id="iconMen" type="radio" name="gender" className="hidden" readOnly="" tabIndex="0" />
                                        <label htmlFor="iconMen"><IconMen /><br /><span>Hombre</span></label>
                                    </Grid.Column>
                                    <Grid.Column floated='right' width={6}>
                                        <input id="iconWomen" type="radio" name="gender" className="hidden" readOnly="" tabIndex="0" />
                                        <label htmlFor="iconWomen"><IconWomen /><br /><span>Mujer</span></label>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Container>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-two">
                            {/* <Container> */}
                            <Grid centered columns={3} verticalAlign='middle'>
                                <Grid.Column width={4}>
                                    <div>
                                        <IconFechaNacimiento />
                                        <Text className="justify-content" labelPlaceholder="Fecha de nacimiento" name="fechaNacimiento" labelName="labelFechaNacimiento" />
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <div>
                                        <IconMapa />
                                        <Text className="justify-content" labelPlaceholder="Lugar de nacimiento" name="lugarNacimiento" labelName="labelLugarNacimiento" />
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <div>
                                        <IconMundo />
                                        <Text className="justify-content" labelPlaceholder="País de nacimiento" name="paisNacimiento" labelName="labelPaisNacimiento" />
                                    </div>
                                </Grid.Column>
                            </Grid>
                            {/* </Container> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-two">
                            <Grid centered columns={3} verticalAlign='middle'>
                                <Grid.Column width={4}>
                                    <div>
                                        <IconAltura />
                                        <Text className="justify-content" labelPlaceholder="Altura (cm)" name="altura" labelName="labelAltura" />
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <div>
                                        <IconPeso />
                                        <Text className="justify-content" labelPlaceholder="Peso (kg)" name="peso" labelName="labelPeso" />
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <div>
                                        <IconGotaSangre />
                                        <Text className="justify-content" labelPlaceholder="Tipo Sangre" name="tipoSangre" labelName="labelTipoSangre" />
                                    </div>
                                </Grid.Column>
                            </Grid>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-two">
                            <Container>
                                <Grid centered columns={3} verticalAlign='middle'>
                                    <Grid.Column floated='left' width={6}>
                                        <div>
                                            <IconMapa />
                                            <Text className="justify-content" labelPlaceholder="Lugar de residencia" name="lugarResidencia" labelName="labelLugarResidencia" />
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column floated='right' width={6}>
                                        <div>
                                            <IconMundo />
                                            <Text className="justify-content" labelPlaceholder="País de residencia" name="paisResidencia" labelName="labelPaisResidencia" />
                                        </div>
                                    </Grid.Column>
                                </Grid>
                            </Container>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-two">
                            <Container>
                                <Grid centered columns={3} verticalAlign='middle'>
                                    <Grid.Column floated='left' width={6}>
                                        <div>
                                            <IconGradoEstudio />
                                            <Text className="justify-content" labelPlaceholder="Grado máximo de estudios" name="gradoMaximo" labelName="labelGradoMaximo" />
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column floated='right' width={6}>
                                        <div>
                                            <IconOcupacion />
                                            <Text className="justify-content" labelPlaceholder="Ocupación" name="ocupacion" labelName="labelOcupacion" />
                                        </div>
                                    </Grid.Column>
                                </Grid>
                            </Container>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-two">
                            <Grid centered columns={3} verticalAlign='middle'>
                                <Grid.Column width={4}>
                                    <div>
                                        <IconReligion />
                                        <Text className="justify-content" labelPlaceholder="Relegión" name="relegion" labelName="labelReligion" />
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <div>
                                        <IconEstadoCivil />
                                        <Text className="justify-content" labelPlaceholder="Estado civil" name="estadoCivil" labelName="labelEstadoCivil" />
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <div>
                                        <IconDonador />
                                        <Text className="justify-content" labelPlaceholder="Donador de organos" name="donador" labelName="labelDonador" />
                                    </div>
                                </Grid.Column>
                            </Grid>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Grid.Row>

        </Grid>
    )
}
