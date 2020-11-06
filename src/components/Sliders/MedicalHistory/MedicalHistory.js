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

                    </SwiperSlide>
                    <SwiperSlide>

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

