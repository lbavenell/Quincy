var body = document.querySelector("body");

document.addEventListener("keydown", function (e) {
  // console.log(e);
  if (e.key === "l") {
    body.classList.add("light");
  } else if (e.key === "d") {
    if (body.classList.contains("light")) {
      body.classList.remove("light");
    }
  }
});
