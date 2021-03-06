function nbYear(p0, percent, aug, p) {
  let years = 0;
  let population = p0;
  while(population < p){
    population = population + (population * percent/100) + aug;
    years++
  }
  return years;
}
console.log(nbYear(1500, 5, 100, 5000));

// given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.