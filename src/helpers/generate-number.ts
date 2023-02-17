
// Generate alleatory number from 1 to 1000
export const generateNumbers = (): number => {
    let min = Math.ceil(1),
        max = Math.floor(1000);
    
    return Math.floor( Math.random() * (max - min) + min );
};
