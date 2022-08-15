const pieChart = document.querySelector(".pieChart");
document.querySelector("#inputHandler").addEventListener("input", (e) => {
  pieChart.style = `--percentage:${e.target.value}%`;
});
