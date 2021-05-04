
var customers = document.getElementById('customers');

//Action games (C.McG.)
//Item Name Variables
var CSGO = localStorage.getItem("01Game");
var GTA5 = localStorage.getItem("02Game");
var RS6 = localStorage.getItem("03Game");
var L4D = localStorage.getItem("04Game");
var warframe = localStorage.getItem("05Game");

//Price
//Item Price Variables
var CSGOprice = localStorage.getItem("01Price");
var GTAprice = localStorage.getItem("02Price");
var RS6price = localStorage.getItem("03Price");
var L4Dprice = localStorage.getItem("04Price");
var warframeprice = localStorage.getItem("05Price");	
//CSGO
	if(CSGO == "Counter-Strike Global Offensive")
	{
		//Cart html
		let name = CSGO;
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Action/GameImages/CSGO.webp"></td>' + '<td>' + name +'</td>' + '<td>' + CSGOprice + '</td>' + '<td><div id="product-quantity"><input type="number" id="quantityValue" onkeyup="saveButtonCSGO()" onclick="saveButtonCSGO()" value="1" min="1"></div> </td>' + '<td><button class="remove-product" onclick="removeCSGO()">Remove</button></td>' + '<td id="totalPrice">' + CSGOprice + '</td></tr>';
	}
	
	function removeCSGO()
	{
		//Remove CSGO from localStorage
		localStorage.removeItem("01Game");
		localStorage.removeItem("01Price");
		location.reload();
	}
	
	//Still need to work on changing quantity to H2 and changing the quantity so it stays permanently with localStorage
	function saveButtonCSGO()
	{
		let totalPriceContent = document.getElementById("totalPrice");
		let x = document.getElementById("quantityValue").value;
		let totalPrice = CSGOprice * x;
		
		localStorage.setItem("01TotalPrice", totalPrice);
		let z = localStorage.getItem("01TotalPrice");
		
		totalPriceContent.textContent = z;
	}
//End of CSGO

//GTA5
if(GTA5 == "Grand Theft Auto V")
{
	let name = GTA5;
	customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Action/GameImages/GTA.webp"></td>' + '<td>' + name +'</td>' + '<td>' + GTAprice + '</td>' + '<td><div id="product-quantity"><input onclick="saveButtonGTA()" onkeyup="saveButtonGTA()"type="number" id="quantityValueGTA" value="1" min="1"></div></td>' + '<td><button class="remove-product" onclick="removeGTA()">Remove</button></td>' + '<td id="totalPriceGTA">' + GTAprice + '</td></tr>';
}

function removeGTA()
{
	localStorage.removeItem("02Game");
	localStorage.removeItem("02Price");
	location.reload();
}

function saveButtonGTA()
{
	let totalPriceContentGTA = document.getElementById("totalPriceGTA");
	let x = document.getElementById("quantityValueGTA").value;
	let totalPriceGTA = GTAprice * x;
	totalPriceContentGTA.textContent = totalPriceGTA;
}
//End of GTA5
	
//RS6
if(RS6 == "Rainbow Six Siege")
{
	let name = RS6
	customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Action/GameImages/R6.webp"></td>' + '<td>' + name +'</td>' + '<td>' + RS6price + '</td>' + '<td><div id="product-quantity"><input onclick="saveButtonRS6()" onkeyup="saveButtonRS6()" type="number" id="quantityValueRS6" value="1" min="1"></div></td>' + '<td><button class="remove-product" onclick="removeRS6()">Remove</button></td>' + '<td id="totalPriceRS6">' + RS6price + '</td></tr>';
}

function removeRS6()
{
	localStorage.removeItem("03Game");
	localStorage.removeItem("03Price");
	location.reload();
}

function saveButtonRS6()
{
	let totalPriceContentRS6 = document.getElementById("totalPriceRS6");
	let x = document.getElementById("quantityValueRS6").value;
	let totalPriceRS6 = RS6price * x;
	totalPriceContentRS6.textContent = totalPriceRS6;
}
//End of RS6
	
	
//L4D
if(L4D == "Left For Dead Two")
{
	let name = L4D;
	customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Action/GameImages/L4D.jpg"></td>' + '<td>' + name +'</td>' + '<td>' + L4Dprice + '</td>' + '<td><div id="product-quantity"><input  onclick="saveButtonL4D()" onkeyup="saveButtonL4D()"type="number" id="quantityValueL4D" value="1" min="1"></div></td>' + '<td><button class="remove-product" onclick="removeL4D()">Remove</button></td>' + '<td id="totalPriceL4D">' + L4Dprice + '</td></tr>';
}

