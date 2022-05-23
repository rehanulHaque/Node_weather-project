const form = document.getElementById('myForm')
let loca = document.querySelector('.loca')
let temperature = document.querySelector('.temperature')
let feelslike = document.querySelector('.feelslike')

form.addEventListener("submit", e => {
    e.preventDefault()
    let searchTerm = e.target.elements.search.value
    fetchData(searchTerm)
    e.target.elements.search.value = ''
})

function fetchData(searchTerm){
    fetch(`/weather?address=${searchTerm}`).then(res => {
    return res.json()
})
.then(data => {
    console.log(data)
    if(data.error){
        loca.innerHTML = 'Location'
        temperature.innerHTML = 'Temperature'
        feelslike.innerHTML = 'Feels Like'
        let errorPara = document.createElement('p')
        errorPara.innerText = data.error
        document.querySelector('#myForm').appendChild(errorPara)
    }
    else{
        loca.innerText = data.location
    temperature.innerText = `${data.temperature} Degree Celcius`
    feelslike.innerText = `${data.feelslike} Degree Celcius`
    }
})
}