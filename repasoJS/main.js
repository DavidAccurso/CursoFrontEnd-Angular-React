var nombre = "David";
var altura = 178;

var datos = document.getElementById('datos');
datos.innerHTML = `
    <h1>Hola soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <blockquote>Mi altura es: ${altura}</blockquote>
`;

if(altura > 190) {
    datos.innerHTML = `<h2>SOS MUY ALTO</h2>
        <hr/> ` + datos.innerHTML;
}

for(var i = 0; i >= 10; i++){
    console.log(i);
}

function MostrarMiNombre(){
    var concat = nombre + ' y mido: ' + altura;
    var datos = document.getElementById('datos');
    datos.innerHTML = concat;
}

MostrarMiNombre();