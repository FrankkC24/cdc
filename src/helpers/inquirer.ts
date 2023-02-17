import inquirer, { InputQuestion, InputQuestionOptions, Question, QuestionCollection } from 'inquirer';
import colors from 'colors';

// Console interactive menu options
export const questions: QuestionCollection = [
    {
        type: 'list',
        name: 'option',
        message: 'Opciones:',
        choices: [
            {
                value: '1',
                name: `${ colors.magenta('1.') } Sumas`,
            },
            {
                value: '2',
                name: `${ colors.magenta('2.') } Restas`,
            },
            {
                value: '0',
                name: `${ colors.magenta('0.') } Salir`
            },
        ],
    },
];

// Initial menu
export const inquirerMenu = async(): Promise<string> => {
    console.clear();
    console.log(`${ colors.green('===========================') }`);
    console.log(`${ colors.cyan('   Seleccione una opción') }`);
    console.log(`${ colors.green('===========================') }`);

    const { option } = await inquirer.prompt(questions);

    return option; 
};

// Pause helper
export const pause = async(): Promise<void> => {
    const question: QuestionCollection = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ colors.blue('ENTER') } para continuar`,
        },
    ];

    await inquirer.prompt(question);
};

// Read input helper
export const readInput = async( message: string ): Promise<string> => {
    const question: QuestionCollection = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value: string ): string | boolean {
                if ( value.length === 0 ) {
                    return `${ colors.yellow('Por favor, ingrese un valor') }`;
                };
                return true;
            },
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
};

// 