import React from 'react'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete'

import Text from '../inputsCustom/Text'

export default function PlacesComplete() {
    const [address, setAddress] = React.useState("");
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null
    });


    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);

        setAddress(value);
        setCoordinates(latLng);
    }

    return (
        <div>
            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({ getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading }) => (
                        <div>
                            {/* <p>Latitude: {coordinates.lat}</p>
                            <p>Longitude: {coordinates.lng}</p> */}
                            <Text labelPlaceholder='Lugar de nacimiento' name='inputLN' labelName='labelLN' functionPlaces={{ ...getInputProps({}) }} ></Text>

                            <div className="places-complete" >

                                {loading ? <div>...loading</div> : null}

                                {suggestions.map(suggestion => {
                                    const style = suggestion.active
                                        ? { backgroundColor: '#2c2e81', cursor: 'pointer' }
                                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                    return <div key={suggestion.placeId}
                                        {...getSuggestionItemProps(suggestion, { style })}>{suggestion.description}</div>
                                })}
                            </div>
                        </div>
                    )}
            </PlacesAutocomplete>
        </div>
    )
}
