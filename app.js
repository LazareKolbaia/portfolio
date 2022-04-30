
function showAlert() {
    alert("Search bar may wont work, Apologies.")
}  

function roundedJs() {
    var v = document.getElementById("roundedCircle");
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }
}

function goHome() {
    window.location.href = 'index.html';
    const el = event.target;
    el.setAttribute('style', 'color: #6DB292');
}

