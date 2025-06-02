// getting elements
const diceBtn = document.getElementById("diceIcon");
const adviceNum = document.getElementById("adviceNum");
const adviceDemo = document.getElementById("adviceDemo");
// buttons function
diceBtn.addEventListener("click", () => {
  adviceDemo.innerHTML = "Loading...";
  fetch("https://api.adviceslip.com/advice", {
    method: "GET",
    cache: "no-cache", // რათა ახალი ციტატა წამოიღოს ყოველ ჯერზე
  })
    .then(function (quoteResponse) {
      if (!quoteResponse.ok || quoteResponse.status === 404) {
        throw new Error("ციტატა ვერ მოიძებნა");
      }
      return quoteResponse.json();
    })
    .then(function (responseData) {
      const advice = responseData.slip.advice;
      const id = responseData.slip.id;
      adviceDemo.innerHTML = `"${advice}"`;
      adviceNum.innerHTML = id;
    })
    .catch(function (error) {
      adviceDemo.innerHTML = "დაფიქსირდა შეცდომა.";
      document.getElementById("data").textContent =
        error.message || "Server Error";
    });
});

