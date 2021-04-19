//Getting all the id tags for each "Add to cart" button (A.H-L)
if(document.getElementById("01") != null){ //This makes it so this code only works on the page this code is made for
document.getElementById("01").addEventListener("click", game01);
document.getElementById("02").addEventListener("click", game02);
document.getElementById("03").addEventListener("click", game03);
document.getElementById("04").addEventListener("click", game04);
document.getElementById("05").addEventListener("click", game05);
}
if(document.getElementById("06") != null){ //This makes it so this code only works on the page this code is made for
document.getElementById("06").addEventListener("click", game06);
document.getElementById("07").addEventListener("click", game07);
document.getElementById("08").addEventListener("click", game08);
document.getElementById("09").addEventListener("click", game09);
document.getElementById("10").addEventListener("click", game10);
}
if(document.getElementById("11") != null){ //This makes it so this code only works on the page this code is made for
document.getElementById("11").addEventListener("click", game11);
document.getElementById("12").addEventListener("click", game12);
document.getElementById("13").addEventListener("click", game13);
document.getElementById("14").addEventListener("click", game14);
document.getElementById("15").addEventListener("click", game15);
}
if(document.getElementById("16") != null){ //This makes it so this code only works on the page this code is made for
document.getElementById("16").addEventListener("click", game16);
document.getElementById("17").addEventListener("click", game17);
document.getElementById("18").addEventListener("click", game18);
document.getElementById("19").addEventListener("click", game19);
document.getElementById("20").addEventListener("click", game20);
}
if(document.getElementById("21") != null){ //This makes it so this code only works on the page this code is made for
document.getElementById("21").addEventListener("click", game21);
document.getElementById("22").addEventListener("click", game22);
document.getElementById("23").addEventListener("click", game23);
document.getElementById("24").addEventListener("click", game24);
document.getElementById("25").addEventListener("click", game25);
}

function game01(){
	if(document.getElementById("01").textContent == "Remove from Cart")
	{
		localStorage.removeItem("01Game");
		localStorage.removeItem("01Price");
		
		document.getElementById("01").textContent = "Add to Cart";
	}else 
	{
	document.getElementById("01").textContent = "Remove from Cart";
	localStorage.setItem("01Game", "Counter-Strike Global Offensive");
	localStorage.setItem("01Price", "12.99");
	document.getElementById("01").textContent = "Remove from Cart";
	}
}   //This function makes it so you can add the item to cart and when it exists in the cart you cna remove it

if(localStorage.getItem("01Game") != null && document.getElementById("01") != null){
	document.getElementById("01").textContent = "Remove from Cart";
} //If the item is in the cart the page loads with the text "Remove from Cart" on it instead of "Add to Cart"

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
	localStorage.setItem("02Price", "29.99");
	document.getElementById("02").textContent = "Remove from Cart";
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
	document.getElementById("03").textContent = "Remove from Cart";
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
	document.getElementById("04").textContent = "Remove from Cart";
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
	document.getElementById("05").textContent = "Remove from Cart";
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
	document.getElementById("06").textContent = "Remove from Cart";
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
	document.getElementById("07").textContent = "Remove from Cart";
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
	document.getElementById("08").textContent = "Remove from Cart";
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
	document.getElementById("09").textContent = "Remove from Cart";
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
	localStorage.setItem("10Price", "54.99");
	document.getElementById("10").textContent = "Remove from Cart";
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
	localStorage.setItem("11Game", "The Elder Scrolls® Online");
	localStorage.setItem("11Price", "7.99");
	document.getElementById("11").textContent = "Remove from Cart";
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
	document.getElementById("12").textContent = "Remove from Cart";
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
	localStorage.setItem("13Price", "11.99");
	document.getElementById("13").textContent = "Remove from Cart";
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
	document.getElementById("14").textContent = "Remove from Cart";
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
	document.getElementById("15").textContent = "Remove from Cart";
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
	document.getElementById("16").textContent = "Remove from Cart";
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
	document.getElementById("17").textContent = "Remove from Cart";
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
	localStorage.setItem("18Game", "F1® 2020");
	localStorage.setItem("18Price", "54.99");
	document.getElementById("18").textContent = "Remove from Cart";
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
	document.getElementById("19").textContent = "Remove from Cart";
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
	localStorage.setItem("20Game", "The Crew™ 2");
	localStorage.setItem("20Price", "49.99");
	document.getElementById("20").textContent = "Remove from Cart";
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
	document.getElementById("21").textContent = "Remove from Cart";
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
	document.getElementById("22").textContent = "Remove from Cart";
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
	localStorage.setItem("23Price", "19.99");
	document.getElementById("23").textContent = "Remove from Cart";
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
	document.getElementById("24").textContent = "Remove from Cart";
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
	document.getElementById("25").textContent = "Remove from Cart";
	}
}

