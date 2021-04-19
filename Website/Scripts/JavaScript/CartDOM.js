
var customers = document.getElementById('customers');

//Action
var CSGO = localStorage.getItem("01Game");
var GTA5 = localStorage.getItem("02Game");
var RS6 = localStorage.getItem("03Game");
var L4D = localStorage.getItem("04Game");
var warframe = localStorage.getItem("05Game");

let price = localStorage.getItem("01Price");
	//CSGO
	if(CSGO == "Counter-Strike Global Offensive")
	{
		let name = CSGO;
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Action/GameImages/CSGO.webp"></td>' + '<td>' + name +'</td>' + '<td>' + price + '</td>' + '<td><div id="product-quantity"><input type="number" id="quantityValue" value="1" min="1"></div> <button class="SaveButton" onclick="saveButton()">Save</button></td>' + '<td><button class="remove-product" onclick="removeCSGO()">Remove</button></td>' + '<td>'+ price + '</td></tr>';
	}
	
	function removeCSGO()
		{
			localStorage.removeItem("01Game");
			localStorage.removeItem("01Price");
			location.reload();
		}
		
	function saveButton()
		{
			let x = document.getElementById("quantityValue").value;
			var totalPrice = price * x;
			alert(totalPrice);
			customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Action/GameImages/CSGO.webp"></td>' + '<td>' + name +'</td>' + '<td>' + price + '</td>' + '<td><div id="product-quantity"><input type="number" id="quantityValue" value="1" min="1"></div> <button class="SaveButton" onclick="saveButton()">Save</button></td>' + '<td><button class="remove-product" onclick="removeCSGO()">Remove</button></td>' + '<td>'+ totalPrice + '</td></tr>';
		}
		
	//GTA5
	if(GTA5 == "Grand Theft Auto V")
	{
		let name = GTA5;
		let price = localStorage.getItem("02Price");
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Action/GameImages/GTA.webp"></td>' + '<td>' + name +'</td>' + '<td>' + price + '</td>' + '<td><div id="product-quantity"><input type="number" id="quantityValue" value="1" min="1"></div></td>' + '<td><button class="remove-product" onclick="removeCSGO()">Remove</button></td>';
		
		function removeGTA()
		{
			localStorage.removeItem("02Game");
			localStorage.removeItem("02Price");
			location.reload();
		}
	}
	
	//RS6
	if(RS6 == "Rainbow Six Siege")
	{
		let name = RS6;
		let price = localStorage.getItem("03Price");
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Action/GameImages/R6.webp"></td>' + '<td>' + name +'</td>' + '<td><div id="product-quantity"><input type="number" id="quantityValue" value="1" min="1"></div></td>' + '<td>' + price + '</td>' + '<td><button class="remove-product" onclick="removeRS6()">Remove</button></td>' + '</tr>';
	
		function removeRS6()
		{
			localStorage.removeItem("03Game");
			localStorage.removeItem("03Price");
			location.reload();
		}
	}
	
	
	if(L4D == "Left For Dead Two")
	{
		let name = L4D;
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Action/GameImages/L4D.jpg"></td>' + '<td>' + name +'</td>' + '<td><div id="product-quantity"><input type="number" id="quantityValue" value="1" min="1"></div></td>' + '<td>' + price + '</td>' + '<td><button class="remove-product" onclick="removeL4D()">Remove</button></td>' + '</tr>';
	
		function removeL4D()
		{
			localStorage.removeItem("04Game");
			localStorage.removeItem("04Price");
			location.reload();
		}
	}
	
	if(warframe == "Warframe")
	{
		let name = warframe;
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Action/GameImages/Warframe.png"></td>' + '<td>' + name +'</td>' + '<td><div id="product-quantity"><input type="number" id="quantityValue" value="1" min="1"></div></td>' + '<td>' + price + '</td>' + '<td><button class="remove-product" onclick="removeWarframe()">Remove</button></td>' + '</tr>';
	
		function removeWarframe()
		{
			localStorage.removeItem("05Game");
			localStorage.removeItem("05Price");
			location.reload();
		}
	}
//End of Action

//Adventure
var terraria = localStorage.getItem("06Game");
var witcher3 = localStorage.getItem("07Game");
var TR = localStorage.getItem("08Game");
var TForest = localStorage.getItem("09Game");
var ARK = localStorage.getItem("10Game");

if(terraria == "Terraria")
	{
		let name = terraria;
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Adventure/GameImages/Terraria.webp"></td>' + '<td>' + name +'</td>' + '<td><div id="product-quantity"><input type="number" id="quantityValue" value="1" min="1"></div></td>' + '<td>' + price + '</td>' + '<td><button class="remove-product" onclick="removeTerraria()">Remove</button></td>' + '</tr>';
	
		function removeTerraria()
		{
			localStorage.removeItem("06Game");
			localStorage.removeItem("06Price");
			location.reload();
		}
	}
	
if(witcher3 == "The Witcher 3: Wild Hunt")
	{
		let name = witcher3;
		customers.innerHTML+= '<tr>' + '<td><img id="thumbImages" src="GenreGames/Adventure/GameImages/Witcher3.webp"></td>' + '<td>' + name +'</td>' + '<td><div id="product-quantity"><input type="number" id="quantityValue" value="1" min="1"></div></td>' + '<td>' + price + '</td>' + '<td><button class="remove-product" onclick="removeWitcher3()">Remove</button></td>' + '</tr>';
	
		function removeWitcher3()
		{
			localStorage.removeItem("07Game");
			localStorage.removeItem("07Price");
			location.reload();
		}
	}