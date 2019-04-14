function filter() {

  var input, filter, itemList, item, h, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  itemList = document.getElementById("itemList");
  item = itemList.getElementsByClassName("itemBox");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < item.length; i++) {
    h = item[i].getElementsByTagName("h2")[0];
	id = item[i].getElementsByClassName("id")[0];
    txtValue = h.textContent;
	lookupCode = id.textContent;
	
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
		item[i].style.display = "";
    }
	else if (lookupCode.toUpperCase().indexOf(filter) > -1) {
		item[i].style.display = "";
	}
	else {
		item[i].style.display = "none";
    }
  }
}

function searchSubmit() {
	var input, filter, itemList, item, h, i, txtValue;
	input = document.getElementById('searchInput');
	filter = input.value.toUpperCase();
	itemList = document.getElementById("itemList");
	item = itemList.getElementsByClassName("itemBox");

	for (i = 0; i < item.length; i++) {
			h = item[i].getElementsByTagName("h2")[0];
			id = item[i].getElementsByClassName("id")[0];
			txtValue = h.textContent;
			lookupCode = id.textContent;
		
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			item[i].click();
			console.log("search hit");
			return;
		}
		else if (lookupCode.toUpperCase().indexOf(filter) > -1) {
			item[i].click();
			console.log("search hit");
			return;
		} else {
			console.log("not found");
		}
	}
}