if(localStorage.getItem("25Game") != null && document.getElementById("25")){
	document.getElementById("25").textContent = "Remove from Cart";
}

//This is the system for clearing every item from the cart (A.H-L)
if(document.getElementById("clearCart") != null)
{
	document.getElementById("clearCart").addEventListener("click", clearCart);	
}
	function clearCart()
	{
		
		if(localStorage.getItem("01Game") != null){
			localStorage.removeItem("01Game");
			localStorage.removeItem("01Price");
		}
		if(localStorage.getItem("02Game") != null){
			localStorage.removeItem("02Game");
			localStorage.removeItem("02Price");
		}
		if(localStorage.getItem("03Game") != null){
			localStorage.removeItem("03Game");
			localStorage.removeItem("03Price");
		}
		if(localStorage.getItem("04Game") != null){
			localStorage.removeItem("04Game");
			localStorage.removeItem("04Price");
		}
		if(localStorage.getItem("05Game") != null){
			localStorage.removeItem("05Game");
			localStorage.removeItem("05Price");
		}
		if(localStorage.getItem("06Game") != null){
			localStorage.removeItem("06Game");
			localStorage.removeItem("06Price");
		}
		if(localStorage.getItem("07Game") != null){
			localStorage.removeItem("07Game");
			localStorage.removeItem("07Price");
		}
		if(localStorage.getItem("08Game") != null){
			localStorage.removeItem("08Game");
			localStorage.removeItem("08Price");
		}
		if(localStorage.getItem("09Game") != null){
			localStorage.removeItem("09Game");
			localStorage.removeItem("09Price");
		}
		if(localStorage.getItem("10Game") != null){
			localStorage.removeItem("10Game");
			localStorage.removeItem("10Price");
		}
		if(localStorage.getItem("11Game") != null){
			localStorage.removeItem("11Game");
			localStorage.removeItem("11Price");
		}
		if(localStorage.getItem("12Game") != null){
			localStorage.removeItem("12Game");
			localStorage.removeItem("12Price");
		}
		if(localStorage.getItem("13Game") != null){
			localStorage.removeItem("13Game");
			localStorage.removeItem("13Price");
		}
		if(localStorage.getItem("14Game") != null){
			localStorage.removeItem("14Game");
			localStorage.removeItem("14Price");
		}
		if(localStorage.getItem("15Game") != null){
			localStorage.removeItem("15Game");
			localStorage.removeItem("15Price");
		}
		if(localStorage.getItem("16Game") != null){
			localStorage.removeItem("16Game");
			localStorage.removeItem("16Price");
		}
		if(localStorage.getItem("17Game") != null){
			localStorage.removeItem("17Game");
			localStorage.removeItem("17Price");
		}
		if(localStorage.getItem("18Game") != null){
			localStorage.removeItem("18Game");
			localStorage.removeItem("18Price");
		}
		if(localStorage.getItem("19Game") != null){
			localStorage.removeItem("19Game");
			localStorage.removeItem("19Price");
		}
		if(localStorage.getItem("20Game") != null){
			localStorage.removeItem("20Game");
			localStorage.removeItem("20Price");
		}
		if(localStorage.getItem("21Game") != null){
			localStorage.removeItem("21Game");
			localStorage.removeItem("21Price");
		}
		if(localStorage.getItem("22Game") != null){
			localStorage.removeItem("22Game");
			localStorage.removeItem("22Price");
		}
		if(localStorage.getItem("23Game") != null){
			localStorage.removeItem("23Game");
			localStorage.removeItem("23Price");
		}
		if(localStorage.getItem("24Game") != null){
			localStorage.removeItem("24Game");
			localStorage.removeItem("24Price");
		}
		if(localStorage.getItem("25Game") != null){
			localStorage.removeItem("25Game");
			localStorage.removeItem("25Price");
		}
	
}