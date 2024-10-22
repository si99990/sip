const  express  =  require('express') 
const hbs = require('hbs');
require('dotenv').config();

const  app  =  express()
const port = process.env.PORT;


//si estamos usando la configuracion por defecto debemos crear la carpeta views
//


hbs.registerPartials(__dirname + '/views/parciales');


//le estás diciendo a Express que todas las vistas (o plantillas) que renderice utilicen Handlebars como motor de plantillas. 

app.set('view engine', 'hbs');

//servir contenido estratico
//al usar use quiere decir que es un midelware
/*Un middleware es una función que se ejecuta durante el ciclo 
de vida de una solicitud (request) antes de que se envíe una 
respuesta (response).*/

//la parte de la carpeta publica tiene prioridad sobre las rutas que se estan definiendo
// espes siempre intentar buscar el archivo html

/* app.use()
Se utiliza para registrar middleware. Un middleware es una función 
que se ejecuta en el proceso de una solicitud, antes de enviar una
respuesta. Se usa para hacer cosas como manejo de errores, 
autenticar usuarios, registrar logs, etc.*/

app.use(express.static('public'));


//aqui es donde vamos a renderizar esa vista 
app.get('/', (req, res) =>{
    //res es la respuesta y render es para renderizar la vista 
    //el segundo argumento
    res.render('home',{
        //estos argumentos son enviadnos al momento de renderizar la vista
        nombre: 'Diego Guante',
        titulo: 'Curso de node'
    });
})

app.get('/generic', (req, res) =>{
    //res es la respuesta y render es para renderizar la vista 
    //el segundo argumento
    res.render('generic',{
        //estos argumentos son enviadnos al momento de renderizar la vista
        nombre: 'Diego Guante',
        titulo: 'Curso de node'
    });
});


app.get('/elements', (req, res) =>{
    //res es la respuesta y render es para renderizar la vista 
    //el segundo argumento
    res.render('elements',{
        //estos argumentos son enviadnos al momento de renderizar la vista
        nombre: 'Diego Guante',
        titulo: 'Curso de node'
    });
});



app.get('/generic', (req, res) =>{
    res.sendFile(__dirname + '/public/generic.html')
})


app.get('/elements', (req, res) =>{
    res.sendFile(__dirname + '/public/elements.html')
})


app.get('/', (req, res) =>{
    res.send('Hola mundo')
})


app.get('/', (req, res) =>{
    res.send('Hola mundo')
})


//el comodin * es por si el usuuario coloca una ruta mal lo mandamos este mensaje
app.get('*', (req, res) =>{
    res.sendFile( __dirname + '/public/404.html')

    //este path o rura  __dirname es donde esta todo nuetro proyecto como la ruta
    //raiz 
    //ya despues solo entramos a la pcarpeta y al archivo 
})

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

/*res es el objeto de respuesta, mientras que res.send()
es un método específico de ese objeto que se utiliza para
enviar respuestas al cliente. Utilizar res.send() hace
que sea más fácil y directo manejar las respuestas en
tu aplicación Express.*/

/*1. res.send()
Este método se utiliza para enviar cualquier tipo de contenido
(texto, JSON, HTML, objetos, etc.) al cliente. El servidor
toma el dato que le pases y lo convierte en el formato
adecuado antes de enviarlo como respuesta HTTP. Aquí
algunos ejemplos:

res.sendFile()
Este método se usa para
enviar un archivo al
cliente directamente. 
En lugar de enviar texto o JSON, envía el archivo que indiques.
Esto es útil cuando necesitas que el cliente descargue o vea 
un archivo completo (como un PDF, imagen, o incluso una página
HTML desde el servidor).*/



/*Propósito: res.send() se utiliza para enviar una respuesta
al cliente. Puede enviar una cadena de texto, un objeto,
un buffer, o incluso un archivo, dependiendo de lo que
necesites.*/

