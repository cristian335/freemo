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
    
}