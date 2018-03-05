window.onload = function() { 
  var inputData = document.getElementById('submit');
  inputData.onclick = () => addUser();

  function addUser(e) {
    let name = $('#name').val();
    let sellary = $('#sellary').val();
    let rate = $('#rate').val();
    let newEmployee = {};
    if(rate == 0) {newEmployee = new EmployeeFixed(+new Date(), name, sellary);}
    else {newEmployee = new EmployeeWage(+new Date(), name, sellary, rate);}
    db.push(newEmployee);
    drawAddedOne();
    drawLastThreeId();
    return newEmployee;
  }
}