
var customers = document.getElementById('customers');
let totalValueOfEverything = 0;
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
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Action/GameImages/CSGO.webp"></td>' + '<td>' + name +'</td>' + '<td>' + CSGOprice + '</td>' + '<td><div id="product-quantity"><input type="number" id="quantityValueCSGO" onkeyup="saveButtonCSGO()" onclick="saveButtonCSGO()" value="1" min="1"></div> </td>' + '<td><button class="remove-product" onclick="removeCSGO()">Remove</button></td>' + '<td id="totalPriceCSGO">' + CSGOprice + '</td></tr>';
		updateTotalValue(CSGOprice, 1);
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
		let totalPriceContentCSGO = document.getElementById("totalPriceCSGO");
		let x = document.getElementById("quantityValueCSGO").value;
		let totalPriceCSGO = CSGOprice * x;
		totalPriceCSGO = Math.round(totalPriceCSGO * 100) / 100;
		totalPriceContentCSGO.textContent = totalPriceCSGO;
		updateTotalValue(totalPriceCSGO, x);
	}
//End of CSGO

//GTA5
if(GTA5 == "Grand Theft Auto V")
{
	let name = GTA5;
	customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Action/GameImages/GTA.webp"></td>' + '<td>' + name +'</td>' + '<td>' + GTAprice + '</td>' + '<td><div id="product-quantity"><input onclick="saveButtonGTA()" onkeyup="saveButtonGTA()"type="number" id="quantityValueGTA" value="1" min="1"></div></td>' + '<td><button class="remove-product" onclick="removeGTA()">Remove</button></td>' + '<td id="totalPriceGTA">' + GTAprice + '</td></tr>';
	updateTotalValue(GTAprice, 1);
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
	totalPriceGTA = Math.round(totalPriceGTA * 100) / 100;
	totalPriceContentGTA.textContent = totalPriceGTA;
	updateTotalValue(totalPriceGTA, x);
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
	totalPriceRS6 = Math.round(totalPriceRS6 * 100) / 100;
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
	totalPriceL4D = Math.round(totalPriceL4D * 100) / 100;
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
	totalPricewarframe = Math.round(totalPricewarframe * 100) / 100;
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
			totalPriceTerraria = Math.round(totalPriceterraria * 100) / 100;
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
			totalPricewitcher3 = Math.round(totalPricewitcher3 * 100) / 100;
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
			totalPriceTR = Math.round(totalPriceTR * 100) / 100;
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
			totalPriceTheForest = Math.round(totalPriceTheForest * 100) / 100;
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
			totalPriceARK = Math.round(totalPriceARK * 100) / 100;
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
			totalPriceelderScrolls = Math.round(totalPriceelderScrolls * 100) / 100;
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
			totalPriceVRChat = Math.round(totalPriceVRChat * 100) / 100;
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
			totalPricePlanetside2 = Math.round(totalPricePlanetside2 * 100) / 100;
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
			totalPriceFinalFantasy = Math.round(totalPriceFinalFantasy * 100) / 100;
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
			totalPriceRunescape = Math.round(totalPriceRunescape * 100) / 100;
			totalPriceContentRunescape.textContent = totalPriceRunescape;
	}
//End of Runescape

//Racing Games (A.H-L)
var AssettoCorsa = localStorage.getItem("16Game");
var BeamNG = localStorage.getItem("17Game");
var F1 = localStorage.getItem("18Game");
var CarXDrift = localStorage.getItem("19Game");
var TheCrew2= localStorage.getItem("20Game");

var AssettoCorsaprice = localStorage.getItem("16Price");
var BeamNGprice = localStorage.getItem("17Price");
var F1price = localStorage.getItem("18Price");
var CarXDriftprice = localStorage.getItem("19Price");
var TheCrew2price = localStorage.getItem("20Price");

