//Start of checking if user is logged in - Javascript (C.McG.)
	//newButton is a HTML elemnt <div>
		var newButton = document.createElement('div');
	//newButton is a HTML elemnt <h5>
		var welcomeMessage = document.createElement('h5');
	//Get localStorage key 'Username' and set it to var
		var localStorageUsername = localStorage.getItem('Username');
		//Get localStorage key 'Password' and set it to var
		var localStoragePassword = localStorage.getItem('Password');
	//Grabbing the element logout will appear in
		var x = document.getElementById("logout");
	//Preventing each page from having an error bc theres no loginPage id
		var loginPageCheck = document.getElementById('loginPage');
			
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
			welcomeMessage.innerHTML = '<b>Welcome back, </b>' + localStorageUsername + "<b>!</b>";
			
			//changes login page to an information center for your profile (A.H-L)
			if(document.getElementById('loginPage') != null) //errors occur on websites other than User panel when this is not there
			{
			var tempCoveredPassword = ""; 
			for(var i = 1; i <= localStoragePassword.length;i++)
			{
				tempCoveredPassword += "*"
			}
			loginPage.innerHTML = "<h2> <br> <br>&emsp; &emsp; Username = " + localStorageUsername + " <br> <br> &emsp; &emsp; Password&nbsp; = <div style=\"display: inline;\"id=\"showPassword\">" + tempCoveredPassword + "</div> </h2> <br><h3>&emsp; &nbsp;&nbsp; &emsp;<input type=\"checkbox\" onclick=\"showPasswordAfterLogin()\">&nbsp;&nbsp;Show Password</h3>";
			//Show Password	(C.McGr)
			function showPasswordAfterLogin()
			{
				let x = document.getElementById("showPassword");
				if (x.textContent == localStoragePassword)
				{
					x.textContent = tempCoveredPassword;
				}
				else 
				{
					x.textContent = localStoragePassword;
				}
			}
			}
		}
//End of checking is user is logged in - Javascript