const url = "https://pokeapi.co/api/v2/pokemon/"
const div=document.getElementById('div')
const btn=document.getElementById('btn')
const btnDelete=document.getElementById('btn-delete')
const input=document.getElementById('input')





const traerPokemon = async () => {
    const id = input.value.toLocaleLowerCase();
    const response = await fetch(url + id);
    const data = await response.json();
    console.log(data)
    const html= 
    `
    <h1>${data.name}</h1>
    <img with="100px" src="${data.sprites.other.home.front_default}">
    <h1>Altura: ${data.height} m</h1>
    <h1>Peso: ${data.weight} kg </h1>
    
    
    `
    div.innerHTML=html

    return data
}


const traerPokemones = async () =>{
//guardo el fetch en una variable, espero el valor 
  const response=await fetch(url);
//guardo la data de la respuesta en una variable, espero el valor de la respuesta a json
  const data = await response.json();
//mapeo para conseguir los datos de los pokemones en un array de promesas
  const arrPromesas=data.results.map((poke)=>
    fetch(poke.url).then(res=>res.json())
);
//resuelvo cada promesa con un promise.all
const results=await Promise.all(arrPromesas)
console.log(results)
mapearPokemones(results)

return results
}


const mapearPokemones=(resultados)=>{
    const html = resultados
        .map(
            (pokemon)=>
            `
            <img with="100px" src="${data.sprites.other.home.front_default}">
            <h1>${data.name}</h1>
            
            `
        ).join('')
    div.innerHTML=html;

}


const deleteAll=()=>{
    div.innerHTML='';
}

btn.addEventListener('click', traerPokemon)
btnDelete.addEventListener('click', deleteAll)