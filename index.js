let express = require("express");
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`The Server is running on port ${port}`);
});

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let names = ["Rahul", "Sita", "Amit", "Vikram", "Priya"];

let employees = [
  { employeeId: 1, name: "Rahul" },
  { employeeId: 2, name: "Sita" },
  { employeeId: 3, name: "Amit" },
];

let contacts = [
  { phoneNumber: "1234567890", name: "Rahul", address: "123 Street, City" },
  { phoneNumber: "0987654321", name: "Sita", address: "456 Avenue, City" },
  { phoneNumber: "1112223334", name: "Amit", address: "789 Boulevard, City" },
];

//1
function findNumber(ele, target) {
  return ele === target;
}
app.get("/numbers/find/:number", (req, res) => {
  let number = parseInt(req.params.number);
  let result = numbers.find((ele) => findNumber(ele, number));
  res.json(result);
});
//numbers/find/5

//2
function findName(ele, name) {
  return ele === name;
}
app.get("/names/find/:name", (req, res) => {
  let name = req.params.name;
  let result = names.find((ele) => findName(ele, name));
  res.json(result);
});
//names/find/Sita

//3
function findEmployeeById(ele, id) {
  return ele.employeeId === id;
}
app.get("/employees/find/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let result = employees.find((ele) => findEmployeeById(ele, id));
  res.json(result);
});
//employees/find/2

//4
function findContactByPhoneNumber(ele, phoneNumber) {
  return ele.phoneNumber === phoneNumber;
}
app.get("/contacts/find/:phoneNumber", (req, res) => {
  let phoneNumber = req.params.phoneNumber;
  let result = contacts.find((ele) =>
    findContactByPhoneNumber(ele, phoneNumber),
  );
  res.json(result);
});
//contacts/find/1234567890