//AssettoCorsa
if(AssettoCorsa == "Assetto Corsa")
	{
		let name = AssettoCorsa;
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Racing/GameImages/AssettoCorsa.jpg"></td>' + '<td>' + name +'</td>' + '<td>' + AssettoCorsaprice + '</td>' + '<td><div id="product-quantity"><input onclick="saveButtonAssettoCorsa()" onkeyup="saveButtonAssettoCorsa()" type="number" id="quantityValueAssettoCorsa" value="1" min="1"></div></td>' +'<td><button class="remove-product" onclick="removeAssettoCorsa()">Remove</button></td>' + '<td id="totalPriceAssettoCorsa"> ' + AssettoCorsaprice + '</tr>';
	}
	function removeAssettoCorsa()
	{
		localStorage.removeItem("16Game");
		localStorage.removeItem("16Price");
		location.reload();
	}
	function saveButtonAssettoCorsa() 
	{
			let totalPriceContentAssettoCorsa = document.getElementById("totalPriceAssettoCorsa");
			let x = document.getElementById("quantityValueAssettoCorsa").value;
			let totalPriceAssettoCorsa = AssettoCorsaprice * x;
			totalPriceAssettoCorsa = Math.round(totalPriceAssettoCorsa * 100) / 100;
			totalPriceContentAssettoCorsa.textContent = totalPriceAssettoCorsa;
	}
//End of AssettoCorsa

//BeamNG.Drive
if(BeamNG == "BeamNG.drive")
	{
		let name = BeamNG;
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Racing/GameImages/BeamNG.webp"></td>' + '<td>' + name +'</td>' + '<td>' + BeamNGprice + '</td>' + '<td><div id="product-quantity"><input onclick="saveButtonBeamNG()" onkeyup="saveButtonBeamNG()" type="number" id="quantityValueBeamNG" value="1" min="1"></div></td>' +'<td><button class="remove-product" onclick="removeBeamNG()">Remove</button></td>' + '<td id="totalPriceBeamNG"> ' + BeamNGprice + '</tr>';
	}
	function removeBeamNG()
	{
		localStorage.removeItem("17Game");
		localStorage.removeItem("17Price");
		location.reload();
	}
	function saveButtonBeamNG() 
	{
			let totalPriceContentBeamNG = document.getElementById("totalPriceBeamNG");
			let x = document.getElementById("quantityValueBeamNG").value;
			let totalPriceBeamNG = BeamNGprice * x;
			totalPriceBeamNG = Math.round(totalPriceBeamNG * 100) / 100;
			totalPriceContentBeamNG.textContent = totalPriceBeamNG;
	}
//End of BeamNG.Drive

//F1
if(F1 == "F1 2020")
	{
		let name = F1;
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Racing/GameImages/F1.jpg"></td>' + '<td>' + name +'</td>' + '<td>' + F1price + '</td>' + '<td><div id="product-quantity"><input onclick="saveButtonF1()" onkeyup="saveButtonF1()" type="number" id="quantityValueF1" value="1" min="1"></div></td>' +'<td><button class="remove-product" onclick="removeF1()">Remove</button></td>' + '<td id="totalPriceF1"> ' + F1price + '</tr>';
	}
	function removeF1()
	{
		localStorage.removeItem("18Game");
		localStorage.removeItem("18Price");
		location.reload();
	}
	function saveButtonF1() 
	{
			let totalPriceContentF1 = document.getElementById("totalPriceF1");
			let x = document.getElementById("quantityValueF1").value;
			let totalPriceF1 = F1price * x;
			totalPriceF1 = Math.round(totalPriceF1 * 100) / 100;
			totalPriceContentF1.textContent = totalPriceF1;
	}
//End of F1

//CarXDrift
if(CarXDrift == "CarX Drift Racing Online")
	{
		let name = CarXDrift;
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Racing/GameImages/CarX.webp"></td>' + '<td>' + name +'</td>' + '<td>' + CarXDriftprice + '</td>' + '<td><div id="product-quantity"><input onclick="saveButtonCarXDrift()" onkeyup="saveButtonCarXDrift()" type="number" id="quantityValueCarXDrift" value="1" min="1"></div></td>' +'<td><button class="remove-product" onclick="removeCarXDrift()">Remove</button></td>' + '<td id="totalPriceCarXDrift"> ' + CarXDriftprice + '</tr>';
	}
	function removeCarXDrift()
	{
		localStorage.removeItem("19Game");
		localStorage.removeItem("19Price");
		location.reload();
	}
	function saveButtonCarXDrift() 
	{
			let totalPriceContentCarXDrift = document.getElementById("totalPriceCarXDrift");
			let x = document.getElementById("quantityValueCarXDrift").value;
			let totalPriceCarXDrift = CarXDriftprice * x;
			totalPriceCarXDrift = Math.round(totalPriceCarXDrift * 100) / 100;
			totalPriceContentCarXDrift.textContent = totalPriceCarXDrift;
	}
	//End of CarXDrift
	
	//TheCrew2
