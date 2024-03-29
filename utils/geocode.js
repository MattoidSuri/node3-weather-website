const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=1&access_token=pk.eyJ1IjoicHJhZG9zaHYiLCJhIjoiY2sxOWp3M2R0MDI5cjNocXBqNmd2dmNicCJ9.7uVM-j0Coj-e70UUbL7tyA'

    request({ url, json:true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.features.length === 0) {
            console.log('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, 
                { 
                    latitude: body.features[0].center[1], 
                    longitude: body.features[0].center[0],
                    location: body.features[0].place_name
                })
        }
    })
}

module.exports = geocode