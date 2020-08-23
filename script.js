window.onload= function () {
 var nav = document.getElementById("nav");
hideContent(1);
 nav.onclick = function(event){
	var target = event.target;
	if(target.className == 'tab'){
		var tab = document.getElementsByClassName("tab");
		var tabContent = document.getElementsByClassName("tabContent");
	for(var i=0; i<6; i++){
		if(target == tab[i]){
			for( var j = 0; j<6;j++){
				tabContent[j].classList.add("hide");
				tabContent[j].classList.remove("show");
				tab[j].classList.remove("active");
			}
				tabContent[i].classList.add("show");
				tabContent[i].classList.remove("hide");
				tab[i].classList.add("active");
				break;
				}
		}
	}
}


var trandyRow = document.getElementById("trandy-row");
trandyRow.addEventListener('mouseover', function(event){
	var target = event.target;
	if(target.className == 'clon'){
		var bag = document.getElementsByClassName('bag-wrapper_first-row');
		var but = document.getElementsByClassName('bag-wrapper_button');
		var ib = document.getElementsByClassName('clon');
		for(i=0; i<6;i++){
			if(target == ib[i]){
				bag[i].classList.add('show1');
				but[i].classList.add('show');
			}
		}
	}
});
trandyRow.addEventListener('mouseout', function(event){
	var target = event.target;
	if(target.className == 'clon'){
		var bag = document.getElementsByClassName('bag-wrapper_first-row');
		var but = document.getElementsByClassName('bag-wrapper_button');
		var ib = document.getElementsByClassName('clon');
		for(i=0; i<6;i++){
			if(target == ib[i]){
				bag[i].classList.remove('show1');
				but[i].classList.remove('show');
			}
		}
	}
});
}
function hideContent(n){
	var tab = document.getElementsByClassName("tab");
	var tabContent = document.getElementsByClassName("tabContent");
	for(var i = n; i < 6; i++){
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add('hide');
		tab[i].classList.remove('active');
	}
}
