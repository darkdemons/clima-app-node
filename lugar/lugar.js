const axios = require('axios');


const getLugarLatLng = async(direccion) => {
    let encondeURL = encodeURI(direccion)

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encondeURL}CA&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`)
        return;
    }


    let locations = resp.data.results[0]
    let coors = locations.geometry.location



    return {
        direccion: locations.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}