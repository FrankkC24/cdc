import colors from 'colors';

import { inquirerMenu, pause, readInput, generateNumbers, validateSum, validateSub } from './helpers/index.js';

const main = async(): Promise<void> => {

    let opt: string;
    

    do {
        opt = await inquirerMenu();

        switch ( opt ) {
            case '1':
                let numberOne: number = generateNumbers(),
                    numberTwo: number = generateNumbers();

                console.log( `${ colors.cyan('¿Cúal es el resultado de la siguiente suma?')} Solo tienes ${ colors.yellow('1')} intento.`);
                console.log( colors.gray(`${ numberOne } + ${ numberTwo }`) );

                // Request and validate result
                const resultSum: string = await readInput('Resultado:');
                validateSum(numberOne, numberTwo, resultSum);
                break;
            case '2':

                let numberOnes: number = generateNumbers(),
                    numberTwos: number = generateNumbers();
                console.log( `${ colors.cyan('¿Cúal es el resultado de la siguiente resta?')} Solo tienes ${ colors.yellow('1')} intento.`);
                console.log( colors.gray(`${ numberOnes } - ${ numberTwos }`) );

                // Request and validate result
                const result: string = await readInput('Resultado:');
                validateSub(numberOnes, numberTwos, result);
                break;
        };


        if (opt !== '0') await pause();
    } while ( opt !== '0' );
};

main();