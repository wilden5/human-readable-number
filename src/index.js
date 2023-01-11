module.exports = function toReadable(number) {

    let sNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
        'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let decaNumbers = ['twent', 'thirt', 'fort', 'fift', 'sixt', 'sevent', 'eight', 'ninet'];

    let a = String(number).slice(1);

    if (number < 20) {
        return sNumbers[number];
    } else if (number % 10 === 0 && number < 100) {
        return decaNumbers[Math.floor(number / 10) - 2] + 'y';
    } else if (!number % 10 === 0 && number < 100) {
        return decaNumbers[Math.floor(number / 10) - 2] + 'y ' + sNumbers[number % 10];
    } else if (number >= 100 && number % 100 === 0) {
        return sNumbers[Math.floor(number / 100)] + " hundred";
    } else if (number >= 100 && parseInt(a) < 20) {
        let result = sNumbers[Math.floor(number / 100)] + " hundred " + sNumbers[a];
        return result.trim();
    } else if (a[0] === 0 && number >= 100) {
        let b = a[1];
        let result = sNumbers[Math.floor(number / 100)] + " hundred " + sNumbers[b];
        return result.trim();
    } else {
        let result = sNumbers[Math.floor(number / 100)] + " hundred " + decaNumbers[Math.floor(String(number).slice(1, 2)) - 2] + 'y ' + sNumbers[number % 10].replace("zero", "");
        return result.trim();
    }
}
