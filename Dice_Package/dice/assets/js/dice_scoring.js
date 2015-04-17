// ##################################
// #### Scoring #####################
// ##################################

// Edit this function to take on your own roll scoring
// method. In this case we are summing the dice roll
// values and pushing the total to the current player's
// roll score.
function set_roll_score() {
    console.log("dice values: " + players[Game.current_player].roll_results);

    var roll_score = 0;
    $(players[Game.current_player].roll_results).each(function(index, value) {
        roll_score += value;
    });
    players[Game.current_player].roll_scores.push(roll_score);
    console.log("dice sum: " + players[Game.current_player].roll_scores);
}

// Edit this function to take on your own turn scoring method.
// In this case, we are subtracting every other roll from the
// one that precedes it.
function set_turn_score() {
    $(players[Game.current_player].roll_scores).each(function(index, value) {
        if ((index + 1) % 2 == 0) {
            players[Game.current_player].total_score -= value;
        } else {
            players[Game.current_player].total_score += value;
        }

        //if score is less than 0, set score equal to 0
        if (players[Game.current_player].total_score < 0) {
            players[Game.current_player].total_score = 0;
        }
    });
    console.log("round score: " + players[Game.current_player].total_score);
}