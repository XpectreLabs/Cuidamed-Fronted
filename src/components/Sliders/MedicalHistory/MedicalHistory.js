import React, { useState, useEffect } from "react"
import { navigate } from 'gatsby'

import Moment from 'react-moment';
import { Grid, Container, Icon, Button, GridColumn, GridRow } from "semantic-ui-react"


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
    CarpUrinario,
    Oseo
} from "../../../images/icons/icons"

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
            {/* <h1 className="title-diseas">Historial Médico</h1> */}
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
                            <Grid.Row className="system" centered>
                                <h3 className="subtitle"><span className="subtitle-icon"><Oseo /></span>Sistema óseo</h3>
                                <h3>Arrastre las enfermedades que tenga a mis enfermedades</h3>
                            </Grid.Row>
                            <Grid.Row columns="2">
                                <Grid.Column className="diseases">
                                    <GridRow>
                                        <h3>Enfermedades</h3>
                                    </GridRow>
                                    <Grid.Row  className="plate">
                                        <Grid.Row>
                                            Cancer
                                        </Grid.Row>
                                        <Grid.Row>
                                            Cancer
                                        </Grid.Row>
                                        <Grid.Row>
                                            Cancer
                                        </Grid.Row>
                                        <Grid.Row>
                                            Cancer
                                        </Grid.Row>
                                        <Grid.Row>
                                            Cancer
                                        </Grid.Row>
                                        <Grid.Row>
                                            Cancer
                                        </Grid.Row>
                                        <Grid.Row>
                                            Cancer
                                        </Grid.Row>
                                        <Grid.Row>
                                            Cancer
                                        </Grid.Row>
                                        <Grid.Row>
                                            Cancer
                                        </Grid.Row>
                                        <Grid.Row>
                                            Cancer
                                        </Grid.Row>
                                        <Grid.Row>
                                            Cancer
                                        </Grid.Row>
                                        <Grid.Row>
                                            Cancer
                                        </Grid.Row>
                                        <Grid.Row>
                                            Cancer
                                        </Grid.Row>
                                        <Grid.Row>
                                            Cancer
                                        </Grid.Row>
                                        <Grid.Row>
                                            Cancer
                                        </Grid.Row>
                                        <Grid.Row>
                                            Cancer
                                        </Grid.Row>
                                         
                                        {/* <Grid.Column className="internal-plate">

                                        </Grid.Column> */}
                                    </Grid.Row>
                                </Grid.Column>
                                <Grid.Column>
                                    <Grid.Row>
                                        <h3>Mis enfermedades</h3>
                                    </Grid.Row>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

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

