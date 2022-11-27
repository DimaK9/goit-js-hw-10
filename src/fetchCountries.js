export function fetchCountries(name) {
    fetch('https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,language').
    then(response => {
        if(!response.ok){
            throw new Error(response.statusText)
        }
        return response.json();
    })
}