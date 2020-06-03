const companies =[
 {name:"Company One",catagory:"Finance", start: 1981, end:2003},  
 {name:"Company Two",catagory:"Retail", start: 1992, end:2008},  
 {name:"Company Three",catagory:"Autp", start: 1996, end:2006},  
 {name:"Company Four",catagory:"Retail", start: 1990, end:2005},  
 {name:"Company Five",catagory:"Technology", start: 1995, end:2004},  
 {name:"Company Six",catagory:"Finance", start: 1985, end:2001},  
 {name:"Company Seven",catagory:"Auto", start: 1989, end:2002},  
 {name:"Company Eight",catagory:"Technology", start: 20013, end:2018},  
 {name:"Company Nine",catagory:"Retail", start: 1981, end:1987},  

];

const ages =[40, 30, 35, 16, 18, 20, 45, 33, 19, 29, 26, 50, 61, 55, 51, 25];

//for(let i=0; i< companies.length; i++){
 //   console.log(companies[i]);

//}
//forEach
  //companies.forEach(function(company){
  //console.log(company.name);
//});
//filter
//Get 20 and older
//let canDrink =[];
//for(let i=0; i<ages.length; i++){
//if(ages[i] >=20){
// canDrink.push(ages[i]);
//}
//}
// const canDrink =ages.filter(function(age){
//if(age >=20) {
//  return true;
//}
//});

const canDrink = ages.filter(age =>age >=20); 
 
// Filter retail companies
//const retailCompanies =companies.filter(function(company){
  //if(company.catagory === 'Retail') {
    //  return true;
  //}   
//});

const retailCompanies = companies.filter(company => company.catagory === 'Retail');

//Get 80's companies
 const eightiesCompanies =companies.filter(company => (company.start >=1980 && company.start <1990)); 

//Get companies that lasted 10 years or more
const lastTenYears =companies.filter(company =>(company.end - company.start >=10));
 
//map
//Create array of company names
//const companyNames =companies.map(function(company){
//return company.name;
//});
//const testMap =companies.map(function(company){
  //  return `${company.name} [${company.start}-${company.end}]`;
//});
//const testMap =companies.map(company=> `${company.name} [${company.start}-${company.end}]`);

//const ageMap =ages
//.map(age =>Math.sqrt(age))
//.map(age =>age*2);


//sort
//Sort companies by start year
//const sortedCompanies = companies.sort(function(c1,c2){
//if(c1.start > c2.start){
 //return 1;

//}else{
  //  return -1;
//}
//});
//const sortedCompanies = companies.sort((a,b)=>(a.start>b.start ? 1 : -1));

// Sort ages
//const sortAges = ages.sort();

//console.log(sortAges);

//reduce

//let ageSum =0;
//for(let i=0; i< ages.length; i++) {
  //  ageSum += ages[i];
//}
//const ageSum =ages.reduce(function(total,age){
 //return total + age;
//},0);
const ageSum =ages.reduce((total,age)=> total + age,0);

// Get total years for all companies

//const totalyears= companies.reduce(function(total,company){
//return total +(company.end -company.start);
//},0);
const totalyears= companies.reduce((total,company)=> total +(company.end -company.start),0);



//Combained Methods
const combained =ages
.map(age =>age *2)
.filter(age => age >= 40)
.sort((a,b)=> a-b)
.reduce((a,b) => a+b,0);
console.log(combained);
