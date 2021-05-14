//Javascript by (A.H-L)
//Getting all the id tags for each "Add to cart" button 
if(document.getElementById("01") != null){ //The if statements make sure that the website only tries grabbing id tags if they exist (prevents errors)
document.getElementById("01").addEventListener("click", game01);} //This event listener triggers the function for each id tag which can add or remove games from local storage
//These comments apply to the following too:
if(document.getElementById("02") != null){ 
document.getElementById("02").addEventListener("click", game02);}
if(document.getElementById("03") != null){ 
document.getElementById("03").addEventListener("click", game03);}
if(document.getElementById("04") != null){ 
document.getElementById("04").addEventListener("click", game04);}
if(document.getElementById("05") != null){ 
document.getElementById("05").addEventListener("click", game05);}
if(document.getElementById("06") != null){ 
document.getElementById("06").addEventListener("click", game06);}
if(document.getElementById("07") != null){ 
document.getElementById("07").addEventListener("click", game07);}
if(document.getElementById("08") != null){ 
document.getElementById("08").addEventListener("click", game08);}
if(document.getElementById("09") != null){ 
document.getElementById("09").addEventListener("click", game09);}
if(document.getElementById("10") != null){ 
document.getElementById("10").addEventListener("click", game10);}
if(document.getElementById("11") != null){ 
document.getElementById("11").addEventListener("click", game11);}
if(document.getElementById("12") != null){ 
document.getElementById("12").addEventListener("click", game12);}
if(document.getElementById("13") != null){
document.getElementById("13").addEventListener("click", game13);}
if(document.getElementById("14") != null){
document.getElementById("14").addEventListener("click", game14);}
if(document.getElementById("15") != null){
document.getElementById("15").addEventListener("click", game15);}
if(document.getElementById("16") != null){ 
document.getElementById("16").addEventListener("click", game16);}
if(document.getElementById("17") != null){
document.getElementById("17").addEventListener("click", game17);}
if(document.getElementById("18") != null){
document.getElementById("18").addEventListener("click", game18);}
if(document.getElementById("19") != null){
document.getElementById("19").addEventListener("click", game19);}
if(document.getElementById("20") != null){
document.getElementById("20").addEventListener("click", game20);}
if(document.getElementById("21") != null){ 
document.getElementById("21").addEventListener("click", game21);}
if(document.getElementById("22") != null){
document.getElementById("22").addEventListener("click", game22);}
if(document.getElementById("23") != null){
document.getElementById("23").addEventListener("click", game23);}
if(document.getElementById("24") != null){
document.getElementById("24").addEventListener("click", game24);}
if(document.getElementById("25") != null){
document.getElementById("25").addEventListener("click", game25);}

function game01(){ //This is the function that is called above ^
	if(document.getElementById("01").textContent == "Remove from Cart") //If the button on the website says "Remove from Cart" when it is clicked then it will remove the game item and price from local storage
	{
		localStorage.removeItem("01Game"); //removes "01Game" from Local Storage
		localStorage.removeItem("01Price");//removes "01Price" from Local Storage
		
		document.getElementById("01").textContent = "Add to Cart";//Changes the button under the game from "Remove from Cart" to "Add to Cart"
	}else //If the button under the game says "Add to Cart" it will do the following...
	{
	document.getElementById("01").textContent = "Remove from Cart"; //changes the button text to "Remove from Cart"
	localStorage.setItem("01Game", "Counter-Strike Global Offensive"); //Adds the game name into the local storage 
	localStorage.setItem("01Price", "12.99"); //Adds the price of the game into local storage
	}
}   

if(localStorage.getItem("01Game") != null && document.getElementById("01") != null){ //while the item 01Game exists and while the id tag "01" exists on the page, do the following...
	document.getElementById("01").textContent = "Remove from Cart"; //The page usually loads with the button saying "Add to Cart" so now if the item is in the cart, it loads saying "Remove from Cart"
} 
//The comments above apply to everything below:
function game02(){
	if(document.getElementById("02").textContent == "Remove from Cart")
	{
		localStorage.removeItem("02Game");
		localStorage.removeItem("02Price");
		
		document.getElementById("02").textContent = "Add to Cart";
	}else 
	{
	document.getElementById("02").textContent = "Remove from Cart";
	localStorage.setItem("02Game", "Grand Theft Auto V");
	localStorage.setItem("02Price", "22.49");
	}
}

