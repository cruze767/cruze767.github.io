// ##################################
// #### Rules #######################
// ##################################

var Game = {
    // Number of players your game calls for
    players: 2,

    // Number of rolls a player gets per turn
    rolls: 2,

    // Number of turns before determining a winner
    // Enter 0 for infinite game
    turns: 0,

    // Number of dice player rolls
    dice: 2,

    // Number of sides the dice have
    dice_sides: 6,

    // Value of winning score
    winning_score: 5,

    // Determines the winning condition in relation to the winning score value and number of turns
    // Allowed values: 'highest', 'lowest', or 'matching'
    // Example: If winning_score is set to 5, turns is set to 0, and you set win_condition to 'highest', the player with the highest score above 5 at the end of any turn will be declared a winner.
    // Example: If turns is set to a finite number (3, for example), and you set win_condition to 'highest', the player with the highest score at the end of three rounds will be declared a winner, irrespective of the value of winning_score
    // Example: If winning_score is set to 5 and turns is set to 0, and you set win_condition to 'matching', the game will continue until a player has a score which is exactly 5. In this case, be sure your game logic allows player scores to rise and fall with each round.
    win_condition: 'highest',

    // Initial score each player starts at
    initial_score: 0,

    // #####################################
    // ### Do not edit below this line! ####
    // #####################################
    end: false,
    current_player: 0,
    total_turns: 0,
    winning_player: []
};

var players = [];