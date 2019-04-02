$(document).ready(function () {

    var wins = 0; // starting wins at 0
    var losses = 0; // starting losses at 0
    var total = 0; // setting beginning total number for user guess
    first = 0; // first number, randomly generated below
    second = 0; //same for next three
    third = 0;
    fourth = 0;

    // putting the wins and losses (0) on the site
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    // generating random numbers for each crystal (1 through 12)
    function generateNumbers() {
        
        var randomNum = Math.floor(Math.random() * (120 - 19) + 19);
        $("#computernumber").text(randomNum);
        console.log(randomNum);

        var first = Math.floor(Math.random() * (12 - 1) + 1);
        console.log(first);

        var second = Math.floor(Math.random() * (12 - 1) + 1);
        console.log(second);

        var third = Math.floor(Math.random() * (12 - 1) + 1);
        console.log(third);

        var fourth = Math.floor(Math.random() * (12 - 1) + 1);
        console.log(fourth);

        $('#one').on('click', function () {

            total = total + first;
            $('#combined').text(total);
            console.log(total);

            //sets win/lose conditions
            if (total == randomNum) {
                userWin();
            }
            else if (total > randomNum) {
                userLoss();
            }
        })

        $('#two').on('click', function () {

            total = total + second;
            $('#combined').text(total);
            console.log(total);

            //sets win/lose conditions
            if (total == randomNum) {
                userWin();
            }
            else if (total > randomNum) {
                userLoss();
            }
        })

        $('#three').on('click', function () {

            total = total + third;
            $('#combined').text(total);
            console.log(total);

            //sets win/lose conditions
            if (total == randomNum) {
                userWin();
            }
            else if (total > randomNum) {
                userLoss();
            }
        })

        $('#four').on('click', function () {

            total = total + fourth;
            $('#combined').text(total);
            console.log(total);

            //sets win/lose conditions
            if (total == randomNum) {
                userWin();
            }
            else if (total > randomNum) {
                userLoss();
            }
        })

    }
    generateNumbers();



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

    function reset() {
        first = 0;
        second = 0;
        third = 0;
        fourth = 0;
        generateNumbers();
        total = 0;
        $('#combined').text(total);


    }




});
