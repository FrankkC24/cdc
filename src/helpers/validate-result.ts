import colors from 'colors';

// Sum result validator
export const validateSum = ( nOne: number, nTwo: number, result: string ) => {    
    let sum = nOne + nTwo,
        sumS = JSON.stringify(sum);

    if ( result === sumS ) {
        console.log(`${ colors.green('¡Correcto!') } El resultado de ${ colors.blue( `${nOne}` ) } + ${ colors.blue( `${nTwo}` ) } es: ${ colors.green(result) }`);
    } else {
        console.log(`${ colors.red('Incorrecto:')} ese ${ colors.magenta('no')} es el resultado de la suma.`);
    };
};

// Subtraction result validator
export const validateSub = ( nOne: number, nTwo: number, result: string ) => {    
    let sum = nOne - nTwo,
        subS = JSON.stringify(sum);

    if ( result === subS ) {
        console.log(`${ colors.green('¡Correcto!') } El resultado de ${ colors.blue( `${nOne}` ) } - ${ colors.blue( `${nTwo}` ) } es: ${ colors.green(result) }`);
    } else {
        console.log(`${ colors.red('Incorrecto:')} ese ${ colors.magenta('no')} es el resultado de la resta.`);
    };
};