function removeL4D()
{
	localStorage.removeItem("04Game");
	localStorage.removeItem("04Price");
	location.reload();
}

function saveButtonL4D()
{
	let totalPriceContentL4D = document.getElementById("totalPriceL4D");
	let x = document.getElementById("quantityValueL4D").value;
	let totalPriceL4D = L4Dprice * x;
	totalPriceContentL4D.textContent = totalPriceL4D;
}
//End of L4D
	
//Warframe
if(warframe == "Warframe")
{
	let name = warframe;
	customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Action/GameImages/warframe.png"></td>' + '<td>' + name +'</td>' + '<td>' + warframeprice + '</td>' + '<td><div id="product-quantity"><input onclick="saveButtonWarframe()" onkeyup="saveButtonWarframe()" type="number" id="quantityValuewarframe" value="1" min="1"></div></td>' + '<td><button class="remove-product" onclick="removeWarframe()">Remove</button></td>' + '<td id="totalPricewarframe">' + warframeprice + '</td></tr>';
}

function removeWarframe()
{
	localStorage.removeItem("05Game");
	localStorage.removeItem("05Price");
	location.reload();
}

function saveButtonWarframe()
{
	let totalPriceContentwarframe = document.getElementById("totalPricewarframe");
	let x = document.getElementById("quantityValuewarframe").value;
	let totalPricewarframe = warframeprice * x;
	totalPriceContentwarframe.textContent = totalPricewarframe;
}
//End of Warframe
//End of Action

//Adventure (A.H-L) + (C.McG.)
var terraria = localStorage.getItem("06Game");
var witcher3 = localStorage.getItem("07Game");
var TR = localStorage.getItem("08Game");
var TheForest = localStorage.getItem("09Game");
var ARK = localStorage.getItem("10Game");

var terrariaprice = localStorage.getItem("06Price");
var witcher3price = localStorage.getItem("07Price");
var TRprice = localStorage.getItem("08Price");
var TheForestprice = localStorage.getItem("09Price");
var ARKprice = localStorage.getItem("10Price");

//Terraria
if(terraria == "Terraria")
	{
	let name = terraria;
	customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Adventure/GameImages/Terraria.webp"></td>' + '<td>' + name +'</td>' + '<td>' + terrariaprice +'</td>' + '<td><div id="product-quantity"><input id="quantityValueTerraria" onkeyup="saveButtonTerraria()" onclick="saveButtonTerraria()" type="number" id="quantityValue" value="1" min="1"></div></td>' + '<td><button class="remove-product" onclick="removeTerraria()">Remove</button></td>' + '<td id="totalPriceTerraria">' + terrariaprice + '</td></tr>';
	}
function removeTerraria()
	{
			localStorage.removeItem("06Game");
			localStorage.removeItem("06Price");
			location.reload();
	}
function saveButtonTerraria()
	{
			let totalPriceContentTerraria = document.getElementById("totalPriceTerraria");
			let x = document.getElementById("quantityValueTerraria").value;
			let totalPriceTerraria = terrariaprice * x;
			totalPriceContentTerraria.textContent = totalPriceTerraria;
	}
//End of Terraria

//Witcher 3
if(witcher3 == "The Witcher 3: Wild Hunt")
	{
		let name = witcher3;
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Adventure/GameImages/Witcher3.webp"></td>' + '<td>' + name +'</td>' + '<td>' + witcher3price + '</td>' + '<td><div id="product-quantity"><input onclick="saveButtonWitcher3()" onkeyup="saveButtonWitcher3()" type="number" id="quantityValueWitcher3" value="1" min="1"></div></td>' +'<td><button class="remove-product" onclick="removeWitcher3()">Remove</button></td>' + '<td id="totalPriceWitcher3"> ' + witcher3price + '</tr>';
	}
	function removeWitcher3()
	{
		localStorage.removeItem("07Game");
		localStorage.removeItem("07Price");
		location.reload();
	}
	function saveButtonWitcher3()
	{
			let totalPriceContentWitcher3 = document.getElementById("totalPriceWitcher3");
			let x = document.getElementById("quantityValueWitcher3").value;
			let totalPriceWitcher3 = witcher3price * x;
			totalPriceContentWitcher3.textContent = totalPriceWitcher3;
	}
//End of Witcher 3

