getBreakpoint(); //Statring window size

window.addEventListener("resize", () => {
  getBreakpoint();
});

function getBreakpoint() {
  if (window.innerWidth >= 1400) {
    console.log("XXL");
  } else if (window.innerWidth >= 1200) {
    console.log("XL");
  } else if (window.innerWidth >= 992) {
    console.log("LG");
  } else if (window.innerWidth >= 768) {
    console.log("MD");
  } else if (window.innerWidth >= 576) {
    console.log("SM");
  } else {
    console.log("Default");
  }
}
