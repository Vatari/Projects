const Contact = require("./models/Contact");

const { Pool } = require("pg");

const pool = new Pool({
  user: "kain",
  host: "10.1.77.2",
  database: "phonebook",
  password: "*********",
  port: "11144",
});

const fs = require("fs");
const { log } = require("console");
//const phonebook = [];
let phonebook = JSON.parse(fs.readFileSync("./data.json"));
function getData() {
  return phonebook;
}

function saveContact(name, number) {
  //let contact = new Contact(name, number); //class solution

  //let contact = { name, number };
  //phonebook.push(contact);

  pool.query(
    "INSERT INTO phonebook (name, phone) VALUES ('" +
      name +
      "', '" +
      number +
      "')",
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log(`User added with ID: ${results.insertId}`);
    }
  );

  //fs.writeFileSync("/data.json", JSON.stringify(phonebook));
}
module.exports = {
  getData,
  saveContact,
};
