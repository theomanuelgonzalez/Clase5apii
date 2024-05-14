// const url = "https://jsonplaceholder.typicode.com/albums"

// fetch(url)
// .then(res =>  res.json())
// .then(res => console.log(res))

// Creamos un array de objetos (por ejemplo, datos de estudiantes)
const estudiantes = [
    { id: 1, nombre: 'Juan', edad: 16 },
    { id: 2, nombre: 'María', edad: 17 },
    { id: 3, nombre: 'Carlos', edad: 16 },
    { id: 4, nombre: 'juana', edad: 19 }
    ];

const estudiantesMenores = estudiantes.filter(estudiantes => estudiantes.edad<16);
//EL FILTER ME DEVUELVE UN ARRAY NEVO PERO FILTRADO 
console.log(estudiantesMenores);

const encontrado = estudiante.find(estudiante.id === 2) // === significa que es es estricto o identico

console.log(encontrado);

estudiantes.map(estudiante => {
    if(estudiante.nombre === "maria")
        estudiante.edad = 21;
})

console.log(estudiantes);


const nuevoEstudiante =   { id: 5, nombre: 'martin ', edad: 15 }
estudiantes.push(nuevoEstudiante)

const Menores = estudiantes.filter(estudiante => estudiante.edad <= 18);
console.log(Menores);

const ordenados = estudiantes.sort((a,b) => a.edad < b.edad);
console.log(ordenados);