if(localStorage.getItem("02Game") != null && document.getElementById("02") != null){
	document.getElementById("02").textContent = "Remove from Cart";
}

function game03(){
	if(document.getElementById("03").textContent == "Remove from Cart")
	{
		localStorage.removeItem("03Game");
		localStorage.removeItem("03Price");
		
		document.getElementById("03").textContent = "Add to Cart";
	}else 
	{
	document.getElementById("03").textContent = "Remove from Cart";
	localStorage.setItem("03Game", "Rainbow Six Siege");
	localStorage.setItem("03Price", "19.99");
	}
}

if(localStorage.getItem("03Game") != null && document.getElementById("03") != null){
	document.getElementById("03").textContent = "Remove from Cart";
}

function game04(){
	if(document.getElementById("04").textContent == "Remove from Cart")
	{
		localStorage.removeItem("04Game");
		localStorage.removeItem("04Price");
		
		document.getElementById("04").textContent = "Add to Cart";
	}else 
	{
	document.getElementById("04").textContent = "Remove from Cart";
	localStorage.setItem("04Game", "Left For Dead Two");
	localStorage.setItem("04Price", "8.19");
	}
}

if(localStorage.getItem("04Game") != null && document.getElementById("04") != null){
	document.getElementById("04").textContent = "Remove from Cart";
}

function game05(){
	if(document.getElementById("05").textContent == "Remove from Cart")
	{
		localStorage.removeItem("05Game");
		localStorage.removeItem("05Price");
		
		document.getElementById("05").textContent = "Add to Cart";
	}else 
	{
	document.getElementById("05").textContent = "Remove from Cart";
	localStorage.setItem("05Game", "Warframe");
	localStorage.setItem("05Price", "14.99");
	}
}

if(localStorage.getItem("05Game") != null && document.getElementById("05") != null){
	document.getElementById("05").textContent = "Remove from Cart";
}

function game06(){
	if(document.getElementById("06").textContent == "Remove from Cart")
	{
		localStorage.removeItem("06Game");
		localStorage.removeItem("06Price");
		
		document.getElementById("06").textContent = "Add to Cart";
	}else 
	{
	document.getElementById("06").textContent = "Remove from Cart";
	localStorage.setItem("06Game", "Terraria");
	localStorage.setItem("06Price", "9.99");
	}
}

if(localStorage.getItem("06Game") != null && document.getElementById("06") != null){
	document.getElementById("06").textContent = "Remove from Cart";
}

function game07(){
	if(document.getElementById("07").textContent == "Remove from Cart")
	{
		localStorage.removeItem("07Game");
		localStorage.removeItem("07Price");
		
		document.getElementById("07").textContent = "Add to Cart";
	}else 
	{
	document.getElementById("07").textContent = "Remove from Cart";
	localStorage.setItem("07Game", "The Witcher 3: Wild Hunt");
	localStorage.setItem("07Price", "29.99");
	}
}

if(localStorage.getItem("07Game") != null && document.getElementById("07") != null){
	document.getElementById("07").textContent = "Remove from Cart";
}

function game08(){
	if(document.getElementById("08").textContent == "Remove from Cart")
	{
		localStorage.removeItem("08Game");
		localStorage.removeItem("08Price");
		
		document.getElementById("08").textContent = "Add to Cart";
	}else 
	{
	document.getElementById("08").textContent = "Remove from Cart";
	localStorage.setItem("08Game", "Tomb Raider");
	localStorage.setItem("08Price", "1.59");
	}
}

if(localStorage.getItem("08Game") != null && document.getElementById("08") != null){
	document.getElementById("08").textContent = "Remove from Cart";
}

function game09(){
	if(document.getElementById("09").textContent == "Remove from Cart")
	{
		localStorage.removeItem("09Game");
		localStorage.removeItem("09Price");
		
		document.getElementById("09").textContent = "Add to Cart";
	}else 
	{
	document.getElementById("09").textContent = "Remove from Cart";
	localStorage.setItem("09Game", "The Forest");
	localStorage.setItem("09Price", "16.79");
	}
}

if(localStorage.getItem("09Game") != null && document.getElementById("09") != null){
	document.getElementById("09").textContent = "Remove from Cart";
}

function game10(){
	if(document.getElementById("10").textContent == "Remove from Cart")
	{
		localStorage.removeItem("10Game");
		localStorage.removeItem("10Price");
		
		document.getElementById("10").textContent = "Add to Cart";
	}else 
	{
	document.getElementById("10").textContent = "Remove from Cart";
	localStorage.setItem("10Game", "ARK: Survival Evolved");
	localStorage.setItem("10Price", "46.79");
	}
}

