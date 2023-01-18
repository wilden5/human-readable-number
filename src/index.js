module.exports = function toReadable(number) {
    let smallNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
        'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let decaNumbers = ['twent', 'thirt', 'fort', 'fift', 'sixt', 'sevent', 'eight', 'ninet'];

    let numberString = number.toString();
    switch (true) {
        case (numberString < 20):
            return smallNumbers[numberString];
        case (numberString % 10 === 0 && numberString < 100):
            return decaNumbers[Math.floor(numberString / 10) - 2] + 'y';
        case (!numberString % 10 === 0 && numberString < 100):
            return decaNumbers[Math.floor(numberString / 10) - 2] + 'y ' + smallNumbers[numberString % 10];
        case (numberString >= 100 && numberString % 100 === 0):
            return smallNumbers[Math.floor(numberString / 100)] + " hundred";
        case (numberString >= 100 && numberString[1] === '0'):
            return smallNumbers[Math.floor(numberString / 100)] + " hundred " + smallNumbers[numberString % 10];
        case (numberString >= 100 && numberString.slice(1) < 20):
            return smallNumbers[Math.floor(numberString / 100)] + " hundred " + smallNumbers[numberString.slice(1)];
        case (numberString >= 100 && numberString.slice(1) < 100 && numberString % 10 === 0):
            return smallNumbers[Math.floor(numberString / 100)] + " hundred " + decaNumbers[Math.floor(numberString.slice(1) / 10) - 2] + 'y';
        case (numberString >= 100 && numberString.slice(1) < 100 && !numberString % 10 === 0):
            return smallNumbers[Math.floor(numberString / 100)] + " hundred " + decaNumbers[Math.floor(numberString.slice(1) / 10) - 2] + 'y ' + smallNumbers[numberString % 10];
        default:
            return 'error';
    }
}