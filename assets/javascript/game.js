$(document).ready(function () {

    var wins = 0; // starting wins at 0
    var losses = 0; // starting losses at 0
    var total = 0; // setting beginning total number for user guess

    // sets values for each crystal
    var first = Math.floor(Math.random() * (12 - 1) + 1);
    console.log(first);

    var second = Math.floor(Math.random() * (12 - 1) + 1);
    console.log(second);

    var third = Math.floor(Math.random() * (12 - 1) + 1);
    console.log(third);

    var fourth = Math.floor(Math.random() * (12 - 1) + 1);
    console.log(fourth);

    // putting the wins and losses (0) on the site
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);


    // generates the random number to match at
    var randomNum = Math.floor(Math.random() * (120 - 19) + 19);
    $("#computernumber").text(randomNum);
    console.log(randomNum);


    //determine what happens when each of 4 crystals is clicked
    $('#crystalone').on('click', function () {

        total = total + first;
        $('#userscore').text(total);
        console.log(total);

        //sets win/lose conditions
        if (total == randomNum) {
            userWin();
        }
        else if (total > randomNum) {
            userLoss();
        }
    })

    $('#crystaltwo').on('click', function () {

        total = total + second;
        $('#userscore').text(total);
        console.log(total);

        //sets win/lose conditions
        if (total == randomNum) {
            userWin();
        }
        else if (total > randomNum) {
            userLoss();
        }
    })

    $('#crystalthree').on('click', function () {

        total = total + third;
        $('#userscore').text(total);
        console.log(total);

        //sets win/lose conditions
        if (total == randomNum) {
            userWin();
        }
        else if (total > randomNum) {
            userLoss();
        }
    })

    $('#crystalfour').on('click', function () {

        total = total + fourth;
        $('#userscore').text(total);
        console.log(total);

        //sets win/lose conditions
        if (total == randomNum) {
            userWin();
        }
        else if (total > randomNum) {
            userLoss();
        }
    })


    //determine win/loss outcomes and resets
    function userWin() {
        alert("You won!");
        wins++;
        $('#numberWins').text(wins);
        reset();

    }

    function userLoss() {
        alert("You lost!");
        losses++;
        $('#numberLosses').text(losses);
        reset();
    }

    // resets random number, total, and 4 crystals numbers
    function reset() {
        randomNum = Math.floor(Math.random() * (120 - 19) + 19);
        $("#computernumber").text(randomNum);

        first = Math.floor(Math.random() * (12 - 1) + 1);
        console.log(first);

        second = Math.floor(Math.random() * (12 - 1) + 1);
        console.log(second);

        third = Math.floor(Math.random() * (12 - 1) + 1);
        console.log(third);

        fourth = Math.floor(Math.random() * (12 - 1) + 1);
        console.log(fourth);

        total = 0;
        $('#userscore').text(total);


    }



})