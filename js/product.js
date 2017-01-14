//Widget Objects
var widget_1 = {
	name: "Widget#1",	
	img: "images/widget-1.jpg",
	price: "$111,111",
	description: "Description"
}
var widget_2 = {
	name: "Widget #2",	
	img: "images/widget-1.jpg",
	price: "$222,222",
	description: "Description"
}
var widget_3 = {
	name: "Widget #3",	
	img: "images/widget-1.jpg",
	price: "$333,333",
	description: "Description"
}
var widget_4 = {
	name: "Widget #4",	
	img: "images/widget-1.jpg",
	price: "$444,444",
	description: "Description"
}
var widget_5 = {
	name: "Widget #5",	
	img: "images/widget-1.jpg",
	price: "$555,555",
	description: "Description"
}
var widget_6 = {
	name: "Widget #6",	
	img: "images/widget-1.jpg",
	price: "$666,666",
	description: "Description"
}
var widget_7 = {
	name: "Widget #7",	
	img: "images/widget-1.jpg",
	price: "$777,777",
	description: "Description"
}
var widget_8 = {
	name: "Widget #8",	
	img: "images/widget-1.jpg",
	price: "$888,888",
	description: "Description"
}

//Array of products
var products = [
	widget_1,
	widget_2,
	widget_3,
	widget_4,
	widget_5,
	widget_6,
	widget_7,
	widget_8
]







//Grab Section
var cardSection = document.getElementById("card-section");


//Create Card & Add it to section
function createCard () {
	var cardArt = document.createElement("article");
	cardArt.className = "product-card";
	cardArt.innerHTML = cardArt.innerHTML  + "<h3>" + products[i].name + "</h3>";
	cardArt.innerHTML  +=  "<img src=" + products[i].img + " class='product-img'>"; 
	cardArt.innerHTML  += "<h4>" + products[i].price + "</h4>";
	cardArt.innerHTML  += "<p>" + products[i].description + "</p>";
	cardSection.appendChild(cardArt)
}

//Loop through array and create card for each object
for (var i = 0; i < products.length; i++) {
	createCard(products[i]);

}
