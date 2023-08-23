
require('colors');

const mostrarMenu = () => {

    return new Promise((resolve) => {
        
        console.clear();
    
        console.log('================================================================'.green)
        console.log('   Seleccione una opción:'.green);
        console.log('================================================================\n'.green)
    
        console.log(`${ '1.'.green } Crear una tarea`.green);
        console.log(`${ '2.'.green } Listar tareas`.green);
        console.log(`${ '3.'.green } Listar tareas completadas`.green);
        console.log(`${ '4.'.green } Listar tareas pendientes`.green);
        console.log(`${ '5.'.green } Completar tarea(s)`.green);
        console.log(`${ '6.'.green } Borrar una tarea`.green);
        console.log(`${ '0.'.green } Salir \n`.green);
    
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readLine.question(' Seleccione una opción: ', (option) =>{

            readLine.close()
            resolve(option)
        })  
    })

}

const pausa = () => {

    return new Promise((resolve) => {

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readLine.question(`\n Presione ${'ENTER'.blue} para continuar \n`, (option)=>{
            readLine.close()
            resolve()
        })  

    })

}


module.exports = {
    mostrarMenu,
    pausa
};