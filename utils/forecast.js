const request = require('request')
const weather = (adress, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=f9052622f38d158a29ac21c506798f97&query=${adress}&unit=f`;

  request({ url: url, json: true }, (error, {body}) => {
    if(error){
        callback('Unable to find', undefined)
    }else{
        callback(undefined, {
          location: body.request.query,
          temperature: body.current.temperature,
          feelslike: body.current.feelslike
        })
    }
  });
};


module.exports = weather