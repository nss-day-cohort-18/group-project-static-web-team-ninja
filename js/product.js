//Widget Objects
var widget_1 = {
	name: "<article class='product-card'><h3>Widget#1</h3>",	
	img: "<img src='images/widget-1.jpg'class='product-img'>",
	price: "<h4>$999,999</h4>",
	description: "<p>Description</p></article>"
}

var widget_2 = {
	name: "e",	
	img: "f",
	price: "g",
	description: "h" 
}

var widget_3 = {
	name: "<h3>Widget#1</h3>",	
	img: "<img src='images/widget-1.jpg'class='product-img'>",
	price: "<h4>$999,999</h4>",
	description: "<p>Description</p>"
}

var products =[
	widget_1,
	widget_2,
	widget_3
]

var cardSection = document.getElementById("card-section") 

for (var i = 0; i < products.length; i++) {
	for (var property in products[i]) {
		



		cardSection.innerHTML += cardSection.(products[i][property]);
	}
}

// for (var i = 0; i < products.length; i++) {
// 	for (var property in products[i]) {
// 		cardSection.innerHTML += "<article class='product-card'>" + (products[i][property]) + "</article>";
// 	}
// }

// var widget_2 = {
// 	name: ;
// 	img: ;
// 	price: ;
// 	description: ; 
// }
// var widget_3 = {
// 	name: ;
// 	img: ;
// 	price: ;
// 	description: ; 
// }
// var widget_4 = {
// 	name: ;
// 	img: ;
// 	price: ;
// 	description: ; 
// }
// var widget_5 = {

// }
// var widget_6 = {

// }
// var widget_7 = {

// }
// var widget_8 = {

// }

// //Array of products
// var products = [
// 	widget_1,
// 	widget_2,
// 	widget_3,
// 	widget_4,
// 	widget_5,
// 	widget_6,
// 	widget_7,
// 	widget_8
// ]
