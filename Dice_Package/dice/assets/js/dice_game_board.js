$('.roll').click(function() {
    begin_roll();
});


// ##################################
// #### Game Board ##################
// ##################################


// Draws the game board on page load
function initialize_game_board() {
    $("#rules").append("<h4>Players: " + Game.players + "</h4>")
    $("#rules").append("<h4>Rolls: " + Game.rolls + "</h4>")
    $("#rules").append("<h4>Turns: " + Game.turns + "</h4>")
    $("#rules").append("<h4>Dice: " + Game.dice + "</h4>")
    $("#rules").append("<h4>Dice Sides: " + Game.dice_sides + "</h4>")
    $("#rules").append("<h4>Winning Score: " + Game.winning_score + "</h4>")
    $("#rules").append("<h4>Win Condition: " + Game.win_condition + "</h4>")
    $("#rules").append("<h4>Initial Score: " + Game.initial_score + "</h4>")


    for (var i = 0; i < Game.players; i++) {
        $("#game-board").append("<div class='player player-" + i +"'></div>");
        $(".player-" + i).append("<h2>Player: <span id='player-" + i +"'>" + i + "</span></h2>");
        $(".player-" + i).append("<h4>Current Roll: <span id='player-" + i +"-current'>" + players[i].current_roll + "</span></h4>");
        $(".player-" + i).append("<h4>Dice Roll: <span id='player-" + i +"-roll-results'>" + players[i].roll_results + "</span></h4>");
        $(".player-" + i).append("<h4>Turn score: <span id='player-" + i +"-roll-score'>" + players[i].roll_scores + "</span></h4>");
        $(".player-" + i).append("<h4>Total Score: <span id='player-" + i +"-total-score'>" + players[i].total_score + "</span></h4>");
    }
}


// Redraws the current player's portion of the game
// board at the end of their turn
function render_roll() {

    $("#player-" + Game.current_player + "-current").html(players[Game.current_player].current_roll);
    $("#player-" + Game.current_player + "-roll-results").html(players[Game.current_player].roll_results.join(', '));
    $("#player-" + Game.current_player + "-roll-score").append("<span class='die'>" + players[Game.current_player].roll_scores[players[Game.current_player].roll_scores.length-1] + '</span>');
    $("#player-" + Game.current_player + "-total-score").html(players[Game.current_player].total_score);
}


// If there is a winner, draw the results
function announce_winner() {
    $('.roll').html('Game over');
    Game.end = true;
    alert('GAME OVER, check logs for winner(s)!');
    $(Game.winning_player).each(function(x) {
        var player = '.player-' + Game.winning_player[x];
        $(player).css({ 'background': '#0f0'});
        console.log('Player ' + Game.winning_player[x] + ' wins with a score of ' + players[Game.winning_player[x]].total_score + '!');
    });
}