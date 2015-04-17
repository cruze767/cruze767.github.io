// ##################################
// #### Core ########################
// ##################################


initialize_players();
initialize_game_board();

function begin_roll() {
    if (Game.end != true) {
        set_current_player();
        roll_dice();
        set_roll_score();
        if (end_of_current_players_turn()) {
            set_turn_score();
        }
        increment_turn();
        render_roll();
        check_for_winner();
    }
}

function initialize_players() {
    for (var i = 0; i < Game.players; i++) {
        players[i] = {
            current_roll: 0,
            roll_results: [],
            roll_scores: [],
            total_score: Game.initial_score
        };
    }
}

function set_current_player() {
    if (end_of_current_players_turn()) {
        if ((Game.current_player < Game.players - 1)) {
            Game.current_player += 1;
        } else {
            Game.current_player = 0;
        }
        console.log('*** Player' + Game.current_player);
        players[Game.current_player].current_roll = 0;
        players[Game.current_player].roll_results = [];
        players[Game.current_player].roll_scores = [];
    }

}

function end_of_current_players_turn() {
    if (players[Game.current_player].current_roll == Game.rolls) {
        return true;
    } else {
        return false;
    }
}

function increment_turn() {
    console.log('current-player: ' + Game.current_player);
    console.log('current-roll: ' + players[Game.current_player].current_roll);
    if (Game.current_player == (Game.players - 1) && (players[Game.current_player].current_roll == Game.rolls)) {
        Game.total_turns += 1;
    }
    console.log(Game.total_turns);
}

function roll_dice() {
    console.log('current player: ' + Game.current_player);
    console.log('current roll: ' + players[Game.current_player].current_roll);
    players[Game.current_player].current_roll += 1;
    var dice = [];
    for (var i = 0; i < Game.dice; i++) {
        dice.push(Math.ceil(Math.random() * Game.dice_sides));
    }
    players[Game.current_player].roll_results = dice;
}


function check_for_winner() {
    if ((Game.turns != 0) && (Game.total_turns == Game.turns)) {
        if (Game.win_condition == 'highest') {
            find_highest_score();
        } else if (Game.win_condition == 'lowest') {
            find_lowest_score();
        } else {
            find_closest_score();
        }
    } else if ((Game.turns == 0) && (Game.current_player == Game.players - 1) && (players[Game.current_player].current_roll == Game.rolls)) {
        if (Game.win_condition == 'highest') {
            find_highest_score_for_infinite();
        } else if (Game.win_condition == 'lowest') {
            find_lowest_score_for_infinite();
        } else {
            find_exact_score_for_infinite();
        }
    }
}


function find_highest_score() {
    var highest_score = players[0].total_score;
    Game.winning_player = [0];
    $(players).each(function (x) {
        if (players[x].total_score > highest_score) {
            Game.winning_player.length = 0;
            Game.winning_player.push(x);
            highest_score = players[x].total_score;
        } else if (players[x].total_score == highest_score) {
            if (x != 0) {
                Game.winning_player.push(x);
            }
        }
    });
    announce_winner();
}


function find_highest_score_for_infinite() {
    var current_highest_score = Game.winning_score;
    $(players).each(function (x) {
        if (players[x].total_score >= Game.winning_score) {
            if (players[x].total_score > current_highest_score) {
                Game.winning_player.length = 0;
                Game.winning_player.push(x);
                current_highest_score = players[x].total_score;
            } else if (players[x].total_score == current_highest_score) {
                Game.winning_player.push(x);
                current_highest_score = players[x].total_score;
            }
        }
    });
    if (Game.winning_player.length > 0) {
        announce_winner();
    }
}


function find_lowest_score_for_infinite() {
    var current_lowest_score = Game.winning_score;
    $(players).each(function (x) {
        if (players[x].total_score <= Game.winning_score) {
            if (players[x].total_score < current_lowest_score) {
                Game.winning_player.length = 0;
                Game.winning_player.push(x);
                current_lowest_score = players[x].total_score;
            } else if (players[x].total_score == current_lowest_score) {
                Game.winning_player.push(x);
                current_lowest_score = players[x].total_score;
            }
        }
    });
    if (Game.winning_player.length > 0) {
        announce_winner();
    }
}


function find_lowest_score() {
    var lowest_score = players[0].total_score;
    Game.winning_player = [0];
    $(players).each(function (x) {
        if (players[x].total_score < lowest_score) {
            Game.winning_player.length = 0;
            Game.winning_player.push(x);
            lowest_score = players[x].total_score;
        } else if (players[x].total_score == lowest_score) {
            if (x != 0) {
                Game.winning_player.push(x);
            }
        }
    });
    announce_winner();
}


function find_closest_score() {
    var closest_score = Math.abs(Game.winning_score - players[0].total_score);
    console.log('initial closest score: ' + closest_score);
    Game.winning_player = [0];
    $(players).each(function (x) {
        console.log('player score: ' + (Math.abs(Game.winning_score - players[x].total_score)));
        if ((Math.abs(Game.winning_score - players[x].total_score)) < closest_score) {
            Game.winning_player.length = 0;
            Game.winning_player.push(x);
            closest_score = Math.abs(Game.winning_score - players[x].total_score);
            console.log("new closest score");
        } else if ((Math.abs(Game.winning_score - players[x].total_score)) == closest_score) {
            if (x != 0) {
                Game.winning_player.push(x);
            }
        }
    });
    announce_winner();
}

function find_exact_score_for_infinite() {
    $(players).each(function (x) {
        if (players[x].total_score == Game.winning_score) {
            Game.winning_player.push(x);
        }
    });
    if (Game.winning_player.length > 0) {
        announce_winner();
    }
}