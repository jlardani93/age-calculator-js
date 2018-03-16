export function Calculator(){}

Calculator.prototype.yearsToMilli = function(years){
  return new Date((1970+years).toString()).getTime();
}

//Date is written in the format '2018-09-24';

Calculator.prototype.dateToMilli = function(date){
  return new Date(date).getTime();
}

Calculator.prototype.difference = function(date1, date2){
  let milli1 = this.dateToMilli(date1);
  let milli2 = this.dateToMilli(date2);
  return Math.abs(milli2 - milli1);
}

Calculator.prototype.yearsToMercury = function(years){
  let milli = this.yearsToMilli(years)*(1/0.24);
  return Math.abs(new Date(milli).getYear()-70);
}

Calculator.prototype.yearsToVenus = function(years){
  let milli = this.yearsToMilli(years)*(1/0.62);
  return Math.abs(new Date(milli).getYear()-70);
}

Calculator.prototype.yearsToMars = function(years){
  let milli = this.yearsToMilli(years)*(1/1.88);
  return Math.abs(new Date(milli).getYear()-70);
}

Calculator.prototype.yearsToJupiter = function(years){
  let milli = this.yearsToMilli(years)*(1/11.86);
  return Math.abs(new Date(milli).getYear()-70);
}

Calculator.prototype.checkLifeExpectancyOnEarth = function(years, planet){

  let earthYears;

  switch ((planet).toLowerCase()) {
    case "mercury":
      earthYears = years * 0.24;
      break;
    case "venus":
      earthYears = years * 0.62;
      break;
    case "mars":
      earthYears = years * 1.88;
      break;
    case "jupiter":
      earthYears = years * 11.86;
      break;
    default:
      earthYears = years;
  }

  if (earthYears >= 72) return 0;
  return Math.floor(72 - earthYears);
}

Calculator.prototype.checkYearsRemainingOnPlanet = function(earthYearsRemaining, planet){

  let yearsRemaining;

  switch ((planet).toLowerCase()) {
    case "mercury":
      yearsRemaining = earthYearsRemaining / 0.24;
      break;
    case "venus":
      yearsRemaining = earthYearsRemaining / 0.62;
      break;
    case "mars":
      yearsRemaining = earthYearsRemaining / 1.88;
      break;
    case "jupiter":
      yearsRemaining = earthYearsRemaining / 11.86;
      break;
    default:
      yearsRemaining = earthYearsRemaining;
  }
  return Math.floor(yearsRemaining);
}
