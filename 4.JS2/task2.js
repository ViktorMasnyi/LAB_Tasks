window.onload = function() {
  const form = document.getElementById('form'),
    skillName = document.getElementById('skillName'),
    skillRange = document.getElementById('skillRange'),
    submit = document.getElementById('submit'),
    skills = document.getElementById('skills');
  let isFormValid = false;


  skillName.addEventListener('change', validateInput, false);
  skillRange.addEventListener('change', validateInput, false);
  submit.addEventListener('click', addSkill, false);

  function validateInput() {
    let pattern = this.dataset.val,
      msg = this.dataset.valMsg,
      msgId = this.dataset.valMsgId,
      value = this.value;

    let res = value.search(pattern);
    if (res == -1) {
      document.getElementById(msgId).innerHTML = msg;
      //document.getElementById(msgId).className = 'msgVisible';
      this.className = "error";
      isFormValid = false;
    }
    else {
      document.getElementById(msgId).innerHTML = "";
      //document.getElementById(msgId).className = 'msgHidden';
      this.className = "valid";
      isFormValid = true;
    }
  }

  function addSkill() {
    if (!isFormValid) return false;
    const newSkill = document.createElement('li');
    newSkill.innerHTML = skillName.value;
    newSkill.style.width = skillRange.value + '%';
    skills.appendChild(newSkill);
    skillName.className = 'default';
    skillRange.className = 'default';
    form.reset();
  }

  

}


