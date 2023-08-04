let urlBase = 'https://api.openweathermap.org/data/2.5/weather';
let apiKey = '3fd134f4c024a79ca62c8708bc3cdfa1';
let difKelvin = 273.15;

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad);
    }
});

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML ='';
    
    const ciudadNombre = data.name;
    const paisCodigo = data.sys.country;
    const temperatura = data.main.temp;
    const descripcion = data.weather[0].description;
    
    const ciudadTitulo = document.createElement("h2");
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisCodigo}`;

    const temperaturaInfo = document.createElement("p");
    temperaturaInfo.textContent = `Temperatura de ${Math.floor(temperatura-difKelvin)}°C`;

    const descripcionInfo = document.createElement("p");
    descripcionInfo.textContent = `Descripcion meteorológica es: ${descripcion}`;

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(descripcionInfo);
}