if(localStorage.getItem("10Game") != null && document.getElementById("10") != null){
	document.getElementById("10").textContent = "Remove from Cart";
}

function game11(){
	if(document.getElementById("11").textContent == "Remove from Cart")
	{
		localStorage.removeItem("11Game");
		localStorage.removeItem("11Price");
		
		document.getElementById("11").textContent = "Add to Cart";
	}else 
	{
	document.getElementById("11").textContent = "Remove from Cart";
	localStorage.setItem("11Game", "The Elder Scrolls Online");
	localStorage.setItem("11Price", "7.99");
	}
}

if(localStorage.getItem("11Game") != null && document.getElementById("11") != null){
	document.getElementById("11").textContent = "Remove from Cart";
}

function game12(){
	if(document.getElementById("12").textContent == "Remove from Cart")
	{
		localStorage.removeItem("12Game");
		localStorage.removeItem("12Price");
		
		document.getElementById("12").textContent = "Add to Cart";
	}else 
	{
	document.getElementById("12").textContent = "Remove from Cart";
	localStorage.setItem("12Game", "VRChat");
	localStorage.setItem("12Price", "4.99");
	}
}

if(localStorage.getItem("12Game") != null && document.getElementById("12")){
	document.getElementById("12").textContent = "Remove from Cart";
}

function game13(){
	if(document.getElementById("13").textContent == "Remove from Cart")
	{
		localStorage.removeItem("13Game");
		localStorage.removeItem("13Price");
		
		document.getElementById("13").textContent = "Add to Cart";
	}else 
	{
	document.getElementById("13").textContent = "Remove from Cart";
	localStorage.setItem("13Game", "Planetside 2");
	localStorage.setItem("13Price", "10.80");
	}
}

if(localStorage.getItem("13Game") != null && document.getElementById("13")){
	document.getElementById("13").textContent = "Remove from Cart";
}

function game14(){
	if(document.getElementById("14").textContent == "Remove from Cart")
	{
		localStorage.removeItem("14Game");
		localStorage.removeItem("14Price");
		
		document.getElementById("14").textContent = "Add to Cart";
	}else 
	{
	document.getElementById("14").textContent = "Remove from Cart";
	localStorage.setItem("14Game", "Final Fantasy XIV");
	localStorage.setItem("14Price", "9.99");
	}
}

if(localStorage.getItem("14Game") != null && document.getElementById("14")){
	document.getElementById("14").textContent = "Remove from Cart";
}

function game15(){
	if(document.getElementById("15").textContent == "Remove from Cart")
	{
		localStorage.removeItem("15Game");
		localStorage.removeItem("15Price");
		
		document.getElementById("15").textContent = "Add to Cart";
	}else 
	{
	document.getElementById("15").textContent = "Remove from Cart";
	localStorage.setItem("15Game", "Runescape");
	localStorage.setItem("15Price", "18.99");
	}
}

if(localStorage.getItem("15Game") != null && document.getElementById("15")){
	document.getElementById("15").textContent = "Remove from Cart";
}

function game16(){
	if(document.getElementById("16").textContent == "Remove from Cart")
	{
		localStorage.removeItem("16Game");
		localStorage.removeItem("16Price");
		
		document.getElementById("16").textContent = "Add to Cart";
	}else 
	{
	document.getElementById("16").textContent = "Remove from Cart";
	localStorage.setItem("16Game", "Assetto Corsa");
	localStorage.setItem("16Price", "19.99");
	}
}

if(localStorage.getItem("16Game") != null && document.getElementById("16")){
	document.getElementById("16").textContent = "Remove from Cart";
}

function game17(){
	if(document.getElementById("17").textContent == "Remove from Cart")
	{
		localStorage.removeItem("17Game");
		localStorage.removeItem("17Price");
		
		document.getElementById("17").textContent = "Add to Cart";
	}else 
	{
	document.getElementById("17").textContent = "Remove from Cart";
	localStorage.setItem("17Game", "BeamNG.drive");
	localStorage.setItem("17Price", "20.99");
	}
}

if(localStorage.getItem("17Game") != null && document.getElementById("17")){
	document.getElementById("17").textContent = "Remove from Cart";
}

