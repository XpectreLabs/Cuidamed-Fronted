import React, { useState, useEffect } from "react"
import { navigate } from 'gatsby'

import Moment from 'react-moment';
import { Grid, Container, Icon, Button, GridColumn } from "semantic-ui-react"


// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
import "swiper/components/scrollbar/scrollbar.scss"

import { commonDiseases } from "./data"

// import "./Slider.scss"
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export default function MedicalHistory() {

    useEffect(() => {
        console.log(listCommonDiseases);
    }, [listCommonDiseases])

    const [listCommonDiseases, setListCommonDiseases] = useState([])
    const handleCheckedInput = e => {
        console.log(e.currentTarget.checked);
        console.log(listCommonDiseases)
        const value = e.target.value

        if (e.currentTarget.checked) {
            setListCommonDiseases(listCommonDiseases => [...listCommonDiseases, value])
        }

    }


    return (
        <Grid centered className="slider">
            <h1 className="title">Historial Médico</h1>
            <Grid.Row >
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
                        <Container >
                            <Grid>
                                <Grid.Column computer={16} mobile={16} tablet={16}>
                                    <Grid.Row>
                                        <h2 className="title-diseas">¿Tienes algunas de estas enfermedades?</h2>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <div className="container-enfermedades">
                                            {commonDiseases.map((disease, index) => (
                                                <div key={index} className="container-enfermedades__btn">
                                                    <input type="checkbox" id={disease.id} value={disease.id} onChange={handleCheckedInput}></input>
                                                    <label htmlFor={disease.id} className="ui button">{disease.name}</label>
                                                </div>
                                            ))}
                                        </div>
                                    </Grid.Row>
                                </Grid.Column>
                            </Grid>
                        </Container>
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

