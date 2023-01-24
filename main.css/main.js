let imgRegion = document.getElementById("img");
let tituloRegion = document.getElementById("region");
let descripcionRegion = document.getElementById("atractivos");
let btnTextos = document.getElementById("btnTextos");



let Arica = ["/assets/Arica.jpg","Arica y Parinacota","Lo más representativo de la región es el Morro de Arica, cerro costero de cerca de 130 metros de altura desde el cual puede apreciarse una vista panorámica de la ciudad."];
let Tarapaca = ["/assets/Tarapaca.jpg","Tarapacá","Humberstone fue una de las tantas salitreras que funcionaron en el norte grande durante los siglos XIX y principios del XX. Hoy es un concurrido museo que recuerda el auge de la industria salitrera y su contraste con la dura vida de los trabajadores."];
let Antofagasta = ["/assets/Antofagasta.jfif","Antofagasta","Uno de sus principales atractivos es el Portal de Antofagasta, arco de roca formado por la erosión del mar"];
let Atacama = ["/assets/Atacama.jpg","Atacama","El Desierto florido es uno de los espectáculos naturales más hermosos de nuestro país, fenómeno natural que se da en el desierto más árido del mundo, producto de lluvias inusuales relacionados con El Niño."];
let Coquimbo = ["/assets/Coquimbo.jpg","Coquimbo","La región de Coquimbo se caracteriza por sus cielos prístinos que permiten la observación del cosmos. Cuenta con más de 10 observatorios que pueden ser visitados por los turistas nacionales y extranjeros."];
let Valparaiso = ["/assets/Valparaiso.jpg","Valparaíso","La región de Valparaíso cuenta con variados paisajes, pero uno de los íconos que representan a la región son los ascensores de la comuna de Valparaíso, los que constituyen un reto de la ingeniería del siglo XIX para mejorar el transporte hacia los cerros de la ciudad."];
let Metropolitana = ["/assets/Metropolitana.jfif","Metropolitana de Santiago","El casco histórico de la región Metropolitana es un atractivo tanto para turistas nacionales como extranjeros.  Es el kilómetro 0 de la ciudad y cuyo núcleo es la Plaza de Armas en torno al cual existen varios edificios históricos como el Museo de Histórico Nacional, Correos de Chile, Municipalidad de Santiago, entre otros."];
let Ohiggins = ["/assets/Ohiggins.jpg","O Higgins","USewell fue un pueblo minero construido en 1904 y fue declarado Patrimonio de la Humanidad por la Unesco en el 2006 debido a su valor histórico y cultural. Se encuentra enclavado en la cordillera de Los Andes a 60 kilómetros de Rancagua."];
let Maule = ["/assets/Maule.jfif","Maule","La Cascada Invertida es un fenómeno natural que se genera en las cercanías de la ciudad de Talca, en la Región del Maule. Como desafiando a la gravedad y alabando al viento, esta caída de agua se invierte gracias a las corrientes de aire y en vez de estrellar toda su masa en el río Maule se va esfumando hacia arriba, dando vuelta, literalmente, su camino."];
let Nuble = ["/assets/Ñuble.jfif","Ñuble","Uno de los panoramas más conocidos e imprescindibles de la nueva Región de Ñuble son las Termas de Chillán, el resort de montaña que está a más de 60 km de la ahora capital regional y rodeado de un bosque milenario."];
let Biobio = ["/assets/BioBio.jpg","Bio Bio","Uno de sus principales atractivos es el Portal de Antofagasta"];
let Araucania = ["/assets/Araucania.jpg","Araucanía","Las reservas de la naturaleza, como el Parque Nacional Huerquehue y el Parque Nacional Conguillío, protegen los ecosistemas con lagos, ríos y bosques de araucarias."];
let Rios = ["/assets/LosRios.jfif","LosRíos", "Se caracteriza por sus volcanes, ríos, lagos, paisajes agrícolas y forestales. Además es conocida por la presencia de un bosque húmedo templado, popularmente llamado Selva Valdiviana, que se puede disfrutar al momento de visitar cualquiera de las áreas protegidas de la región."];
let Lagos = ["/assets/Palafitos_de_Castro.jpg","Los Lagos","Los destinos más populares de la Región de Los Lagos son el lago Llanquihue-lago Todos los Santos, Puerto Montt y alrededores, y el arconsole.log(regiones);chipiélago de Chiloé, el cual se caracteriza por sus palafitos."]
let Aysen = ["/assets/Aysen.jpg","Aysén","La mayoría de los numerosos atractivos naturales que posee no han sido desarrollados, entre los que se cuentan Campos de Hielo e Islas vírgenes."];
let Magallanes = ["/assets/Antartica.webp","Magallanes y Antártica Chilena","Último destino del sur del planeta, el Territorio Antártico Chileno es uno de los más interesantes al cual se puede acceder por vías acuáticas y aéreas."];

