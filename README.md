# Employee-Payroll-Tracker
Module 3 challenge

## Description

In this assignment the goal was to create a functional employee payroll tracker. This was accomplished using the `prompt()` function and then loading those values into the chart on the page through the `getRandomEmployee()` function. In the back end of the application the `displayAverageSalary()` function is used to calculate the average salary among the loaded in employees.

## Difficulties

### Salary Display
I ran into two issues in terms of the salary display, the first was difficulty getting the `$` to appear in the front end and the second being getting the saslary to register as a number rather than a string. To remedy the first issue I added the `$` to the salary object, however this then added to the issue of salary needing to be a number and not a string. The solution to this was to create a separate variable where salary display was a number (called `'salaryNum'`) and insert that into the salary portion of the object. Then a secondary salary object was created for the number also called `'salaryNum'` that could be used for the calculations..

``` javascript

 const salary = window.prompt("enter salary");
    //convery salary to number rather than string 
    const salaryNum = Math.floor(salary);

 employeesArray.push({
        firstName: firstName,
        lastName: lastName,
        //salary number with string for front end display
        salary: '$'+salaryNum,
        //salary value as a number for calculation
        salaryValue: salaryNum
      });

```

### Calculation issues
Due to the salary being a string and not a number there was a consistent error with getting the average to calculate. The value kept returning as NaN until each part of the equation was `console.log` so that the place where the error occured could be seen. This is where it was discovered that salary was a string and not a number.

## Resources used

>* [The resource used for a better understanding of `Math.floor()` and how to use it](https://www.geeksforgeeks.org/javascript-math-floor-method/)

>* [Used for a better understanding of `isNaN()` and how to use it](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)


## Screenshot

![employee-payroll-tracker-application-run-image](/Assets/Employee-Payroll-Tracker-Final-Screenshot.png)

## Deployed Link

[Employee-Payroll-Tracker]()
