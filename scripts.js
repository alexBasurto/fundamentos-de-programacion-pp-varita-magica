// Premium
// Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.
const colors = ['red', 'blue', 'green'];
const getRandom = (array) => {
    return array[Math.floor(Math.random()*array.length)];
}

console.log(getRandom(colors));
// // imprime 'red', 'blue' o 'green'
// Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta que hayas escogido de coolors.co en los apartados anteriores.
const coolors = ['#000814', '#001d3d', '#003566', '#ffc300', '#ffd60a']; //getRandom(coolors);
const gifs = ['./assets/magic-1.gif', './assets/magic-2.gif', './assets/magic-3.gif', './assets/magic-4.gif', './assets/magic-5.gif', './assets/magic-6.gif']; //getRandom(gifs)

// Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores.

// 1 Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
document.addEventListener('click', (e) => e.preventDefault());

// 2 Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:
// 2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.
const imagenes = document.getElementsByTagName('img');
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].src = getRandom(gifs);
}

// 2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
const parrafos = document.getElementsByTagName('p');
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = getRandom(coolors);
    parrafos[i].style.backgroundColor = getRandom(coolors);
}

// 2.3 Bloques de article o section: Cambia el color de fondo.
const articulos = document.getElementsByTagName('article');
const secciones = document.getElementsByTagName('section');
for (let i = 0; i < articulos.length; i++) {
    articulos[i].style.backgroundColor = getRandom(coolors);
}
for (let i = 0; i < secciones.length; i++) {
    secciones[i].style.backgroundColor = getRandom(coolors);
}

// Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.
// 3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.
for (let i = 0; i < imagenes.length; i++) {
    let backupImg = imagenes[i].src;
    imagenes[i].addEventListener('mouseover', (e) => {
        imagenes[i].src = getRandom(gifs);
    });
    imagenes[i].addEventListener('mouseout', (e) => {
        imagenes[i].src = backupImg;
    }
    );
}

// 3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
for (let i = 0; i < parrafos.length; i++) {
    let backupColor = parrafos[i].style.color;
    let backupBackgroundColor = parrafos[i].style.backgroundColor;
    parrafos[i].addEventListener('mouseover', (e) => {
        parrafos[i].style.color = getRandom(coolors);;
        parrafos[i].style.backgroundColor = getRandom(coolors);;
    });
    parrafos[i].addEventListener('mouseout', (e) => {
        parrafos[i].style.color = backupColor;
        parrafos[i].style.backgroundColor = backupBackgroundColor;
    });
}

// 3.3 Bloques de article o section: Color de fondo distinto al de párrafo.
for (let i = 0; i < articulos.length; i++) {
    let backupBackgroundColor = articulos[i].style.backgroundColor;
    articulos[i].addEventListener('mouseover', (e) => {
        articulos[i].style.backgroundColor = getRandom(coolors);;
    });
    articulos[i].addEventListener('mouseout', (e) => {
        articulos[i].style.backgroundColor = backupBackgroundColor;
    });
}

for (let i = 0; i < secciones.length; i++) {
    let backupBackgroundColor = secciones[i].style.backgroundColor;
    secciones[i].addEventListener('mouseover', (e) => {
        secciones[i].style.backgroundColor = getRandom(coolors);;
    });
    secciones[i].addEventListener('mouseout', (e) => {
        secciones[i].style.backgroundColor = backupBackgroundColor;
    });
}
