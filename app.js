const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima!',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `el clima de la ciudad de ${coors.direccion} es de ${ temp } °C`

    } catch (e) {
        return `No se pudo determinar el clima en la ciudad de ${ direccion }`
    }



}

getInfo(argv.direccion)
    .then(msg => console.log(msg))
    .catch(e => console.log(e))