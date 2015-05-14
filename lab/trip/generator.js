
console.log("hello world");

var gifs = ["http://media.giphy.com/media/l41m0D66I0lUQZIQw/giphy.gif",
	"http://media.giphy.com/media/3o85xxKWqNwu66GlMY/giphy.gif",
	"http://media.giphy.com/media/3o85xJIW9bZQFtKgsU/giphy.gif",
	"http://media.giphy.com/media/xTiTnIA85uo0UtHd9C/giphy.gif",
	"http://media.giphy.com/media/l41lSS4Phme3VDKZa/giphy.gif",
	"http://media.giphy.com/media/xTiTnDP8WpEsyitxTO/giphy.gif",
	"http://media.giphy.com/media/3oEduKC1gvOmgY46Ag/giphy.gif",
	"http://media.giphy.com/media/l41lNqEeM4aHMwK0E/giphy.gif",
	"http://media.giphy.com/media/l41lOIaX2Ri0grAhG/giphy.gif",
	"http://media.giphy.com/media/3o85xuFLynTZOcGQSI/giphy.gif",
	"http://media.giphy.com/media/3oEdv4OG24o7cRehvq/giphy.gif",
	"http://media.giphy.com/media/3oEdv6SgY5GZbygDbW/giphy.gif",
	"http://media.giphy.com/media/l41lZht6GAwpRUdqg/giphy.gif",
	"http://media.giphy.com/media/3oEdvbkwheRnc1Cg4E/giphy.gif",
	"http://media.giphy.com/media/l41lIjeFPHXBVDGyA/giphy.gif",
	"http://media.giphy.com/media/l41lYOpdcl0ew505O/giphy.gif"
	];
	


var selectedgif = false;


$(".button").click(function() {
	
  
  $(".box").html('<img src="' + gifs[Math.floor(Math.random()*gifs.length)]+ '">');
  

});

