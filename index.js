const employees = [
    { name: 'Alice', salary: 5000 },
    { name: 'Bob', salary: 6000 },
    { name: 'Charlie', salary: 4500 }
];

const doubleSalary = employees.map(employees => employees.salary * 2);
console.log(doubleSalary);

const filterSalary = employees.filter(employees => employees.salary > 5500);
console.log(filterSalary);

const countSalary = employees.reduce((accumulator, currentValue) => accumulator + currentValue.salary, 0)
console.log(countSalary);

const namesToUpperCase = employees.map(employees => employees.name.toUpperCase());
console.log(namesToUpperCase);
