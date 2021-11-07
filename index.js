// // Write your solution in this file!
// const employee = {
//     name: "Sam",
//     streetAddress: "55 Water St",
// };
// function updateEmployeeWithKeyAndValue(employee, key, value){
//     const newEmployee = {...employee}; //This creates a clone of the original object and saves it into a new variable. 
//     newEmployee[key]=value;
//     return newEmployee;
// }
// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
//     employee[key]=value;
//     return employee;
// }
// function deleteFromEmployeeByKey(employee, key){
//     const newObject = Object.assign({}, employee, "")
//     delete newObject[key] //deleting the key/value pair.
//     return newObject; // returning the object.
// }
// //Returns employee w/o the deleted key/value pair:
// //Mofidy the original employee:
// function destructivelyDeleteFromEmployeeByKey(employee, key){
//     delete employee.name;
//     return employee;    
// }


const employee = {
    name: 'Sam',
    streetAdress: '11 Broadway'
};

function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployee = {...employee};
    newEmployee[key] = (value);
    return newEmployee;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value; 
    return employee;
}

function deleteFromEmployeeByKey(employee,key){
    const newEmployee = Object.assign({}, employee);//Object.assig (, employee) creates a copy.
        delete newEmployee[key]; //deletes key from the new array
        return newEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee.name;
    return employee;
}

