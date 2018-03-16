import { Calculator } from '../src/js/Calculator.js';

describe('Calculator', function() {

  let myCalculator;

  beforeEach(function() {
    myCalculator = new Calculator();
  })

  it('should convert age into milliseconds', function(){
    expect(myCalculator.yearsToMilli(1)).toEqual(31536000000);
  })
  it('should convert date into milliseconds', function() {
    expect(myCalculator.dateToMilli('1970-01-01')).toEqual(0);
    expect(myCalculator.dateToMilli('1971-01-01')).toEqual(31536000000);
  })
  it('should calculate the difference in milliseconds between two dates', function() {
    expect(myCalculator.difference('1970-01-01', '1971-01-01')).toEqual(myCalculator.yearsToMilli(1));
  })
  it('should convert Earth years to years on Mercury', function() {
    expect(myCalculator.yearsToMercury(1)).toEqual(4);
    expect(myCalculator.yearsToMercury(100)).toEqual(416);
  })
  it('should convert Earth years to years on Venus', function() {
    expect(myCalculator.yearsToVenus(1)).toEqual(1);
    expect(myCalculator.yearsToVenus(100)).toEqual(161);
  })
  it('should convert Earth years to years on Mars', function() {
    expect(myCalculator.yearsToMars(1)).toEqual(0);
    expect(myCalculator.yearsToMars(100)).toEqual(53);
  })
  it('should convert Earth years to years on Jupiter', function() {
    expect(myCalculator.yearsToJupiter(1)).toEqual(0);
    expect(myCalculator.yearsToJupiter(100)).toEqual(8);
  })
  it('should check whether person has surpassed life expectancy', function() {
    expect(myCalculator.checkLifeExpectancyOnEarth(72, "Earth")).toEqual(0);
    expect(myCalculator.checkLifeExpectancyOnEarth(300, "Mercury")).toEqual(0);
    expect(myCalculator.checkLifeExpectancyOnEarth(30, "Mars")).toEqual(15);
    expect(myCalculator.checkLifeExpectancyOnEarth(2, "Jupiter")).toEqual(48);
  })
  it('should check how many years person has remaining on other planet', function() {
    let e = myCalculator.checkLifeExpectancyOnEarth(10, "Earth");
    expect(myCalculator.checkYearsRemainingOnPlanet(e, "Mercury")).toEqual(258);
    expect(myCalculator.checkYearsRemainingOnPlanet(e, "Venus")).toEqual(100);
    expect(myCalculator.checkYearsRemainingOnPlanet(e, "Mars")).toEqual(32);
    expect(myCalculator.checkYearsRemainingOnPlanet(e, "Jupiter")).toEqual(5);
  })
})