//Tomb raider
if(TR == "Tomb Raider")
	{
		let name = TR;
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Adventure/GameImages/TombRaider.webp"></td>' + '<td>' + name +'</td>' + '<td>' + TRprice + '</td>' + '<td><div id="product-quantity"><input onclick="saveButtonTR()" onkeyup="saveButtonTR()" type="number" id="quantityValueTR" value="1" min="1"></div></td>' +'<td><button class="remove-product" onclick="removeTR()">Remove</button></td>' + '<td id="totalPriceTR"> ' + TRprice + '</tr>';
	}
	function removeTR()
	{
		localStorage.removeItem("08Game");
		localStorage.removeItem("08Price");
		location.reload();
	}
	function saveButtonTR()
	{
			let totalPriceContentTR = document.getElementById("totalPriceTR");
			let x = document.getElementById("quantityValueTR").value;
			let totalPriceTR = TRprice * x;
			totalPriceContentTR.textContent = totalPriceTR;
	}
//End of Tomb Raider

//The Forest
if(TheForest == "The Forest")
	{
		let name = TheForest;
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Adventure/GameImages/TheForest.webp"></td>' + '<td>' + name +'</td>' + '<td>' + TheForestprice + '</td>' + '<td><div id="product-quantity"><input onclick="saveButtonTheForest()" onkeyup="saveButtonTheForest()" type="number" id="quantityValueTheForest" value="1" min="1"></div></td>' +'<td><button class="remove-product" onclick="removeTheForest()">Remove</button></td>' + '<td id="totalPriceTheForest"> ' + TheForestprice + '</tr>';
	}
	function removeTheForest()
	{
		localStorage.removeItem("09Game");
		localStorage.removeItem("09Price");
		location.reload();
	}
	function saveButtonTheForest()
	{
			let totalPriceContentTheForest = document.getElementById("totalPriceTheForest");
			let x = document.getElementById("quantityValueTheForest").value;
			let totalPriceTheForest = TheForestprice * x;
			totalPriceContentTheForest.textContent = totalPriceTheForest;
	}
//End fo The Forest

//Ark
if(ARK == "ARK: Survival Evolved")
	{
		let name = ARK;
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Adventure/GameImages/ARK.webp"></td>' + '<td>' + name +'</td>' + '<td>' + ARKprice + '</td>' + '<td><div id="product-quantity"><input onclick="saveButtonARK()" onkeyup="saveButtonARK()" type="number" id="quantityValueARK" value="1" min="1"></div></td>' +'<td><button class="remove-product" onclick="removeARK()">Remove</button></td>' + '<td id="totalPriceARK"> ' + ARKprice + '</tr>';
	}
	function removeARK()
	{
		localStorage.removeItem("10Game");
		localStorage.removeItem("10Price");
		location.reload();
	}
	function saveButtonARK()
	{
			let totalPriceContentARK = document.getElementById("totalPriceARK");
			let x = document.getElementById("quantityValueARK").value;
			let totalPriceARK = ARKprice * x;
			totalPriceContentARK.textContent = totalPriceARK;
	}
//End of Ark


//MMO Games (A.H-L)
var elderScrolls = localStorage.getItem("11Game");
var VRChat = localStorage.getItem("12Game");
var Planetside2 = localStorage.getItem("13Game");
var FinalFantasy = localStorage.getItem("14Game");
var Runescape= localStorage.getItem("15Game");

var elderScrollsprice = localStorage.getItem("11Price");
var VRChatprice = localStorage.getItem("12Price");
var Planetside2price = localStorage.getItem("13Price");
var FinalFantasyprice = localStorage.getItem("14Price");
var Runescapeprice = localStorage.getItem("15Price");

//Elder Scrolls
if(elderScrolls == "The Elder Scrolls Online")
	{
		let name = elderScrolls;
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/MMO/GameImages/ElderScrolls.webp"></td>' + '<td>' + name +'</td>' + '<td>' + elderScrollsprice + '</td>' + '<td><div id="product-quantity"><input onclick="saveButtonelderScrolls()" onkeyup="saveButtonelderScrolls()" type="number" id="quantityValueelderScrolls" value="1" min="1"></div></td>' +'<td><button class="remove-product" onclick="removeelderScrolls()">Remove</button></td>' + '<td id="totalPriceelderScrolls"> ' + elderScrollsprice + '</tr>';
	}
	function removeelderScrolls()
	{
		localStorage.removeItem("11Game");
		localStorage.removeItem("11Price");
		location.reload();
	}
	function saveButtonelderScrolls()
	{
			let totalPriceContentelderScrolls = document.getElementById("totalPriceelderScrolls");
			let x = document.getElementById("quantityValueelderScrolls").value;
			let totalPriceelderScrolls = elderScrollsprice * x;
			totalPriceContentelderScrolls.textContent = totalPriceelderScrolls;
	}
