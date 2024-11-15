// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  //array to hold employees
  let employeesArray = [];
  //while loop to load in all employees to array
  while (window.confirm("Would you like to enter employees?")){
    const firstName = window.prompt("enter first name");
    const lastName = window.prompt("enter last name");
    const salary = window.prompt("enter salary");
    //convery salary to number rather than string 
    const salaryNum = Math.floor(salary);
    //if statement to change salary value to 0 if nothing is entered
    if(isNaN(salary)){
      employeesArray.push({
        firstName: firstName,
        lastName: lastName,
        salary: '$' + 0,
        salaryvalue: salaryNum
      });
      //else statement for correctly functioning case
    } else {
      employeesArray.push({
        firstName: firstName,
        lastName: lastName,
        //salary number with string for front end display
        salary: '$'+salaryNum,
        //salary value as a number for calculation
        salaryValue: salaryNum
      });
    }
  }

  return employeesArray;

}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0;
  for (let i = 0; i < employeesArray.length; i++){
    sum = sum + employeesArray[i].salaryValue;
  }
  //sanity checks to work through kinks of improper calculation
  console.log("sum of numbers" +sum);
  console.log("array length" + employeesArray.length)
  //print the average salary in the console
  console.log(sum/employeesArray.length);
  return sum/employeesArray.length;
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  //sanity check to check if employees were beieng properly pulled 
  console.log(employeesArray[Math.random()*employeesArray.length]);
  //returns employees at random
  return employeesArray[Math.random()*employeesArray.length];
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