if(TheCrew2 == "The Crew 2")
	{
		let name = TheCrew2;
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Racing/GameImages/TheCrew2.webp"></td>' + '<td>' + name +'</td>' + '<td>' + TheCrew2price + '</td>' + '<td><div id="product-quantity"><input onclick="saveButtonTheCrew2()" onkeyup="saveButtonTheCrew2()" type="number" id="quantityValueTheCrew2" value="1" min="1"></div></td>' +'<td><button class="remove-product" onclick="removeTheCrew2()">Remove</button></td>' + '<td id="totalPriceTheCrew2"> ' + TheCrew2price + '</tr>';
	}
	function removeTheCrew2()
	{
		localStorage.removeItem("20Game");
		localStorage.removeItem("20Price");
		location.reload();
	}
	function saveButtonTheCrew2() 
	{
			let totalPriceContentTheCrew2 = document.getElementById("totalPriceTheCrew2");
			let x = document.getElementById("quantityValueTheCrew2").value;
			let totalPriceTheCrew2 = TheCrew2price * x;
			totalPriceTheCrew2 = Math.round(totalPriceTheCrew2 * 100) / 100;
			totalPriceContentTheCrew2.textContent = totalPriceTheCrew2;
	}
//End of TheCrew2

//Strategy Games (A.H-L)
var Dota2 = localStorage.getItem("21Game");
var CivilizationV = localStorage.getItem("22Game");
var AgeOfEmpiresII = localStorage.getItem("23Game");
var BTD6 = localStorage.getItem("24Game");
var RimWorld= localStorage.getItem("25Game");

var Dota2price = localStorage.getItem("21Price");
var CivilizationVprice = localStorage.getItem("22Price");
var AgeOfEmpiresIIprice = localStorage.getItem("23Price");
var BTD6price = localStorage.getItem("24Price");
var RimWorldprice = localStorage.getItem("25Price");

//Dota2
if(Dota2 == "Dota 2")
	{
		let name = Dota2;
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Strategy/GameImages/Dota2.jpg"></td>' + '<td>' + name +'</td>' + '<td>' + Dota2price + '</td>' + '<td><div id="product-quantity"><input onclick="saveButtonDota2()" onkeyup="saveButtonDota2()" type="number" id="quantityValueDota2" value="1" min="1"></div></td>' +'<td><button class="remove-product" onclick="removeDota2()">Remove</button></td>' + '<td id="totalPriceDota2"> ' + Dota2price + '</tr>';
	}
	function removeDota2()
	{
		localStorage.removeItem("21Game");
		localStorage.removeItem("21Price");
		location.reload();
	}
	function saveButtonDota2() 
	{
			let totalPriceContentDota2 = document.getElementById("totalPriceDota2");
			let x = document.getElementById("quantityValueDota2").value;
			let totalPriceDota2 = Dota2price * x;
			totalPriceDota2 = Math.round(totalPriceDota2 * 100) / 100;
			totalPriceContentDota2.textContent = totalPriceDota2;
	}
//End of Dota2

//CivilizationV
if(CivilizationV == "Civilization V")
	{
		let name = CivilizationV;
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Strategy/GameImages/Civilization.webp"></td>' + '<td>' + name +'</td>' + '<td>' + CivilizationVprice + '</td>' + '<td><div id="product-quantity"><input onclick="saveButtonCivilizationV()" onkeyup="saveButtonCivilizationV()" type="number" id="quantityValueCivilizationV" value="1" min="1"></div></td>' +'<td><button class="remove-product" onclick="removeCivilizationV()">Remove</button></td>' + '<td id="totalPriceCivilizationV"> ' + CivilizationVprice + '</tr>';
	}
	function removeCivilizationV()
	{
		localStorage.removeItem("22Game");
		localStorage.removeItem("22Price");
		location.reload();
	}
	function saveButtonCivilizationV() 
	{
			let totalPriceContentCivilizationV = document.getElementById("totalPriceCivilizationV");
			let x = document.getElementById("quantityValueCivilizationV").value;
			let totalPriceCivilizationV = CivilizationVprice * x;
			totalPriceCivilizationV = Math.round(totalPriceCivilizationV * 100) / 100;
			totalPriceContentCivilizationV.textContent = totalPriceCivilizationV;
	}
