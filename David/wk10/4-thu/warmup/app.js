



var numberConversion = ["I" = 1, "V" = 5, "X" = 10, "L" = 50, "C" = 100, "D" = 500, "M" = 1000]

function convertToRomanNumeral(num) {
    var latin = '';
    var numberMatch = [1000, 900, 500, 100, 90, 50, 40, 10, 5, 1];
    var romanNumeral = ["M", "CM", "D", "C", "XC", "L", "XL", "X", "V", "I"];
    for (var i = 0; i<=numberMatch.length; i++){
        while (num % numberMatch[i] < num) {
            latin += romanNumeral[i];
            num -= numberMatch[i];

        }
    }
    return latin
}
