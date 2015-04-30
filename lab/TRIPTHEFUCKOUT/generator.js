
console.log("hello world");

var gifs = ["http://33.media.tumblr.com/aae8e6a76fb8a095687fb2cb9ea6e410/tumblr_mxsiugub2F1s5g3rlo9_500.gif",
	"http://38.media.tumblr.com/692105ff427f435210fe0a774f453be0/tumblr_mrf19fplBD1qf5do9o1_400.gif",
	"https://s3.amazonaws.com/giphygifs/media/11Oz538wQaXWbC/giphy.gif",
	"https://media2.giphy.com/media/kWCI2Vj5RDn7W/200.gif",
	"http://media.giphy.com/media/cwLsS6PzQf8A0/giphy.gif",
	"http://media.giphy.com/media/xUD089HePAGZ2/giphy.gif",
	"https://media2.giphy.com/media/p5mZELR2h6jOU/200.gif",
	"https://media2.giphy.com/media/2WhCMpG85VhWE/200.gif",
	"https://media4.giphy.com/media/14wdZyNW1V5EJO/200.gif",
	"https://media0.giphy.com/media/KQNbdN3EFfMVq/200.gif"];
	
var songs =["HeadOnPill.mp3"
	
	];


var selectedgif = false;
var selectedsongs = false;

$(".button").click(function() {
	
  
  $(".box").html('<img src="' + gifs[Math.floor(Math.random()*gifs.length)]+ '">');
  

});

