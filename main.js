var response = {
    true: "good job!",
    false: "wrong!"
};

var random_number = (min, max) => {
    let rand = Math.floor(Math.random() * max ) + min;
    return rand;
};

function vanish_number (time,min,max) {
    change_class_name("random_number", "");
    document.getElementById("random_number").innerHTML = random_number(min,max);

    setTimeout(function(){ 
        change_class_name("random_number","display_false");
     }, time);
}

function game () {
    
}