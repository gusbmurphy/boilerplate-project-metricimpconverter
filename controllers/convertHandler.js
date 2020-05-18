/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {

  this.getNum = function (input) {
    var result;
    var regex = /(?<num>^\d+(.\d+)?)(?<denom>\/\d+)?/g;
    var regexResult = regex.exec(input);

    if (regexResult == null) {
      return "invalid number";
    }

    var { groups: { num, denom } } = regexResult;

    if (num == undefined) {
      result = 1; // if no number is provided, default to 1
    } else {
      result = parseFloat(num);
      if (denom) {
        result /= parseInt(denom); // just a note, we are not accounting for decimals in the denominator!
      }
    }
    return result;
  };

  this.getUnit = function (input) {
    var result;
    var regex = /[^\d\s.\/]+/g;
    result = regex.exec(input)[0];
    result = result.toLowerCase();

    switch (result) {
      case 'gal':
      case 'lbs':
      case 'mi':
      case 'l':
      case 'kg':
      case 'km':
        break;
      default:
        result = "invalid unit";
        break;
    }

    return result;
  };

  this.getReturnUnit = function (initUnit) {
    var result;

    // initUnit = String(initUnit).toLowerCase(); // so we don't worry about case issues
    switch (initUnit) {
      case 'gal':
        result = 'l';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'km':
        result = 'mi';
        break;
      default:
        break;
    }

    return result;
  };

  this.spellOutUnit = function (unit) {
    var result;

    // unit = String(unit).toLowerCase();
    switch (unit) {
      case 'gal':
        result = 'gallons';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'l':
        result = 'liters';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'km':
        result = 'kilometers';
        break;
      default:
        break;
    }

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    var result;

    switch (initUnit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      default:
        break;
    }

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };

}

module.exports = ConvertHandler;