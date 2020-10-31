/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "semantic-ui-css/semantic.min.css"
import "./src/sass/index.scss"

const addScript = url => {
    const script = document.createElement("script")
    script.src = url
    script.async = true
    document.body.appendChild(script)
}

export const onClientEntry = () => {
    window.onload = () => {
        addScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyADghsRkchKPf-YpWCSXH1syuZia4Hjhtc&libraries=places")
    }
}
