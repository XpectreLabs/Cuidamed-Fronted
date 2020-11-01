import React, { useState, useEffect } from "react"
import { Grid, Container } from "semantic-ui-react"

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
  IconSeguro,
} from "../../images/icons/icons"

import { bloodType, gradesStudy, religion, maritalStatus, ifNot } from "./data"

import Text from "../inputsCustom/Text"
import Date from "../inputsCustom/Date"
import Select from "../inputsCustom/Select"

//Placess
import PlacesComplete from "../PlacesComplete"

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

export default function Slider() {
  const [isValidIndex, setIsValidIndex] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [formValues, setFormValues] = useState({
    sex: "",
    birthDate: "",
    placeBirth: "",
    placeLived: "",
    height: "",
    weight: "",
    typeBlood: "",
  })
  console.log(formValues)
  const {
    sex,
    birthDate,
    placeBirth,
    placeLived,
    height,
    weight,
    typeBlood,
  } = formValues
  useEffect(() => {
    switch (activeIndex) {
      case 0:
        if (sex != "" && sex != undefined) setIsValidIndex(true)
        else setIsValidIndex(false)
        break
      case 1:
        if (birthDate !== "" && placeBirth !== "" && placeLived !== "")
          setIsValidIndex(true)
        else setIsValidIndex(false)
        break
      case 2:
        if (height !== "" && weight !== "" && typeBlood !== "")
          setIsValidIndex(true)
        else setIsValidIndex(false)
        break
      default:
        break
    }
  }, [activeIndex, formValues])
  return (
    <Grid centered className="slider">
      <h1 className="title">Información Básica</h1>
      {/* <Grid.Row className="title">
            </Grid.Row > */}

      <Grid.Row>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          allowSlideNext={isValidIndex}
          allowSlidePrev={isValidIndex}
          pagination={{ clickable: false }}
          // scrollbar={{ draggable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={e => setActiveIndex(e.activeIndex)}
          className="slider-content"
          simulateTouch={false}
        >
          <SwiperSlide>
            <Container verticalAlign="middle">
              {/* <Grid.Row>
                                <h2>Sexo</h2>
                            </Grid.Row> */}
              <Grid verticalAlign="middle">
                <Grid.Row className="inputs-sex" verticalAlign="middle">
                  <Grid.Column floated="left" width={6}>
                    <input
                      id="iconMen"
                      type="radio"
                      name="gender"
                      className="hidden"
                      readOnly=""
                      tabIndex="0"
                    />
                    <label
                      htmlFor="iconMen"
                      style={{ cursor: "pointer" }}
                      onClick={() => setFormValues({ ...formValues, sex: "M" })}
                    >
                      <IconMen />
                      <br />
                      <span>Hombre</span>
                    </label>
                  </Grid.Column>
                  <Grid.Column floated="right" width={6}>
                    <input
                      id="iconWomen"
                      type="radio"
                      name="gender"
                      className="hidden"
                      readOnly=""
                      tabIndex="0"
                    />
                    <label
                      htmlFor="iconWomen"
                      style={{ cursor: "pointer" }}
                      onClick={() => setFormValues({ ...formValues, sex: "F" })}
                    >
                      <IconWomen />
                      <br />
                      <span>Mujer</span>
                    </label>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-two">
              <Grid centered columns={3} verticalAlign="middle">
                <Grid.Column width={4}>
                  <div>
                    <IconFechaNacimiento />
                    <Date
                      className="justify-content"
                      handleDay={e =>
                        setFormValues({ ...formValues, birthDate: e })
                      }
                    />
                  </div>
                </Grid.Column>
                <Grid.Column width={4}>
                  <div>
                    <IconMundo />
                    <PlacesComplete
                      labelName="labelLugarNacimiento"
                      inputName="inputLugarNacimiento"
                      labelPlaceholder="Lugar de nacimiento"
                      setValue={e =>
                        setFormValues({ ...formValues, placeBirth: e })
                      }
                    />
                  </div>
                </Grid.Column>
                <Grid.Column width={4}>
                  <div>
                    <IconMapa />
                    <PlacesComplete
                      labelName="labelLugarResidencia"
                      inputName="inputLugarResidencia"
                      labelPlaceholder="Lugar de residencia"
                      setValue={e =>
                        setFormValues({ ...formValues, placeLived: e })
                      }
                    />
                  </div>
                </Grid.Column>
              </Grid>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-two">
              <Grid centered columns={3} verticalAlign="middle">
                <Grid.Column width={4}>
                  <div>
                    <IconAltura />
                    <Text
                      className="justify-content"
                      labelPlaceholder="Altura (cm)"
                      type="number"
                      name="altura"
                      labelName="labelAltura"
                    />
                  </div>
                </Grid.Column>
                <Grid.Column width={4}>
                  <div>
                    <IconPeso />
                    <Text
                      className="justify-content"
                      labelPlaceholder="Peso (kg)"
                      type="number"
                      name="peso"
                      labelName="labelPeso"
                    />
                  </div>
                </Grid.Column>
                <Grid.Column width={4}>
                  <div>
                    <IconGotaSangre />
                    <Select
                      placeholder="Tipo de sangre"
                      labelName="sangre"
                      dataOptions={bloodType}
                      name="tipoSangre"
                      setValue={e =>
                        setFormValues({ ...formValues, typeBlood: e })
                      }
                    />
                  </div>
                </Grid.Column>
              </Grid>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-two">
              <Grid centered columns={3} verticalAlign="middle">
                <Grid.Column width={4}>
                  <div>
                    <IconGradoEstudio />
                    <Select
                      placeholder="Grado de estudios"
                      labelName="grado"
                      dataOptions={gradesStudy}
                      name="gradoEstudio"
                    />
                  </div>
                </Grid.Column>
                <Grid.Column width={4}>
                  <div>
                    <IconSeguro />
                    <Text
                      className="justify-content"
                      labelPlaceholder="Seguro médico"
                      inputName="seguro"
                      labelName="labelSeguro"
                    />
                  </div>
                </Grid.Column>
                <Grid.Column width={4}>
                  <div>
                    <IconOcupacion />
                    <Text
                      className="justify-content"
                      labelPlaceholder="Ocupación"
                      inputName="ocupacion"
                      labelName="labelOcupacion"
                    />
                  </div>
                </Grid.Column>
              </Grid>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-two">
              <Grid centered columns={3} verticalAlign="middle">
                <Grid.Column width={4}>
                  <div>
                    <IconReligion />
                    <Select
                      placeholder="Religión"
                      labelName="labelReligion"
                      dataOptions={religion}
                      name="inputReligion"
                    />
                  </div>
                </Grid.Column>
                <Grid.Column width={4}>
                  <div>
                    <IconEstadoCivil />
                    <Select
                      placeholder="Estado civil"
                      labelName="labelEstadoCivil"
                      dataOptions={maritalStatus}
                      name="inputEstadoCivil"
                    />
                  </div>
                </Grid.Column>
                <Grid.Column width={4}>
                  <div>
                    <IconDonador />
                    <Select
                      placeholder="Donador de organos"
                      labelName="labelDonadorOrganos"
                      dataOptions={ifNot}
                      name="inputDonadorOrganos"
                    />
                  </div>
                </Grid.Column>
              </Grid>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-two">
              <Grid centered columns={16}>
                <Grid.Column width={16}>
                  <Grid.Row>
                    <h3>¿Te has vacunado en estos ultimos 6 meses?</h3>
                  </Grid.Row>
                </Grid.Column>
              </Grid>
            </div>
          </SwiperSlide>
        </Swiper>
      </Grid.Row>
    </Grid>
  )
}
