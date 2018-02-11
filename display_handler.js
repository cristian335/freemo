function check_button_value () {
    let button_value = document.getElementById("button").value;
    
    if (button_value === "start"){
    change_class_name("button","display_false")
    change_button_value("go"); // redirect to siplay game function 
    count_down(3,change_class_name,"input","display_true","button","button_true");
    } else if (button_value = "go"){
        vanish_number(2000,1000,9999);
    } else {
    
    }
    
    }
    
    var change_button_value = (new_value) => {
        document.getElementById("button").value = new_value;
    };
    
    var change_class_name = (id, new_value) => {
        document.getElementById(id).className = new_value; 
    };

    var count_down = (time, function_pass, arg_1, arg_2, arg_3, arg_4) => {
        let count = setInterval(function(){
            document.getElementById("count_down").textContent = time;
            time--;
            if(time < 0) {
                clearInterval(count);
                change_class_name("count_down","display_false");
                function_pass(arg_1, arg_2);
                function_pass(arg_3, arg_4);
            }
        }, 1000);
    };

    var all = (name) => {
        alert("hello " + name);
    }