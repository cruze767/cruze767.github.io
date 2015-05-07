var Ride = {
  random_num : 0
};

var videos = [
    "qdFF5C3ZR_I", 
    // rat a train
    "t-3OhLZTSPA",
    // warriors l train
    "NtsIazfl4PY",
    // seinfield 1 train
    "K9c4hCJZhx8",
    // the warriors coney Q train
    "euEZOgIYjpY",
    // warriors rec test d train
    "I9JZSlGiaNg",
    // movies in real life christmas story 1 train
    "J5gCeWEGiQI",
    // movies in real life star wars 6 train
    "aSv0jVfPhTw",
    // underwear J train
    "9MBBr-a2KnM",
    // human mirror 6 train
    "agUF_53fmyw",
    // subway spa Q train
    "i9jIsxQNz0M",
    // point here if L train
    "EpOAScjsr8g",
    // gabriel royal there were times L train
    "44807536",
    // stairs d train
    "dsUXAEzaC3Q",
    // mj bad G train
    "38788768",
    // bending sounds 4 train
    "19536258",
    // sub city z train
    "24281136",
    // subway dance l train
    "67182346",
    // ballet subway Q
    "W9QMM_nTuC4",
    // lion king A
    "73022720",
    // animation bless you r train
    "fJ_3IWGocP8",
    // subway dance train 3 train
    "1mhg58IeDh4",
    // showtime dance battle 6 train
    "LAcFB8F3aYY",
    // feliz navidad santa 1 train
    "72355212",
    // dancers 14 st L train
    "37693591",
    // crazy person on subway
    "107840358",
    // graffiti f train
    "51655496",
    // voice of train e
    "uAm8XWTv30U",
    // crazy bee drug man 5 train
    "5exE0FjhkD8"
    // puppet dude g train
];


var trains = [
  "img/a.png",
  "img/l.png",
  "img/1.png",
  "img/q.png",
  "img/d.png",
  "img/1.png",
  "img/6.png",
  "img/j.png",
  "img/6.png",
  "img/q.png",
  "img/l.png",
  "img/l.png",
  "img/d.png",
  "img/g.png",
  "img/4.png",
  "img/z.png",
  "img/l.png",
  "img/q.png",
  "img/a.png",
  "img/r.png",
  "img/3.png",
  "img/6.png",
  "img/1.png",
  "img/l.png",
  "img/j.png",
  "img/f.png",
  "img/e.png",
  "img/5.png",
  "img/g.png"
  
  ];
  
var selectedvideo = false;
var selectedtrain = false;
  
$("#button").click(function() {
  choose_train();
  choose_video();
  $(".container").html('<img src="' + videos[Math.floor(Math.random()*videos.length)]+ '">');
});

function choose_train() {
  Ride.random_num = Math.ceil(Math.random() * trains.length),
  $('#button').attr('class', '').addClass(trains[Ride.random_num]);
}

function choose_video() {
  $('.youtube-video').attr('src', videos[Ride.random_num]);
}


$("#button").click(function() {
  choose_train();
  choose_video();
  $(".container").html('<iframe width="100%" height="100%" src="' + videos[Math.floor(Math.random()*videos.length)]+ '">');
});