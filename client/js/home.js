$("#searchclear").click(function(){
    $("#searchinput").val('');
    alert('지움');
});




function search(control) {
    if (control == 'give'){
        input_value = $("#searchinput").val();
        alert('give' + input_value);
    }else if(control == 'take'){
        input_value = $("#searchinput").val();
        alert('take' + input_value);
    }
}

function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass('alert-validate');
}