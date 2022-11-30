document.addEventListener("DOMContentLoaded",
  function hide(){
    const Mei = document.getElementById("meipic");
    const Answer = document.getElementById("answer");
    Mei.style.display=(Mei.style.display==="none") ? '': "none";
    Answer.style.display=(Answer.style.display==="none") ? '': "none";
  }
);

function hideMei(){
    const Mei = document.getElementById("meipic");
  if (Mei.style.display === "block") {
    Mei.style.display = "none";
  } else {
    Mei.style.display = "block";
  }
}
function hideAnswer(){
    const Answer = document.getElementById("answer");
    if (Answer.style.display === "block") {
      Answer.style.display = "none";
    } else {
      Answer.style.display = "block";
  }
}