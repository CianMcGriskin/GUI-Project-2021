//Getting all the id tags for each "Add to cart" button (A.H-L)
document.getElementById("01").addEventListener("click", game01);
/*document.getElementById("02").addEventListener("click", game02);
document.getElementById("03").addEventListener("click", game03);
document.getElementById("04").addEventListener("click", game04);
document.getElementById("05").addEventListener("click", game05);
document.getElementById("06").addEventListener("click", game06);
document.getElementById("07").addEventListener("click", game07);
document.getElementById("08").addEventListener("click", game08);
document.getElementById("09").addEventListener("click", game09);
document.getElementById("10").addEventListener("click", game10);
document.getElementById("11").addEventListener("click", game11);
document.getElementById("12").addEventListener("click", game12);
document.getElementById("13").addEventListener("click", game13);
document.getElementById("14").addEventListener("click", game14);
document.getElementById("15").addEventListener("click", game15);
document.getElementById("16").addEventListener("click", game16);
document.getElementById("17").addEventListener("click", game17);
document.getElementById("18").addEventListener("click", game18);
document.getElementById("19").addEventListener("click", game19);
document.getElementById("20").addEventListener("click", game20);
document.getElementById("21").addEventListener("click", game21);
document.getElementById("22").addEventListener("click", game22);
document.getElementById("23").addEventListener("click", game23);
document.getElementById("24").addEventListener("click", game24);
document.getElementById("25").addEventListener("click", game25);*/
function game01(){
	localStorage.addItem("01-Game", "Counter-Strike Global Offensive");
	localStorage.addItem("01-Price", "€12.99");
	var temp = localStorage.getItem("01-Game");
	alert("Game: " + temp);
}