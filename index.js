let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
let deleteBtn = document.getElementById("del-btn");
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")); // استرجاع البيانات من localStorage

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  rander(myLeads);
}

// دالة لعرض الروابط
function rander(leads) {
  let listedItems = "";
  for (let i = 0; i < leads.length; i++) {
    listedItems += `<li><a target="_blank" href="${leads[i]}">${leads[i]}</a></li>`;
  }
  ulEl.innerHTML = listedItems;
}

// حذف الروابط
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  rander(myLeads);
});

// تعريف دالة saveLead بشكل عام
function saveLead() {
  if (inputEl.value.trim() !== "") {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    //اضافة الى تخزين محلي
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    rander(myLeads);
  }
}
// localStorage.clear();
// عند النقر على الزر
inputBtn.addEventListener("click", saveLead);

// عند الضغط على مفتاح Enter داخل حقل الإدخال
inputEl.addEventListener("keydown", function (enter) {
  if (enter.key === "Enter") {
    saveLead();
  }
});
