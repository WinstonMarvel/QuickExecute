
//Menu Item 2
var shellExecute = createMenuItem( {
  id: "1",
  title: "Execute Command",
  contexts: ["selection"]
}, menu_click);


//Menu Item 1
var folderOpen = createMenuItem ({
  id: "2",
  title: "Open this folder",
  contexts: ["selection"]
}, menu_click);




// Creating the menu items
function createMenuItem( menuObject, onclickHandler){
		menuObject.onclick = onclickHandler;
		chrome.contextMenus.create(menuObject);
		return menuObject;
}


//Deciding what happens when there's a click
function menu_click(info, tab){
var request = "http://localhost/quick-execute.php?";
console.log("This works");
	switch(info.menuItemId){

		case "1":
		request += "method=execute&shell="+info.selectionText;
		console.log(request);
		break;

		case "2":
		request += "method=open&path="+info.selectionText;
		console.log(request);
		break;

		default:
		console.log("none");
		break;



	}

// Sending the get request to the server
window.open(request);

}