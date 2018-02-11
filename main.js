var response = {
    true: "good job!",
    false: "wrong!",
    rand: undefined,
    correct_answers: null,
    wrong_anwers: null,
    option: "numbers",
    seconds: 2000,
    difficulty: 0,
    nr: 4
};

function random_number (option, max) {
    let number = "";
    let possible = {
        numbers: "0123456789",
        upper_letter: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    } 

    let real_option = eval("possible."+option);
  
    for (var i = 0; i < max + response.difficulty; i++) {
      number += real_option.charAt(Math.floor(Math.random() * real_option.length));
    }
    return number;
};

function vanish_number (time,option,max,function_pass,arg_1) {
    function_pass(arg_1);
    check_display("random_number");
    response.rand = random_number(option,max);
    document.getElementById("random_number").innerHTML = response.rand;

    setTimeout(function(){ 
        check_display("random_number");
        function_pass(arg_1);
     }, time);
}

function game () {
    let answer = document.getElementById("input").value;
    check_display("error");
    check_display("input");

    if(answer == response.rand){
        change_button_value("next");
        response.correct_answers++;

        if(response.correct_answers == 3){
            response.difficulty++;
            response.correct_answers = null;
            next_level();
            document.getElementById("error").innerHTML = "Level " + (response.difficulty+1);
        } else {
            document.getElementById("error").innerHTML = response.true;
        }

    } else {
        change_button_value("next");
        response.wrong_anwers++;

        if (response.wrong_anwers == 3){
            response.difficulty = null;
            response.correct_answers = null;
            response.wrong_anwers = null;
            document.getElementById("error").innerHTML = "Lost Game";
            next_level();
        } else {
            document.getElementById("error").innerHTML = response.false;
        }
    }
    document.getElementById("input").value = null;
}

function next_level(win) {
    change_button_value("start");
}