let regiones = [Arica, Tarapaca, Antofagasta, Atacama, Coquimbo, Valparaiso, Metropolitana,Ohiggins,Maule, Nuble,Biobio,Araucania,Rios,Lagos,Aysen,Magallanes];


function mostrarMensaje(opcion) {
    document.querySelector(".card").hidden=false;

    // PRIMERA CONSTRUCCIÓN DE CÓDICO CON FUNCIÓN SWITCH
//     switch (opcion) {
//   case (0):
//   document.getElementById("img").src="/assets/Arica.jpg";
//   document.getElementById("region").innerHTML = "Arica y Parinacota";
//   document.getElementById("atractivos").innerHTML = "Lo más representativo de la región es el Morro de Arica, cerro costero de cerca de 130 metros de altura desde el cual puede apreciarse una vista panorámica de la ciudad";
//     break;

//     case (1):
//   document.getElementById("img").src="/assets/Tarapaca.jpg";
//   document.getElementById("region").innerHTML = "Tarapacá";
//   document.getElementById("atractivos").innerHTML = "Humberstone fue una de las tantas salitreras que funcionaron en el norte grande durante los siglos XIX y principios del XX. Hoy es un concurrido museo que recuerda el auge de la industria salitrera y su contraste con la dura vida de los trabajadores";
//     break;

//     case (2):
//   document.getElementById("img").src="/assets/Antofagasta.jfif";
//   document.getElementById("region").innerHTML = "Antofagasta";
//   document.getElementById("atractivos").innerHTML = "Uno de sus principales atractivos es el Portal de Antofagasta, arco de roca formado por la erosión del mar";
//     break;

//     case (3):
//   document.getElementById("img").src="/assets/Atacama.jpg";
//   document.getElementById("region").innerHTML = "Atacama";
//   document.getElementById("atractivos").innerHTML = "El Desierto florido es uno de los espectáculos naturales más hermosos de nuestro país, fenómeno natural que se da en el desierto más árido del mundo, producto de lluvias inusuales relacionados con El Niño.";
//     break;

//     case (4):
//   document.getElementById("img").src="/assets/Coquimbo.jpg";
//   document.getElementById("region").innerHTML = "Coquimbo";
//   document.getElementById("atractivos").innerHTML = "La región de Coquimbo se caracteriza por sus cielos prístinos que permiten la observación del cosmos. Cuenta con más de 10 observatorios que pueden ser visitados por los turistas nacionales y extranjeros";
//     break;

//     case (5):
//   document.getElementById("img").src="/assets/Valparaiso.jpg";
//   document.getElementById("region").innerHTML = "Valparaíso";
//   document.getElementById("atractivos").innerHTML = "La región de Valparaíso cuenta con variados paisajes, pero uno de los íconos que representan a la región son los ascensores de la comuna de Valparaíso, los que constituyen un reto de la ingeniería del siglo XIX para mejorar el transporte hacia los cerros de la ciudad.";
//     break;

//     case (6):
//   document.getElementById("img").src="/assets/Metropolitana.jfif";
//   document.getElementById("region").innerHTML = "Metropolitana de Santiago";
//   document.getElementById("atractivos").innerHTML = "El casco histórico de la región Metropolitana es un atractivo tanto para turistas nacionales como extranjeros.  Es el kilómetro 0 de la ciudad y cuyo núcleo es la Plaza de Armas en torno al cual existen varios edificios históricos como el Museo de Histórico Nacional, Correos de Chile, Municipalidad de Santiago, entre otros. ";
//     break;

//     case (7):
//   document.getElementById("img").src="/assets/Ohiggins.jpg";
//   document.getElementById("region").innerHTML = "O´Higgins";
//   document.getElementById("atractivos").innerHTML = "USewell fue un pueblo minero construido en 1904 y fue declarado Patrimonio de la Humanidad por la Unesco en el 2006 debido a su valor histórico y cultural. Se encuentra enclavado en la cordillera de Los Andes a 60 kilómetros de Rancagua.";
//     break;

//     case (8):
//   document.getElementById("img").src="/assets/Maule.jfif";
//   document.getElementById("region").innerHTML = "Maule";
//   document.getElementById("atractivos").innerHTML = "La Cascada Invertida es un fenómeno natural que se genera en las cercanías de la ciudad de Talca, en la Región del Maule. Como desafiando a la gravedad y alabando al viento, esta caída de agua se invierte gracias a las corrientes de aire y en vez de estrellar toda su masa en el río Maule se va esfumando hacia arriba, dando vuelta, literalmente, su camino.";
//     break;

//     case (9):
//   document.getElementById("img").src="/assets/Ñuble.jfif";
//   document.getElementById("region").innerHTML = "Ñuble";
//   document.getElementById("atractivos").innerHTML = "Uno de los panoramas más conocidos e imprescindibles de la nueva Región de Ñuble son las Termas de Chillán, el resort de montaña que está a más de 60 km de la ahora capital regional y rodeado de un bosque milenario.";
//     break;

//     case (10):
//   document.getElementById("img").src="/assets/BioBio.jpg";
//   document.getElementById("region").innerHTML = "Bio Bio";
//   document.getElementById("atractivos").innerHTML = "Uno de sus principales atractivos es el Portal de Antofagasta";
//     break;

//     case (11):
//   document.getElementById("img").src="/assets/Araucania.jpg";
//   document.getElementById("region").innerHTML = "Araucanía";
//   document.getElementById("atractivos").innerHTML = "Uno de sus principales atractivos es el Portal de Antofagasta";
//     break;

//     case (12):
//   document.getElementById("img").src="/assets/LosRios.jfif";
//   document.getElementById("region").innerHTML = "Los Ríos";
//   document.getElementById("atractivos").innerHTML = "Uno de sus principales atractivos es el Portal de Antofagasta";
//     break;

//     case (13):
//   document.getElementById("img").src="/assets/Palafitos_de_Castro.jpg";
//   document.getElementById("region").innerHTML = "Los Lagos";
//   document.getElementById("atractivos").innerHTML = "Los destinos más populares de la Región de Los Lagos son el lago Llanquihue-lago Todos los Santos, Puerto Montt y alrededores, y el archipiélago de Chiloé, el cual se caracteriza por sus palafitos.";
//     break;

//     case (14):
//   document.getElementById("img").src="/assets/Aysen.jpg";
//   document.getElementById("region").innerHTML = "Aysén";
//   document.getElementById("atractivos").innerHTML = "La mayoría de los numerosos atractivos naturales que posee no han sido desarrollados, entre los que se cuentan Campos de Hielo e Islas vírgenes.";
//     break;

//     case (15):
//   document.getElementById("img").src="/assets/Antartica.webp";
//   document.getElementById("region").innerHTML = "Magallanes y Antártica Chilena";
//   document.getElementById("atractivos").innerHTML = "Último destino del sur del planeta, el Territorio Antártico Chileno es uno de los más interesantes al cual se puede acceder por vías acuáticas y aéreas.";
//     break;

// }

imgRegion.src = regiones[opcion][0];
tituloRegion.value = regiones[opcion][1];
descripcionRegion.value = regiones[opcion][2];
btnTextos.value = opcion;

}


let modificarTextos = function modificarTextos(btn){

    let opcion = btn.value * 1;
    
    regiones[opcion][1] = document.getElementById("region").value;
    regiones[opcion][2] = document.getElementById("atractivos").value;
}

function mostrarImagen(){
  
    var preview = document.querySelector('#img');
    var file    = document.querySelector('input[type=file]').files[0];
    
    var reader = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;
    }
  
    if (file) {
      reader.readAsDataURL(file);
      preview.src = imgRegion.src;
      // preview.style.width="300px";
    } else {
      preview.src = "";
    }
  }
  












