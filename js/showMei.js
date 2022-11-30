document.addEventListener("DOMContentLoaded",
  function hide(){
    const Mei = document.getElementById("meipic");
    Mei.style.display=(Mei.style.display==="none") ? '': "none";
  }
);

function hideMei(){
    const Mei = document.getElementById("meipic");
  if (Mei.style.display === "block") {
    Mei.style.display = "none";
  } else {
    Mei.style.display = "block";
  }
};