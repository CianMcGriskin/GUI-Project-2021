//Start of checking is user is logged in - Javascript (C.McG.)
	//newButton is a HTML elemnt <div>
		var newButton = document.createElement('div');
	//newButton is a HTML elemnt <h5>
		var welcomeMessage = document.createElement('h5');
	//Get localStorage key 'Username' and set it to var
		var localStorageUsername = localStorage.getItem('Username');
	//Grabbing the element logout will appear in
		var x = document.getElementById("logout");
			
		var message = document.getElementById("welcomeMessage");
			
	//When you press logout, change the localStorage key 'Username'
		function logout()
		{
			//Removes key 'Username' from local storage and sets the key to null, and refreshed the page.
			window.localStorage.removeItem('Username');
			localStorage.setItem('Username', "null");
			location.reload();
		}
			
	//If logged in change the header
		if (localStorageUsername == 'username' || localStorageUsername == 'gamer312' || localStorageUsername == 'weirdturtle')
		{
			//adds a div to the ID "logout" and adds a button to the div
			x.append(newButton);
			newButton.innerHTML = '<button class="nav-link text-dark navbar-brand" id="appendedButton" onclick="logout()">Logout</button>';
			
			//adds a h1 element to the id welcomeMessage and adds a line of text to it.
			message.append(welcomeMessage);
			welcomeMessage.innerHTML = 'Welcome back, ' + localStorageUsername;
		}
//End of checking is user is logged in - Javascript