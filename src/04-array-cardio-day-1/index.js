const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

const people = [
  'Beck, Glenn',
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Benchley, Robert',
  'Benenson, Peter',
  'Ben-Gurion, David',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'Berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black, Elk',
  'Blair, Robert',
  'Blair, Tony',
  'Blake, William',
];

const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.log("1. Inventors born between 1500's");
console.table(
  inventors.filter((inventor) => inventor.year >= 1500 && inventor.year <= 1600)
);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
console.log('2. Array with inventors first and last name:');
console.table(
  inventors.map((inventor) => `${inventor.first} ${inventor.last}`)
);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.log('3. Inventors sorted by birthdate (oldest to youngest):');
console.table(inventors.sort((a, b) => (a.year < b.year ? 1 : -1)));

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
console.log('4. Sum of the years inventors lived:');
console.table(
  inventors.reduce(
    (totalYears, inventor) => totalYears + (inventor.passed - inventor.year),
    0
  )
);

// 5. Sort the inventors by years lived
console.log('5. Inventors sorted by years lived:');
console.table(
  inventors.sort((a, b) => (a.passed - a.year > b.passed - b.year ? 1 : -1))
);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
console.log(
  '6. You have to visit "https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris" for this one.'
);
// Go to the link above and apply the code below...
// const category = document.getElementsByClassName('mw-category') || {};
// const links = category.querySelectorAll('a');
// console.table(
//   [...links].map(link => link.textContent).filter(streetName => streetName.includes('de'))
// );

// 7. sort Exercise
// Sort the people alphabetically by last name
console.log('7. Sort the people alphabetically by last name:');
console.table(
  people.sort((a, b) => {
    const [aLastName, aFirstName] = a.split(', ');
    const [bLastName, bFirstName] = b.split(', ');

    return aLastName > bLastName ? 1 : -1;
  })
);

// 8. Reduce Exercise
// Sum up the instances of each data
console.log('8. Sum up the instances of each data:');
console.table(
  data.reduce((data, count) => {
    if (!data[count]) data[count] = 0;
    data[count]++;
    return data;
  }, {})
);
