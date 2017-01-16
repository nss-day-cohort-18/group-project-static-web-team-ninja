//Widget Objects
var widget_1 = {
	name: "Widget#1",	
	img: "images/widget-1.jpg",
	price: "$111,111",
	description: "This is our first widget."
}
var widget_2 = {
	name: "Widget #2",	
	img: "images/widget-2.png",
	price: "$222,222",
	description: "Worked hard to make #2!"
}
var widget_3 = {
	name: "Widget #3",	
	img: "images/widget-3.jpg",
	price: "$333,333",
	description: "I have no idea what this even is..."
}
var widget_4 = {
	name: "Widget #4",	
	img: "images/widget-4.jpg",
	price: "$444,444",
	description: "Drill, drill, drill, drill, drill!"
}
var widget_5 = {
	name: "Widget #5",	
	img: "images/widget-5.jpg",
	price: "$555,555",
	description: "I'm not much of a coffee drinker, but here's one for you guys."
}
var widget_6 = {
	name: "Widget #6",	
	img: "images/widget-6.jpg",
	price: "$666,666",
	description: "I think this is some kind of ultrasound machine."
}
var widget_7 = {
	name: "Widget #7",	
	img: "images/widget-7.jpg",
	price: "$777,777",
	description: "Welcome to the future, where medical equipment floats."
}
var widget_8 = {
	name: "Widget #8",	
	img: "images/widget-8.jpg",
	price: "$888,888",
	description: "Something to do with sports or tennis. (Who doesn't enjoy some Andy Roddick?!)"
}

//Array of Objects
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







//Grab Section Element
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
