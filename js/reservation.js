	 function check(){
		if(document.getElementById('nom').value == ""){
	     alert("SVP Saisir votre Nom");
	    return false;}
		if(document.getElementById('prenom').value == ""){
		 alert("SVP Saisir votre Prenom");
			return false;}
		if((f3.sexe[0].checked==false)&&(f3.sexe[1].checked==false)){
			alert('Vous devez choisir une Sexe!!!');
		return false;}
		if(document.getElementById('email').value == ""){
		  alert("SVP Saisir votre Email");
		  return false;}		
			var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			var adress = document.getElementById('email').value;
			if(reg.test(adress) == false){
				alert("SVP votre Email est Invalide");
				return false;
			}
		if(document.getElementById('ville').value == ""){
			alert("SVP Saisir votre Ville");
			return false;}
		if(document.getElementById('code').value == ""){
			alert("SVP Saisir votre Code Postal");
			return false;}
		if(document.getElementById('adresse').value == ""){
			alert("SVP Saisir votre Adresse");
			return false;}
		if(document.getElementById('tel').value == ""){
			alert("SVP Saisir votre N de Telephone");
			return false;}
		if(document.getElementById('observe').value == ""){
			alert("SVP Saisir votre N Observation");
			return false;}
	 }