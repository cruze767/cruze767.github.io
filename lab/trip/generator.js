
console.log("hello world");

var gifs = ["http://media.giphy.com/media/l41m0D66I0lUQZIQw/giphy.gif",
	"http://media.giphy.com/media/3o85xxKWqNwu66GlMY/giphy.gif",
	"http://media.giphy.com/media/3o85xJIW9bZQFtKgsU/giphy.gif",
	"http://media.giphy.com/media/xTiTnIA85uo0UtHd9C/giphy.gif",
	"http://media.giphy.com/media/l41lSS4Phme3VDKZa/giphy.gif",
	"http://media.giphy.com/media/xTiTnDP8WpEsyitxTO/giphy.gif",
	"http://media.giphy.com/media/3oEduKC1gvOmgY46Ag/giphy.gif"
	
	];
	


var selectedgif = false;


$(".button").click(function() {
	
  
  $(".box").html('<img src="' + gifs[Math.floor(Math.random()*gifs.length)]+ '">');
  

});

