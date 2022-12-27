	 function verif(){
		if((f1.navette.selectedIndex!=1)&&(f1.navette.selectedIndex!=2)&&(f1.navette.selectedIndex!=3)){
			alert('Vous devez choisir une navette!!!');
		return false;}
		
		if((f1.trajet[0].checked==false)&&(f1.trajet[1].checked==false)){
			alert('Vous devez choisir une Trajet!!!');
		return false;}
		if((f1.Depart.selectedIndex!=1)&&(f1.Depart.selectedIndex!=2)&&(f1.Depart.selectedIndex!=3)){
			alert('Vous devez choisir une lieu de Depart !!!');
		return false;}
		if((f1.Destination.selectedIndex!=1)&&(f1.Destination.selectedIndex!=2)&&(f1.Destination.selectedIndex!=3)){
			alert('Vous devez choisir une lieu de desitination !!!');
		return false;}
		if((f1.Nombre.selectedIndex!=1)&&(f1.Nombre.selectedIndex!=2)&&(f1.Nombre.selectedIndex!=3)){
			alert('Vous devez choisir Nombre de Personne !!!');
		return false;}
	   
	 }