//End of Elder Scrolls

//VR Chat
if(VRChat == "VRChat")
	{
		let name = VRChat;
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/MMO/GameImages/VRChat.jpg"></td>' + '<td>' + name +'</td>' + '<td>' + VRChatprice + '</td>' + '<td><div id="product-quantity"><input onclick="saveButtonVRChat()" onkeyup="saveButtonVRChat()" type="number" id="quantityValueVRChat" value="1" min="1"></div></td>' +'<td><button class="remove-product" onclick="removeVRChat()">Remove</button></td>' + '<td id="totalPriceVRChat"> ' + VRChatprice + '</tr>';
	}
	function removeVRChat()
	{
		localStorage.removeItem("12Game");
		localStorage.removeItem("12Price");
		location.reload();
	}
	function saveButtonVRChat()
	{
			let totalPriceContentVRChat = document.getElementById("totalPriceVRChat");
			let x = document.getElementById("quantityValueVRChat").value;
			let totalPriceVRChat = VRChatprice * x;
			totalPriceContentVRChat.textContent = totalPriceVRChat;
	}
//End of VR Chat

//PlanetSide 2
if(Planetside2 == "Planetside 2")
	{
		let name = Planetside2;
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/MMO/GameImages/PlanetSide2.png"></td>' + '<td>' + name +'</td>' + '<td>' + Planetside2price + '</td>' + '<td><div id="product-quantity"><input onclick="saveButtonPlanetside2()" onkeyup="saveButtonPlanetside2()" type="number" id="quantityValuePlanetside2" value="1" min="1"></div></td>' +'<td><button class="remove-product" onclick="removePlanetside2()">Remove</button></td>' + '<td id="totalPricePlanetside2"> ' + Planetside2price + '</tr>';
	}
	function removePlanetside2()
	{
		localStorage.removeItem("13Game");
		localStorage.removeItem("13Price");
		location.reload();
	}
	function saveButtonPlanetside2()
	{
			let totalPriceContentPlanetside2 = document.getElementById("totalPricePlanetside2");
			let x = document.getElementById("quantityValuePlanetside2").value;
			let totalPricePlanetside2 = Planetside2price * x;
			totalPriceContentPlanetside2.textContent = totalPricePlanetside2;
	}
//End of Planetside 2

//FinalFantasy
if(FinalFantasy == "Final Fantasy XIV")
	{
		let name = FinalFantasy;
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/MMO/GameImages/FinalFantasyOnline.webp"></td>' + '<td>' + name +'</td>' + '<td>' + FinalFantasyprice + '</td>' + '<td><div id="product-quantity"><input onclick="saveButtonFinalFantasy()" onkeyup="saveButtonFinalFantasy()" type="number" id="quantityValueFinalFantasy" value="1" min="1"></div></td>' +'<td><button class="remove-product" onclick="removeFinalFantasy()">Remove</button></td>' + '<td id="totalPriceFinalFantasy"> ' + FinalFantasyprice + '</tr>';
	}
	function removeFinalFantasy()
	{
		localStorage.removeItem("14Game");
		localStorage.removeItem("14Price");
		location.reload();
	}
	function saveButtonFinalFantasy()
	{
			let totalPriceContentFinalFantasy = document.getElementById("totalPriceFinalFantasy");
			let x = document.getElementById("quantityValueFinalFantasy").value;
			let totalPriceFinalFantasy = FinalFantasyprice * x;
			totalPriceContentFinalFantasy.textContent = totalPriceFinalFantasy;
	}
//End of FinalFantasy

//Runescape
if(Runescape == "Runescape")
	{
		let name = Runescape;
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/MMO/GameImages/Runescape.webp"></td>' + '<td>' + name +'</td>' + '<td>' + Runescapeprice + '</td>' + '<td><div id="product-quantity"><input onclick="saveButtonRunescape()" onkeyup="saveButtonRunescape()" type="number" id="quantityValueRunescape" value="1" min="1"></div></td>' +'<td><button class="remove-product" onclick="removeRunescape()">Remove</button></td>' + '<td id="totalPriceRunescape"> ' + Runescapeprice + '</tr>';
	}
	function removeRunescape()
	{
		localStorage.removeItem("15Game");
		localStorage.removeItem("15Price");
		location.reload();
	}
	function saveButtonRunescape()
	{
			let totalPriceContentRunescape = document.getElementById("totalPriceRunescape");
			let x = document.getElementById("quantityValueRunescape").value;
			let totalPriceRunescape = Runescapeprice * x;
			totalPriceContentRunescape.textContent = totalPriceRunescape;
	}
//End of Runescape