//End of CivilizationV

//AgeOfEmpiresII
if(AgeOfEmpiresII == "Age of Empires II")
	{
		let name = AgeOfEmpiresII;
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Strategy/GameImages/AgeOfEmpires.webp"></td>' + '<td>' + name +'</td>' + '<td>' + AgeOfEmpiresIIprice + '</td>' + '<td><div id="product-quantity"><input onclick="saveButtonAgeOfEmpiresII()" onkeyup="saveButtonAgeOfEmpiresII()" type="number" id="quantityValueAgeOfEmpiresII" value="1" min="1"></div></td>' +'<td><button class="remove-product" onclick="removeAgeOfEmpiresII()">Remove</button></td>' + '<td id="totalPriceAgeOfEmpiresII"> ' + AgeOfEmpiresIIprice + '</tr>';
	}
	function removeAgeOfEmpiresII()
	{
		localStorage.removeItem("23Game");
		localStorage.removeItem("23Price");
		location.reload();
	}
	function saveButtonAgeOfEmpiresII() 
	{
			let totalPriceContentAgeOfEmpiresII = document.getElementById("totalPriceAgeOfEmpiresII");
			let x = document.getElementById("quantityValueAgeOfEmpiresII").value;
			let totalPriceAgeOfEmpiresII = AgeOfEmpiresIIprice * x;
			totalPriceAgeOfEmpiresII = Math.round(totalPriceAgeOfEmpiresII * 100) / 100;
			totalPriceContentAgeOfEmpiresII.textContent = totalPriceAgeOfEmpiresII;
	}
//End of AgeOfEmpiresII

//BTD6
if(BTD6 == "Bloons TD6")
	{
		let name = BTD6;
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Strategy/GameImages/BloonsTD6.webp"></td>' + '<td>' + name +'</td>' + '<td>' + BTD6price + '</td>' + '<td><div id="product-quantity"><input onclick="saveButtonBTD6()" onkeyup="saveButtonBTD6()" type="number" id="quantityValueBTD6" value="1" min="1"></div></td>' +'<td><button class="remove-product" onclick="removeBTD6()">Remove</button></td>' + '<td id="totalPriceBTD6"> ' + BTD6price + '</tr>';
	}
	function removeBTD6()
	{
		localStorage.removeItem("24Game");
		localStorage.removeItem("24Price");
		location.reload();
	}
	function saveButtonBTD6() 
	{
			let totalPriceContentBTD6 = document.getElementById("totalPriceBTD6");
			let x = document.getElementById("quantityValueBTD6").value;
			let totalPriceBTD6 = BTD6price * x;
			totalPriceBTD6 = Math.round(totalPriceBTD6 * 100) / 100;
			totalPriceContentBTD6.textContent = totalPriceBTD6;
	}
//End of BTD6

//RimWorld
if(RimWorld == "RimWorld")
	{
		let name = RimWorld;
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Strategy/GameImages/RimWorld.webp"></td>' + '<td>' + name +'</td>' + '<td>' + RimWorldprice + '</td>' + '<td><div id="product-quantity"><input onclick="saveButtonRimWorld()" onkeyup="saveButtonRimWorld()" type="number" id="quantityValueRimWorld" value="1" min="1"></div></td>' +'<td><button class="remove-product" onclick="removeRimWorld()">Remove</button></td>' + '<td id="totalPriceRimWorld"> ' + RimWorldprice + '</tr>';
	}
	function removeRimWorld()
	{
		localStorage.removeItem("25Game");
		localStorage.removeItem("25Price");
		location.reload();
	}
	function saveButtonRimWorld() 
	{
			let totalPriceContentRimWorld = document.getElementById("totalPriceRimWorld");
			let x = document.getElementById("quantityValueRimWorld").value;
			let totalPriceRimWorld = RimWorldprice * x;
			totalPriceRimWorld = Math.round(totalPriceRimWorld * 100) / 100;
			totalPriceContentRimWorld.textContent = totalPriceRimWorld;
	}
//End of RimWorld


function updateTotalValue(inputValue, quantityValue)
{
	let calculation = inputValue * quantityValue;
	totalValueOfEverything = totalValueOfEverything + calculation;
}