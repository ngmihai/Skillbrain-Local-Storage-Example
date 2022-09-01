const select = document.getElementById("select");
const divPatrat = document.getElementById("patrat");

// localStorage.getItem(key: string)
// localStorage.setItem(key: string, value: string)
// localStorage.removeItem(key: string)

// La momentul incarcarii luam valoarea salvata si o punem in continutul dorit
divPatrat.className = localStorage.getItem("classname");
select.selectedIndex = JSON.parse(localStorage.getItem("selectedIndex"));

select.addEventListener("change", () => {
  const culoare = select.options[select.selectedIndex].text;
  localStorage.setItem("selectedIndex", JSON.stringify(select.selectedIndex));

  if (culoare === "Rosu") {
    divPatrat.className = "patrat rosu";
  } else if (culoare === "Galben") {
    divPatrat.className = "patrat galben";
  } else if (culoare === "Albastru") {
    divPatrat.className = "patrat albastru";
  }

  localStorage.setItem("classname", divPatrat.className);
});
