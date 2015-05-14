var Ride = {
  random_num : 0
};

var videos = [
    "qdFF5C3ZR_I", 
    // rat a train
    "t-3OhLZTSPA",
    // warriors a train
    "NtsIazfl4PY",
    // seinfield 1 train
    "K9c4hCJZhx8",
    // the warriors coney Q train
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
    "J98R1OiOxqY",
    // stairs d train
    "dsUXAEzaC3Q",
    // mj bad G train
    "W9QMM_nTuC4",
    // lion king A
    "H5Q60b8ulfM",
    // animation bless you r train
    "fJ_3IWGocP8",
    // subway dance train 3 train
    "1mhg58IeDh4",
    // showtime dance battle 6 train
    "LAcFB8F3aYY",
    // feliz navidad santa 1 train
    "E3QFJqu8X9g",
    // dancers 14 st L train
    "vuB3rRpYBHI",
    // graffiti f train
    "uAm8XWTv30U",
    // crazy bee drug man 5 train
    "5exE0FjhkD8",
    // puppet dude g train
    "vWF3IDk9Gek",
    // undercity 4 train
    "Wpoq_rISBLQ",
    // FIGHT 1 train?
    "vI3_wLthwUc",
    // picking up girls d train
    "stK3ghlWD84",
    // showtime q train
    "LM7fZHtxEvQ"
    //underground by me 
];


var trains = [
  "train-a",
  "train-a",
  "train-1",
  "train-q",
  "train-1",
  "train-6",
  "train-j",
  "train-6",
  "train-q",
  "train-l",
  "train-l",
  "train-d",
  "train-g",
  "train-a",
  "train-r",
  "train-3",
  "train-6",
  "train-1",
  "train-l",
  "train-f",
  "train-5",
  "train-g",
  "train-4",
  "train-1",
  "train-d",
  "train-q",
  "train-g"
  
  ];
  
var selectedvideo = false;
var selectedtrain = false;
  
$("#button").click(function() {
    Ride.random_num = Math.floor(Math.random() * trains.length),
  choose_train();
  choose_video();

});

function choose_train() {
  $('#button').attr('class', '').addClass(trains[Ride.random_num]);
}

function choose_video() {
  $('.youtube-video').attr('src', 'https://www.youtube.com/embed/' + videos[Ride.random_num] + '?rel=0vq=hd720&autohide=1&showinfo=0&autoplay=1&loop=1&controls=0&enablejsapi=1');
}

