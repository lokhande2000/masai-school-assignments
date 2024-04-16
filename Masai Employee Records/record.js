// fill in javascript code here

let from = document.querySelector("form");
let tbody = document.querySelector("tbody");

let arr = [];

function saveData() {
  localStorage.setItem("data", JSON.stringify(arr));
}

function loadData() {
  let employee = JSON.parse(localStorage.getItem("data"));

  console.log(employee);

  if (employee) {
    showData(employee);
  }
}

from.addEventListener("submit", (e) => {
  e.preventDefault();

  let obj = {
    name: e.target[0].value,
    EmployeeId: +e.target[1].value,
    department: e.target[2].value,
    experience: Number(e.target[3].value),
    email: e.target[4].value,
    mobile: Number(e.target[5].value),
  };

  arr.push(obj);

  e.target[0].value = "";
  e.target[1].value = "";
  e.target[2].value = "";
  e.target[3].value = "";
  e.target[4].value = "";
  e.target[5].value = "";

  saveData();
  showData(arr);

  // console.log(arr);
});

function showData(data) {
  tbody.innerHTML = "";

  data.forEach((ele, i) => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = ele.name;

    let td2 = document.createElement("td");
    td2.textContent = ele.EmployeeId;

    let td3 = document.createElement("td");
    td3.textContent = ele.department;

    td4 = document.createElement("td");
    td4.textContent = ele.experience;

    td5 = document.createElement("td");
    td5.textContent = ele.email;

    td6 = document.createElement("td");
    td6.textContent = ele.mobile;

    td7 = document.createElement("td");
    if (ele.experience > 5) {
      td7.textContent = "Senior";
    } else if (ele.experience >= 2 && ele.experience <= 5) {
      td7.textContent = "Junior";
    } else {
      td7.textContent = "Fresher";
    }

    let td8 = document.createElement("td");
    let button = document.createElement("button");
    button.addEventListener("click", function () {
      handleDelete(i);
    });
    button.innerHTML = "delete";

    td8.appendChild(button);

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
    tbody.append(tr);
  });
}

function handleDelete(index) {
  arr.splice(index, 1); // Remove element at the specified index
  saveData();
  showData(arr); // Update displayed data
}

loadData();
