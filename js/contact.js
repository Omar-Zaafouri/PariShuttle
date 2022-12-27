function check(){
	if(document.getElementById('nom').value == ""){
		alert("SVP Saisir votre Nom");
		return false;}
	if(document.getElementById('email').value == ""){
	    alert("SVP Saisir votre Email");
		return false;}
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var adress = document.getElementById('email').value;
	if(reg.test(adress) == false){
		alert('SVP votre email est Invalide');
	return false;}
	if(document.getElementById('observe').value == ""){
		alert("SVP remplir votre observation");
		return false;}
	}