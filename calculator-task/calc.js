$(document).ready(function(){


var numberValues = new Array();
var signValue;
var allInputs = $(":input");
var displayedValue;
var recentlyPressed = "";

    $('[id^=button]').click(function() { 
        var text = $(this).attr('value'); 
        $("#display").val($("#display").val() + text);
        displayedValue = $("#display").val();
        recentlyPressed = "number";
    });



    $("#addButton").click(function() {

        if(numberValues.length === 0){
            if(displayedValue !== undefined){
                numberValues.push($("#display").val());
            } else {
                return false;
            }
            $("#display").val('');
            signValue = '+';
        } else if((signValue !== '') && (displayedValue !== undefined) && (numberValues.length !== 0)){
            $("#display").val('');
            equalsFunction();
        }
        signValue = '+';
        $("#display").val('');
        recentlyPressed = "sign";
        
        
        
    });

    $("#subtractButton").click(function() {
        
        if(numberValues.length === 0){
            if(displayedValue !== undefined){
                numberValues.push($("#display").val());
            } else {
                return false;
            }
            $("#display").val('');
            signValue = '-';
        } else if((signValue !== '') && (displayedValue !== undefined) && (numberValues.length !== 0)){
            $("#display").val('');
           
            equalsFunction();
        }
        signValue = '-';
        $("#display").val('');
        recentlyPressed = "sign";
        
        
    });

    $("#divideButton").click(function() {
        
        if(numberValues.length === 0){
            if(displayedValue !== undefined){
                numberValues.push($("#display").val());
            } else {
                return false;
            }
            $("#display").val('');
            signValue = '/';
        } else if((signValue !== '') && (displayedValue !== undefined) && (numberValues.length !== 0)){
            
            $("#display").val('');
            equalsFunction();
        }
        signValue = '/';
        $("#display").val('');
        recentlyPressed = "sign";
        
    });

    $("#multiplyButton").click(function() {
        
        if(numberValues.length === 0){
            if(displayedValue !== undefined){
                numberValues.push($("#display").val());
            } else {
                return false;
            }
            $("#display").val('');
            signValue = '*';
        } else if((signValue !== '') && (displayedValue !== undefined) && (numberValues.length !== 0)){
            $("#display").val('');
        
            equalsFunction();
        }
        signValue = '*';
        $("#display").val('');
        recentlyPressed = "sign";
        
    });

    $("#clearButton").click(function() {
        
        numberValues.splice(0, numberValues.length);
        $("#display").val("");
        
    });


    $("#equalsButton").click(equalsFunction);

    function equalsFunction() {
        if((signValue === '') || (recentlyPressed === "sign")){
            return false;
        }

        if(displayedValue !== undefined){
            numberValues.push(displayedValue);
        } else {
            return false;
        }
        
        var formerValue = numberValues[0]; 
        var nextValue = numberValues[1];
        

        if(signValue == '+'){
            var result = Number(formerValue) + Number(nextValue);
        } else if(signValue == '-'){
            var result = Number(formerValue) - Number(nextValue);
        } else if(signValue == '/'){
            var result = Number(formerValue) / Number(nextValue);
        } else if(signValue == '*'){
            var result = Number(formerValue) * Number(nextValue);
        }
        $("#display").val(result);
        numberValues.splice(0,2);
        numberValues.push(result);
        signValue = '';
        recentlyPressed = "equals";
    }
    
});