function game18(){
	if(document.getElementById("18").textContent == "Remove from Cart")
	{
		localStorage.removeItem("18Game");
		localStorage.removeItem("18Price");
		
		document.getElementById("18").textContent = "Add to Cart";
	}else 
	{
	document.getElementById("18").textContent = "Remove from Cart";
	localStorage.setItem("18Game", "F1 2020");
	localStorage.setItem("18Price", "43.99");
	}
}

if(localStorage.getItem("18Game") != null && document.getElementById("18")){
	document.getElementById("18").textContent = "Remove from Cart";
}

function game19(){
	if(document.getElementById("19").textContent == "Remove from Cart")
	{
		localStorage.removeItem("19Game");
		localStorage.removeItem("19Price");
		
		document.getElementById("19").textContent = "Add to Cart";
	}else 
	{
	document.getElementById("19").textContent = "Remove from Cart";
	localStorage.setItem("19Game", "CarX Drift Racing Online");
	localStorage.setItem("19Price", "12.49");
	}
}

if(localStorage.getItem("19Game") != null && document.getElementById("19")){
	document.getElementById("19").textContent = "Remove from Cart";
}

function game20(){
	if(document.getElementById("20").textContent == "Remove from Cart")
	{
		localStorage.removeItem("20Game");
		localStorage.removeItem("20Price");
		
		document.getElementById("20").textContent = "Add to Cart";
	}else 
	{
	document.getElementById("20").textContent = "Remove from Cart";
	localStorage.setItem("20Game", "The Crew 2");
	localStorage.setItem("20Price", "49.99");
	}
}

if(localStorage.getItem("20Game") != null && document.getElementById("20")){
	document.getElementById("20").textContent = "Remove from Cart";
}

function game21(){
	if(document.getElementById("21").textContent == "Remove from Cart")
	{
		localStorage.removeItem("21Game");
		localStorage.removeItem("21Price");
		
		document.getElementById("21").textContent = "Add to Cart";
	}else 
	{
	document.getElementById("21").textContent = "Remove from Cart";
	localStorage.setItem("21Game", "Dota 2");
	localStorage.setItem("21Price", "12.92");
	}
}

if(localStorage.getItem("21Game") != null && document.getElementById("21")){
	document.getElementById("21").textContent = "Remove from Cart";
}

function game22(){
	if(document.getElementById("22").textContent == "Remove from Cart")
	{
		localStorage.removeItem("22Game");
		localStorage.removeItem("22Price");
		
		document.getElementById("22").textContent = "Add to Cart";
	}else 
	{
	document.getElementById("22").textContent = "Remove from Cart";
	localStorage.setItem("22Game", "Civilization V");
	localStorage.setItem("22Price", "23.98");
	}
}

if(localStorage.getItem("22Game") != null && document.getElementById("22")){
	document.getElementById("22").textContent = "Remove from Cart";
}

function game23(){
	if(document.getElementById("23").textContent == "Remove from Cart")
	{
		localStorage.removeItem("23Game");
		localStorage.removeItem("23Price");
		
		document.getElementById("23").textContent = "Add to Cart";
	}else 
	{
	document.getElementById("23").textContent = "Remove from Cart";
	localStorage.setItem("23Game", "Age of Empires II");
	localStorage.setItem("23Price", "18.99");
	}
}

if(localStorage.getItem("23Game") != null && document.getElementById("23")){
	document.getElementById("23").textContent = "Remove from Cart";
}

function game24(){
	if(document.getElementById("24").textContent == "Remove from Cart")
	{
		localStorage.removeItem("24Game");
		localStorage.removeItem("24Price");
		
		document.getElementById("24").textContent = "Add to Cart";
	}else 
	{
	document.getElementById("24").textContent = "Remove from Cart";
	localStorage.setItem("24Game", "Bloons TD6");
	localStorage.setItem("24Price", "8.19");
	}
}

if(localStorage.getItem("24Game") != null && document.getElementById("24")){
	document.getElementById("24").textContent = "Remove from Cart";
}

function game25(){
	if(document.getElementById("25").textContent == "Remove from Cart")
	{
		localStorage.removeItem("25Game");
		localStorage.removeItem("25Price");
		
		document.getElementById("25").textContent = "Add to Cart";
	}else 
	{
	document.getElementById("25").textContent = "Remove from Cart";
	localStorage.setItem("25Game", "RimWorld");
	localStorage.setItem("25Price", "29.99");
	}
}

if(localStorage.getItem("25Game") != null && document.getElementById("25")){
	document.getElementById("25").textContent = "Remove from Cart";
}
