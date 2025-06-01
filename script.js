const diceBtn = document.getElementById("diceIcon");
const adviceNum = document.getElementById("adviceNum");
const adviceDemo = document.getElementById("adviceDemo");
let count = 1;

diceBtn.addEventListener("click", () => {
  count++;
  adviceDemo.innerHTML = "random quote from api";
  adviceNum.innerHTML = count;
});

fetch("link", {
  method: "GET",
})
  .then(function (quoteResponse) {})
  .catch(function (error) {});
