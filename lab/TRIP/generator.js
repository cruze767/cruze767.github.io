
console.log("hello world");

var gifs = ["http://media.giphy.com/media/l41m0D66I0lUQZIQw/giphy.gif",
	"http://media.giphy.com/media/3o85xxKWqNwu66GlMY/giphy.gif",
	"http://media.giphy.com/media/3o85xJIW9bZQFtKgsU/giphy.gif"
	];
	


var selectedgif = false;


$(".button").click(function() {
	
  
  $(".box").html('<img src="' + gifs[Math.floor(Math.random()*gifs.length)]+ '">');
  

});

