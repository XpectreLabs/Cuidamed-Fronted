import React, { useState, useEffect } from "react"
import { navigate } from 'gatsby'

import Moment from 'react-moment';
import { Grid, Container, Icon, Button } from "semantic-ui-react"


// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
import "swiper/components/scrollbar/scrollbar.scss"

import {
    CarpDigestivo,
    CarpEndocrino,
    CarpMuscular,
    CarpNervioso,
    CarpOseo,
    CarpPiel,
    CarpRespiratorio,
    CarpSanguineo,
    CarpSexual,
    CarpUrinario
} from "../../../images/icons/icons"

// import "./Slider.scss"
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export default function MedicalHistory() {

    return (
        <Grid centered className="slider">
            <h1 className="title">Historial Médico</h1>
            <Grid.Row columns={16}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    // allowSlideNext={isValidIndex}
                    // allowSlidePrev={isValidIndex}
                    pagination={{ clickable: false }}
                    // scrollbar={{ draggable: true }}
                    // onSwiper={swiper => console.log(swiper)}
                    // onSlideChange={e => setActiveIndex(e.activeIndex)}
                    className="slider-content"
                    simulateTouch={false}
                >
                    <SwiperSlide>
                        <h2>¿Tienes algunas de estas enfermedades?</h2>
                        <div className="container-enfermedades">
                            <div className="">
                                <input type="checkbox" id="enfermedad1"></input>
                                <label htmlFor="enfermedad1" className="ui button" placeholder="hipertension">Hipertensión</label>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Grid className="capeta-enfermedades" centered >
                            <Grid.Row>
                                <h3>Enfermedades de:</h3>  
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <div>
                                        <CarpOseo />
                                        <p>Sistema óseo</p>
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <div>
                                        <CarpMuscular />
                                        <p>Sistema muscular</p>
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <div>
                                        <CarpSanguineo />
                                        <p>Sistema circulatorio</p>
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <div>
                                        <CarpDigestivo />
                                        <p>Sistema digestivo</p>
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <div>
                                        <CarpUrinario />
                                        <p>Sistema urinario</p>
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <div>
                                        <CarpNervioso />
                                        <p>Sistema nervioso</p>
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <div>
                                        <CarpSexual />
                                        <p>Sistema reproductivo</p>
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <div>
                                        <CarpEndocrino />
                                        <p>Sistema endocrino</p>
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <div>
                                        <CarpRespiratorio />
                                        <p>Sistema respiratorio</p>
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <div>
                                        <CarpPiel />
                                        <p>Piel</p>
                                    </div>
                                </Grid.Column>
                                {/* <Grid.Column width={3}>
                                    <div>
                                        <IconMen />
                                        <p>Cancer</p>
                                    </div>
                                </Grid.Column> */}
                        </Grid.Row>
                    </Grid>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <Grid centered>
                            <Grid.Row>
                                <Grid.Column>
                                    <h3>Arrastre las enfermedades que tenga a mis enfermedades</h3>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <h3>Enfermedades</h3>
                            </Grid.Column>
                            <Grid.Column>
                                <h3>Mis enfermedades</h3>
                            </Grid.Column>
                        </Grid.Row>

                    </SwiperSlide>
                    <SwiperSlide>

                    </SwiperSlide>
                    <SwiperSlide>

                    </SwiperSlide>
                    <SwiperSlide>

                    </SwiperSlide>
                </Swiper>
            </Grid.Row>

        </Grid>
    )
}

