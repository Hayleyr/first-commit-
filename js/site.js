// JavaScript Document

document.addEventListener("DOMContentLoaded", pageSetup);
var lastVisibleItem ;

function pageSetup(){
	var submitButton = document.getElementById("formSubmit");
		submitButton.addEventListener("click", onCheckForm);

}

function onCheckForm(event)
{
	event.preventDefault();
	//preventDefault keeps the form from submitting
	
	var selectSection = document.getElementById("sup");
	//grabs the option menu
	var selectedItem = selectSection.options[selectSection.selectedIndex].value;
	//grabs the selected item's value
	//selected index is the number starting from 0 
	//console.log(selectedItem);
	
	 
	
	switch (selectedItem)
	
	{
		
		case "brooklyn":
			
			document.getElementById('brooklyn').style.visibility = "visible";
			if(lastVisibleItem != null){
				lastVisibleItem.style.visibility = "hidden";
				}
				lastVisibleItem = document.getElementById('brooklyn');
			console.log("brooklyn was selected");			
			

			break;
			
		case "manhattan":
			 
			
			document.getElementById('manhattan').style.display = "block";
			if(lastVisibleItem != null){
				lastVisibleItem.style.display = "none";
			}
			lastVisibleItem = document.getElementById('manhattan');
			console.log("manhattan was selected");
			break;
	
		case "bronx":
			 
			
			document.getElementById('bronx').style.visibility = "visible";
			if(lastVisibleItem != null){
				lastVisibleItem.style.visibility = "hidden";
			}
			lastVisibleItem = document.getElementById('bronx');
			console.log("bronx was selected");
			break;
	
		case "queens":
			 
			
			document.getElementById('queens').style.visibility = "visible";
			if(lastVisibleItem != null){
				lastVisibleItem.style.visibility = "hidden";
			}
			lastVisibleItem = document.getElementById('queens');
			console.log("queens was selected");
			break;
	
	
			case "statenisland":
			 
			
			document.getElementById('statenisland').style.visibility = "visible";
			if(lastVisibleItem != null){
				lastVisibleItem.style.visibility = "hidden";
			}
			lastVisibleItem = document.getElementById('statenisland');
			console.log("statenisland was selected");
			break;
	
	}
	
	
	

}

