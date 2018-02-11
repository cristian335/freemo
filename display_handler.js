function check_button_value () {
    let button_value = document.getElementById("button").value;
    
    if (button_value === "start"){
    change_button_value("go"); // redirect to siplay game function 
    count_down(3,check_display,"input_pad");
    } else if (button_value = "go"){
        vanish_number(2000,1000,9999,check_display,"input_pad");
    } else {
    
    }
    
    }
    
function check_display (id) {
    let class_check = document.getElementById(id).className;
    if (class_check === "display_true"){
        change_class_name(id,"display_false");
    } else {
        change_class_name(id,"display_true");
    }
}

    var change_button_value = (new_value) => {
        document.getElementById("button").value = new_value;
    };
    
    var change_class_name = (id, new_value) => {
        document.getElementById(id).className = new_value; 
    };

    var count_down = (time, function_pass, arg_1) => {
        function_pass(arg_1);
        let count = setInterval(function(){
            document.getElementById("count_down").textContent = time;
            time--;
            if(time < 0) {
                clearInterval(count);
                check_display("count_down");
                function_pass(arg_1);
                vanish_number(2000,1000,9999,function_pass,arg_1);
            }
        }, 1000);
    };

    var all = (name) => {
        alert("hello " + name);
    }