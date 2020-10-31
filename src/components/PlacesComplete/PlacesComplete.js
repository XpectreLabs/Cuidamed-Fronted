import React from 'react'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete'

import Text from '../inputsCustom/Text'

export default function PlacesComplete(props) {

    const { labelPlaceholder, inputName, labelName } = props;
    console.log(props);
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
                            <Text labelPlaceholder={labelPlaceholder} name={inputName} labelName={labelName} functionPlaces={{ ...getInputProps({}) }} />
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

                            {/* <div className="container-place-autocomplete">
                                <div className="labelText" id={labelName} >
                                    <label htmlFor={inputName} className="ui label" >
                                        {labelPlaceholder}
                                    </label>
                                </div>
                                <div className="ui input">
                                    <input
                                        id={inputName}
                                        type="text"
                                        list={'options' + inputName}
                                        {...getInputProps({})}
                                        onKeyUp={handlePlaceAutocomplete} />
                                </div>
                                <datalist className="places-complete" id={'options' + inputName} >

                                    {loading ? <div>...loading</div> : null}

                                    {suggestions.map(suggestion => {
                                        const style = suggestion.active
                                            ? { backgroundColor: '#2c2e81', cursor: 'pointer' }
                                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                        return <option key={suggestion.placeId}
                                            {...getSuggestionItemProps(suggestion, { style })}>{suggestion.description}</option>
                                    })}
                                </datalist>
                            </div> */}
                        </div>
                    )}
            </PlacesAutocomplete>
        </div>
    )
}
