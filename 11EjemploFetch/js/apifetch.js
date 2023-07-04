//Una api  rest nos permite obtener info sobre diferenctes modelos que se encuentra en algun sitio web.
//PARA PODER REALIZAR LA POKEDEX TENEMOS QUE CONECTARNOS AL SERVICIO DE http://pokeapi.co/

const pokeApiUrl = "http://pokeapi.co/api/v2/";

//vamos a crear una funcion flecha que nos permita poder obtener los elementos de la api

const pokedex = () => {
    //necesitamos un objeto auxiliar que nos permita acceder a los  campos deseados de la API,
    //para asi mostrar las estadisticas, buscar, ver, etc que viene por parte del DOM
    const pokemonStatsElements = {
        hp: document.getElementById("pokemonStatHp"),
        attack: document.getElementById("pokemonStatAttack"),
        defense: document.getElementById("pokemonStatDefense"),
        specialAttack: document.getElementById("pokemonStatSpecialAttack"),
        specialDefense: document.getElementById("pokemonStatSpecialDefense"),
        speed: document.getElementById("pokemonStatSpeed")
    };

    //necesitamos un auxiliar que nos permita poder cambbiar la css deacuerdo al tipo de poqkemon
    let currentClassType = null;

    //necesitamos una cadena que nos muestre la imagen del tipo de pokemon
    const imagenTemple = "<img class= 'pokedisplay' src='{imgSrc}' alt='pokedisplay' />";

    //Necesitamos un objeto que guarde la ruta de las imagenes de apoyo como lo que son para la busqueda cuando no se encuentra el pokemon, la carga
    const images = {
        imgPokemonNotFound : "../img/404.png",
        imgLoading : "../img/loading.gif"
    };

    //Necesitamos un objeto que contenga las referencias de los elementos que se van a 
    //desplegar de acuerdo a la info del pokemon
    const containers = {
        imageContainer : document.getElementById("pokedisplat-container"),
        pokemonTypesContainer : document.getElementById("pokemonTypes"),
        pokemonNameElement : document.getElementById("pokemonNameResult"),
        pokemonAbilitiesElement : document.getElementById("pokemonAbilities"),
        pokemonMovesElement : document.getElementById("pokemonMoves"),
        pokemonIdElement : document.getElementById("pokemonId")
    };

    //Necesitamos un objeto que contenga las referencias de todos los botones
    const buttons = {
        all : Array.from(document.getElementById("btn")),
        search : document.getElementById("btnSearch"),
        next : document.getElementById("btnUp"),
        previous : document.getElementById("btnDown")
    };

    //Necesitamos la referencia al campo de texto que usa el usuario para escribir el nombre del pokemon
    const pokemonInput = document.getElementById("pokemonName");

    //Necesitamos una funcion que se encargue de obtener un tipo de pokemon y nos devuelva el resultado de la busqueda dentro de la API
    const processPokemonTypes = (pokemonData) => {
        let pokemonType = "";
        //vamos a utilizar la primera clase para dar color a los contenedores
        const firstClass = pokemonData.types[0].type.name;

        //Donde sale types, sale directamente de la pagina de pokeApi
        pokemonData.types.forEach((pokemonTypeData) =>{
            //vamos a crear una etiqueta de la clase por cada tipo de pokemon dentro del arreglo
            pokemonType += `<span class="pokemon-type ${pokemonTypeData.type.name} " >${pokemonTypeData.type.name}</span>`
        });

        //Vamos a quitar la clase previa del contenedor de habilidades y movimientos y actualizar pon la nueva
        if(currentClassType){
            containers.pokemonMovesElement.classList.remove(currentClassType);
            containers.pokemonAbilitiesElement.classList.remove(currentClassType);
        }
        //ahora se agrega la clase al contenedor de habilidades y movimientos
        containers.pokemonMovesElement.classList.add(firstClass);
        containers.pokemonAbilitiesElement.classList.add(firstClass);

        currentClassType = firstClass;

        //se agregan las etiquetas creadas
        containers.pokemonTypesContainer.innerHTML = pokemonType;
    };

    //vamos a hacer una funcion para obtener todas las estadisticas
    const processPokemonStats = (pokemonData) => {
        //vamos a utilizar el operador ternaro para realizar un encadenamiento del recorrido del arrego
        pokemonData.stats?.forEach((pokemonStatData)=>{
            //Vamos a evaluar el nombre de la estadistica y colocar su valor respectivo dentro del contenedor
            switch(pokemonStatData.stat.name){
                case "hp":
                    pokemonStatsElements.hp.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.hp.style = `background: linear-gradient(0deg, rgba(0,118,225,1) 
                    ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                    break;

                case "attack":
                    pokemonStatsElements.attack.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.attack.style = `background: linear-gradient(0deg, rgba(0,118,225,1) 
                    ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                    break;

                case "defense":
                    pokemonStatsElements.defense.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.defense.style = `background: linear-gradient(0deg, rgba(0,118,225,1) 
                    ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;                            
                    break;

                case "special-attack":
                    pokemonStatsElements.specialAttack.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.specialAttack.style = `background: linear-gradient(0deg, rgba(0,118,225,1) 
                    ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                    break;

                case "special-defense":
                    pokemonStatsElements.specialDefense.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.specialDefense.style = `background: linear-gradient(0deg, rgba(0,118,225,1) 
                    ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                    break;

                case "speed":
                    pokemonStatsElements.speed.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.speed.style = `background: linear-gradient(0deg, rgba(0,118,225,1) 
                    ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                    break;
            }
        });
    };

    //Necesitamos una funcion que haga lo mismo que las stats pero con los movimientos
    const processPokemonMoves = (pokemonData) => {
        let pokemonMovesContent = "";
        pokemonData.moves?.forEach((pokemonMove) => {
            pokemonMovesContent += `<li>${pokemonMove.move.name}</li>`;
        });
        containers.pokemonMovesElement.innerHTML = pokemonMovesContent;
    };

    const processPokemonAbilities = (pokemonData) => {
        let pokemonAbilitiesContent = "";
        pokemonData.abilities?.forEach((pokemonAbility) => {
            pokemonAbilitiesContent += `<li>${pokemonAbility.ability.name}</li>`;
        });
        containers.pokemonAbilitiesElement.innerHTML = pokemonAbilitiesContent;
    };

    //necesitamos una funcion para habilitar y deshabilitar los botones
    const setLoading = () => {
        containers.imageContainer.innerHTML = imagenTemple.replace("{imgSrc}", images.imgLoading);
        buttons.all.forEach(button => button.disabled = true);
    };

    const setLoadingComplete = () =>{
        buttons.all.forEach(button => checkDisabled(button));
    };

    //Vamos a crear una funcion para consultar los datos de la pokeapi, mediante el cual tenemos que obtener 
    //la info por medio del fetch
    //Fetch recibo la url para hacer la soliicitud del sitio, pero tambien puede cargar archivos de forma local (strorage)
    //La petición, de fetch devuelve una promesa, por eso se debe de atender mediante un try catch (then catch) y por otro 
    //lado nos devuelve un objeto JSON con la info solicitada en caso de error debemos atender a la peticion fallida

    const getPokemonData = async (pokemonName) => fetch(`${pokeApiUrl}pokemon/${pokemonName}`, {
        //Existen varios metodos de peticion HTTP que sirven, entre otras cosas para poder especificar el tipo de peticion, como
        //son: GET, POST, PUT, DELETE, PACH, etc

        method:'GET',
        
        //En las cabeceras de la peticion, se puede especificar el tipo de info que queremos utilizar, tambien aqui se suele colocar
        //la identidad del usuario (sesiones)

        headers : {
            'Content-Type' : 'aplication/jason'
        },
        //body : JSON.stringify(MiObjetoJson se usa cuando es una peticion que debe devolver un registro post put)
    })
        .then((res) => res.json())
        .catch((error) => ({requestFailed:true}));

    //validar si debe estar desabilitado o no los botones
    const checkDisabled = (button) => {
        button.disabled = button.id === "btnDown" && containers.pokemonIdElement.value <= 1;
    };

    
    
}