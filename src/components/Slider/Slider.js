import React, { useState, useEffect } from "react"
import { navigate } from 'gatsby'

import Moment from 'react-moment';
import 'moment/locale/es'
import { Grid, Container, Icon, Button } from "semantic-ui-react"
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
    IconVacuna,
} from "../../images/icons/icons"

import { bloodType, gradesStudy, religion, maritalStatus, ifNot } from "./data"

import Date from "../inputsCustom/Date"
import { SelectCustom } from "../inputsCustom/Select/Select"
import { CustomInput } from "../inputsCustom/CustomInput"

//Placess
import PlacesComplete from "../PlacesComplete"

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, HashNavigation } from "swiper"

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
    const [selectSex, setSelectSex] = useState(<IconMen />);
    const [formValues, setFormValues] = useState({
        sex: "",
        birthDate: "",
        placeBirth: "",
        placeLived: "",
        height: "",
        weight: "",
        typeBlood: "",
        studyGrade: "",
        healthInsurance: "",
        employment: "",
        religionSelected: "",
        stateMarital: "",
        organDonor: "",
        vacunado: "",

    })

    const {
        sex,
        birthDate,
        placeBirth,
        placeLived,
        height,
        weight,
        typeBlood,
        studyGrade,
        healthInsurance,
        employment,
        religionSelected,
        stateMarital,
        organDonor,
        vacunado,
    } = formValues

    var stringVacunas = "";
    const infoBasicDescriptionIcons = [
        {
            iconFirst: <IconFechaNacimiento />,
            dataFirst: <Moment date={birthDate} locale="es" format="LL"/>,
            labelFirst: "Fecha de nacimiento",
            iconSecond: <IconMundo />,
            dataSecond: placeBirth,
            labelSecond: "Lugar de nacimiento"

        },
        {
            iconFirst: <IconMapa />,
            dataFirst: placeLived,
            labelFirst: "Lugar de residencia",
            iconSecond: <IconAltura />,
            dataSecond: height,
            labelSecond: "Altura (cm)"
        },
        {
            iconFirst: <IconPeso />,
            dataFirst: weight,
            labelFirst: "Peso (kg)",
            iconSecond: <IconGotaSangre />,
            dataSecond: typeBlood,
            labelSecond: "Tipo de sangre"
        },
        ,
        {
            iconFirst: <IconOcupacion />,
            dataFirst: employment,
            labelFirst: "Ocupación",
            iconSecond: <IconGradoEstudio />,
            dataSecond: studyGrade,
            labelSecond: "Grado de estudios"
        },
        ,
        {
            iconFirst: <IconDonador />,
            dataFirst: organDonor,
            labelFirst: "Donador de organos",
            iconSecond: <IconEstadoCivil />,
            dataSecond: stateMarital,
            labelSecond: "Estado civil"
        },
        {
            iconFirst: <IconReligion />,
            dataFirst: religionSelected,
            labelFirst: "Religión",
            iconSecond: <IconSeguro />,
            dataSecond: healthInsurance,
            labelSecond: "Seguro Medico"
        },
        {
            iconFirst: <IconVacuna />,
            dataFirst: vacunado,
            labelFirst: "Vacunas los últimos 6 meses",
            iconSecond: selectSex,
            dataSecond: sex,
            labelSecond: "Sexo"

        }
        // ,
        // ,
        // IconVacuna,
    ]

    useEffect(() => {
        console.log(formValues);
        switch (activeIndex) {
            case 0:
                if (sex != "" && sex != undefined) {
                    setIsValidIndex(true)
                    if (sex === "F") {
                        setSelectSex(<IconWomen />)
                    }
                }
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
            case 3:
                if (studyGrade !== "" && healthInsurance !== "" && employment !== "")
                    setIsValidIndex(true)
                else setIsValidIndex(false)
                break
            case 4:
                if (religionSelected !== "" && stateMarital !== "" && organDonor !== "")
                    setIsValidIndex(true)
                else setIsValidIndex(false)
                break
            case 5:
                if (vacunado !== "") {
                    setIsValidIndex(true)
                }
                else setIsValidIndex(false)
                break
            case 6:
                setTitleInfoBasic(true);
                console.log(vacunado);
                if (vacunado === false) {
                    setFormValues({ ...formValues, vacunado: "N" })
                } else if (vacunado === true) {
                    let vacunasString = "Sí, ";
                    totalVacunas.map((vacuna) => {
                        vacunasString += " " + vacuna;
                    })
                    setFormValues({ ...formValues, vacunado: vacunasString })
                }
                break
            default:
                setTitleInfoBasic(false);
                break
        }
    }, [activeIndex, formValues])

    const [titleInfoBasic, setTitleInfoBasic] = useState(false)
    

    const saveAndContinue = e => {
        e.preventDefault()
        navigate('/historial-medico');

    }

    const [vacunasNumber, setvacunasNumber] = useState();
    const vacunasQuantity = [];
    const [vacunasInput, setVacunasInput] = useState();
    const [totalVacunas, setTotalVacunas] = useState([]);


    const handleInputsVacunas = (e) => {
        if (e > 0 && e < 4) {
            for (let index = 0; index < e; index++) {
                vacunasQuantity.push(<Grid.Row className="vacunas__title-description">
                    <CustomInput
                        placeholder="Nombre"
                        areYouInLogin={true}
                        type="text"

                        setValue={e => { }}
                        onblur={e => setTotalVacunas(totalVacunas => [...totalVacunas, e])}
                    />
                </Grid.Row>)
            }
            setVacunasInput(vacunasQuantity);

        }
        else {
            setVacunasInput([]);
            vacunasQuantity.length = 0;
        }
    }



    const isVacunado = (bool) => {
        if (bool) {
            setFormValues({ ...formValues, vacunado: true })
            setvacunasNumber(<>
                <Grid.Row className="vacunas__title-description">
                    <CustomInput
                        placeholder="¿Cuantas fueron?"
                        areYouInLogin={true}
                        type="number"
                        setValue={e => handleInputsVacunas(e)}
                    />
                </Grid.Row>
            </>)
        } else {
            setFormValues({ ...formValues, vacunado: false })
            setvacunasNumber("")
            setVacunasInput([]);
            vacunasQuantity.length = 0;
        }
    }
    return (
        <Grid centered className="slider">
            <Grid.Row>
                <h1 className={`title ${titleInfoBasic ? 'hidden-title' : ''}`}>Información Básica</h1>
            </Grid.Row>
            {/* <Grid.Row className="title">
            </Grid.Row > */}

            <Grid.Row>
            {/* <h1 className={`title ${titleInfoBasic ? 'hidden-title' : ''}`}>Información Básica</h1> */}
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    // allowSlideNext={isValidIndex}
                    // allowSlidePrev={isValidIndex}
                    pagination={{ clickable: false }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={swiper => console.log(swiper)}
                    onSlideChange={e => setActiveIndex(e.activeIndex)}
                    className="slider-content"
                    simulateTouch={false}
                >
                    
                    <SwiperSlide data-hash="slide1">
                        <Container verticalAlign="middle" >
                            {/* <Grid.Row>
                                <h2>Sexo</h2>
                            </Grid.Row> */}
                            <Grid verticalAlign="middle" name="sex">
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
                    <SwiperSlide data-hash="slide2">
                        <div className="slider-two">
                            <Grid centered columns={3} verticalAlign="middle">
                                <Grid.Column width={4}>
                                    <div>
                                        <IconFechaNacimiento/>
                                        <Date className="justify-content"
                                        placeholder="Fecha de nacimiento"
                                        setValue={e =>
                                            setFormValues({ ...formValues, birthDate: e })
                                        }
                                        />
                                        {/* <Text className="justify-content" labelPlaceholder="Fecha de nacimiento" name="fechaNacimiento" labelName="labelFechaNacimiento" /> */}
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <div>
                                        <IconMundo />
                                        <PlacesComplete
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
                    <SwiperSlide data-hash="slide3">
                        <div className="slider-two">
                            <Grid centered columns={3} verticalAlign="middle">
                                <Grid.Column width={4}>
                                    <div>
                                        <IconAltura />
                                        <CustomInput

                                            placeholder="Altura (cm)"
                                            type="number"
                                            setValue={e =>
                                                setFormValues({ ...formValues, height: e })
                                            }
                                        />
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <div>
                                        <IconPeso />
                                        <CustomInput
                                            placeholder="Peso (kg)"
                                            type="number"
                                            setValue={e =>
                                                setFormValues({ ...formValues, weight: e })
                                            }
                                        />
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <div>
                                        <IconGotaSangre />

                                        <SelectCustom
                                            placeholder="Tipo de sangre"
                                            dataOptions={bloodType}
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
                                        <SelectCustom
                                            placeholder="Grado de estudios"
                                            labelName="grado"
                                            dataOptions={gradesStudy}
                                            name="gradoEstudio"
                                            setValue={e =>
                                                setFormValues({ ...formValues, studyGrade: e })
                                            }
                                        />
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <div>
                                        <IconSeguro />
                                        <CustomInput
                                            placeholder="Seguro médico"
                                            setValue={e =>
                                                setFormValues({ ...formValues, healthInsurance: e })
                                            }
                                        />
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <div>
                                        <IconOcupacion />
                                        <CustomInput
                                            placeholder="Ocupación"
                                            setValue={e =>
                                                setFormValues({ ...formValues, employment: e })
                                            }
                                        />
                                    </div>
                                </Grid.Column>
                            </Grid>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide4">
                        <div className="slider-two">
                            <Grid centered columns={3} verticalAlign="middle">
                                <Grid.Column width={4}>
                                    <div>
                                        <IconReligion />
                                        <SelectCustom
                                            placeholder="Religión"
                                            dataOptions={religion}
                                            setValue={e =>
                                                setFormValues({ ...formValues, religionSelected: e })
                                            }
                                        />
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <div>
                                        <IconEstadoCivil />
                                        <SelectCustom
                                            placeholder="Estado civil"
                                            dataOptions={maritalStatus}
                                            setValue={e =>
                                                setFormValues({ ...formValues, stateMarital: e })
                                            }
                                        />
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <div>
                                        <IconDonador />
                                        <SelectCustom
                                            placeholder="Donador de organos"
                                            dataOptions={ifNot}
                                            setValue={e =>
                                                setFormValues({ ...formValues, organDonor: e })
                                            }
                                        />
                                    </div>
                                </Grid.Column>
                            </Grid>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide5">
                        <div className="vacunas">
                            <Grid centered columns={16}>
                                <Grid.Column computer={6} tablet={12} mobile={16} >
                                    <Grid.Row className="vacunas__title" width={50}>
                                        <h3>¿Te has vacunado en estos ultimos 6 meses?</h3>
                                    </Grid.Row>
                                    <Grid.Row className="vacunas__center">
                                        <IconVacuna />
                                    </Grid.Row>
                                    <Grid.Row className="vacunas__center" >
                                        <div className="optionYesOrNot">
                                            <input
                                                id="vacunaYes"
                                                type="radio"
                                                name="vacuna"
                                                readOnly=""
                                                tabIndex="0"
                                                onClick={() => isVacunado(true)}
                                            />
                                            <label
                                                htmlFor="vacunaYes">
                                                Sí
                                            </label>
                                        </div>
                                        <div className="optionYesOrNot">
                                            <input id="vacunaNo"
                                                type="radio"
                                                name="vacuna"
                                                readOnly=""
                                                tabIndex="0"
                                                onClick={() => isVacunado(false)} />
                                            <label
                                                htmlFor="vacunaNo">
                                                No</label>
                                        </div>

                                    </Grid.Row>
                                    {vacunasNumber}
                                    {vacunasInput}

                                </Grid.Column>

                            </Grid>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ 'position': 'relative' }} data-hash="slide6">
                        <div className="info-basic">
                            <Grid centered columns={16}>
                            <h1 className={`title ${titleInfoBasic ? '' : 'hidden-title'}`}>Información Básica</h1>
                            {/* <h1 className="title">Información Básica</h1> */}
                                <Grid.Column computer={14} tablet={12} mobile={16}  >
                                    {infoBasicDescriptionIcons.map((value, index) => (
                                        <Grid.Row className="description" key={index}>
                                            <div className="description-container">
                                                <div className="icon">
                                                    {value.iconFirst}
                                                </div>
                                                <div className="data">
                                                    <label>{value.labelFirst} <Icon name="pencil alternate" size="small" /></label>
                                                    <span>{value.dataFirst}</span>
                                                </div>
                                            </div>
                                            <div className="description-container">
                                                <div className="icon">
                                                    {value.iconSecond}
                                                </div>
                                                <div className="data">
                                                    <label>{value.labelSecond} <Icon name="pencil alternate" size="small" /></label>
                                                    <span>{value.dataSecond}</span>
                                                </div>
                                            </div>
                                        </Grid.Row>
                                    ))}
                                    <Grid.Row >
                                        <Button className="button-info-basic" onClick={saveAndContinue}>Guardar y Continuar</Button>
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
