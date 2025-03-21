let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("del-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")); // استرجاع البيانات من localStorage
const tabBtn = document.getElementById("tab-btn");

// الحصول على Local من المتغير
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  rander(myLeads);
}

//دالة ال API بحيث ياخذ المعلومات من داخل التاب
//ملاحضه اضافه الاتاحه في ملف JSON
tabBtn.addEventListener("click", chromee);
function chromee() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    rander(myLeads);
  });
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

// عند النقر على الزر
inputBtn.addEventListener("click", saveLead);

// عند الضغط على مفتاح Enter داخل حقل الإدخال
inputEl.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // منع السلوك الافتراضي للمفتاح Enter

    if (inputEl.value.trim() !== "") {
      // إذا كان هناك نص في حقل الإدخال
      saveLead();
    } else {
      // إذا كان حقل الإدخال فارغًا
      chromee();
    }
  }
});

// عند تحميل الصفحة، يتم التركيز تلقائيًا على حقل الإدخال
document.addEventListener("DOMContentLoaded", function () {
  inputEl.focus();
});
