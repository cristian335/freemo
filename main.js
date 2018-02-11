var response = {
    true: "good job!",
    false: "wrong!",
    rand: undefined
};

function random_number (min, max) {
    let rand = Math.floor(Math.random() * max ) + min;
    return rand;
};

function vanish_number (time,min,max,function_pass,arg_1) {
    function_pass(arg_1);
    check_display("random_number");
    response.rand = random_number(min,max);
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
        document.getElementById("error").innerHTML = response.true;
        change_button_value("next");
    } else {
        document.getElementById("error").innerHTML = response.false;
        change_button_value("next");
    }
    document.getElementById("input").value = null;
}