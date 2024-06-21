const annually = document.querySelector("#annually");
const proAnnually = document.querySelector("#pro-annually");
const masterAnnually = document.querySelector("#master-annually");
const monthly = document.querySelector("#monthly");
const proMonthly = document.querySelector("#pro-monthly");
const masterMonthly = document.querySelector("#master-monthly");
const check = document.querySelector("#check");
let isMonthly = false;

function changePlan() {
  if (!isMonthly) {
    annually.style.display = "none";
    proAnnually.style.display = "none";
    masterAnnually.style.display = "none";
    monthly.style.display = "block";
    proMonthly.style.display = "block";
    masterMonthly.style.display = "block";
    isMonthly = true;
  } else if (isMonthly) {
    monthly.style.display = "none";
    proMonthly.style.display = "none";
    masterMonthly.style.display = "none";
    annually.style.display = 'block'
    proAnnually.style.display = "block";
    masterAnnually.style.display = 'block';
    isMonthly = false;
  }
}
