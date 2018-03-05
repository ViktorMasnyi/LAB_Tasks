const db = [];
    
class Employee {
  constructor(id, name, salary) {
    this.id = id;
    this.name = name || 'DefaultName';
    this.salary = salary || 0;                
  }
  salaryPerMonth() {return this.salary}
}

class EmployeeWage extends Employee {
  constructor(id, name, salary, rate) {
    super(id, name, salary);
    this.rate = rate || 0;
  }
  salaryPerMonth() {return  (20.8 * 8 * this.rate).toFixed(1)}
}

class EmployeeFixed extends Employee {
  constructor(id, name, salary) {
    super(id, name, salary);
    this.rate = 0;
  }
}

function sortCompare(a,b) {
  if (a.salaryPerMonth() < b.salaryPerMonth()) return 1;
  if (a.salaryPerMonth() > b.salaryPerMonth()) return -1;
  if (a.salaryPerMonth() == b.salaryPerMonth()) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
  }  
}

function drawAddedOne() {
  $('li').remove();
  db.sort(sortCompare);
  let j = 4;
  if(db.length < 4) j = db.length;
  for(let i = 0; i < j; i++) {
    $('#listFive').append(`<li>name: ${db[i].name}, salary: ${db[i].salaryPerMonth()}</li>`); 
  }
}

function drawLastThreeId() {
  let length = db.length;
  let firstIndex = length - 3;
  let lastIndex = length - 1;
  if(firstIndex < 0) firstIndex = 0;
  for(let i = firstIndex; i <= lastIndex; i++) {
    $('#lastThree').append(`<li>name: ${db[i].name}, ID: ${db[i].id}</li>`); 
  }  
}
