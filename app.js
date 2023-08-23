require('colors')


const { 
        inquirerMenu, 
        pausa,
        leerInput
    } = require('./helpers/inquirer');

const Tareas = require('./models/tareas');

console.clear();

const main = async () => {

    let option = ''
    const tareas = new Tareas();

    do {
        // imprimir el menú
        option = await inquirerMenu()
        
        switch ( option ) {
            case '1':
                const desc = await leerInput('Descipción ')
                tareas.crearTarea( desc )
            break;
            case '2':
                console.log(tareas.listadoArr)
            break;
          
        }

        if( option !== '0' )
            await pausa()

    } while ( option !== '0' );

}



main();