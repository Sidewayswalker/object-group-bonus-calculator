// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];


console.log('array of employee data: ',  employees );
///////////////////////////////////////////////////////////////////////////

// TASKS:
// CREATE A LOOP 
// CREATE A NEW ARRAY OF OBJECTS -----> compArray
// Take data from the employees to give them a new array of values
  // name               -   employees(i).name   --or--   employee.name
  // bonusPercentage        0%  4%  6%  10% 
  // totalBonus             annualSalary x bonusPercentage     --- NEEDS TO BE ROUNDED
  // totalCompensation      annualSalary + totalBonus
//return compArray

function calculateIndividualEmployeeBonus( employee ) {  
    
  let bonusPercentage;
  


  if (employee.reviewRating <= 2){
    bonusPercentage = 0;
  }else if (employee.reviewRating === 3){
    bonusPercentage = .04;
  }else if (employee.reviewRating === 4){
    bonusPercentage = .06;
  }else if (employee.reviewRating === 5){
      bonusPercentage = .10;
  }
  


  }
}


  calculateIndividualEmployeeBonus(console.log(employees));














// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  
  
  // return new object with bonus results

}