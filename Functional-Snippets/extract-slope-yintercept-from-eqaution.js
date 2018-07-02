/**/
function extractParts(stringAsEquation){    
    alert();
    var slope = "";
    var yIntercept = "";
    var operator;
    var operatorIndex;
    // var string = "((0.00494)*(vpWidth)-0.77778)";
    var string = stringAsEquation;
    var equationParts = {
                            "slope":undefined,
                            "yIntercept":undefined
    };
    
// Find Operator ***********************************************************************************************************************************************************    
    for(i=0; i<string.length; i++){
        
        if(string.charAt(i) === "+" || string.charAt(i) === "-"){
            operatorIndex = i;
            operator = string.charAt(i);
        }
    }
    //console.log("operatorIndex is: " + operatorIndex);
    //console.log("operator is: " + operator);

// Find Slope ***********************************************************************************************************************************************************    
    for(i=0; i<operatorIndex; i++){
        
        var testchar = string.charAt(i);
        if(testchar !== "."){
            testchar = Number(testchar);
        }
        if(Number.isInteger(testchar) === true || testchar === "."){
            slope += (testchar + "");
        }
    }
    //console.log("slope is: " + Number(slope));
    
// Find Y Intercept ***********************************************************************************************************************************************************
    yIntercept = operator;
    for(i=operatorIndex+1; i<string.length; i++){
        
        var testForNum = string.charAt(i);
        if(testForNum !== "."){
            testForNum = Number(testForNum);
        }
        
        if(Number.isInteger(testForNum) === true || testForNum === "."){
            yIntercept += testForNum + "";
        }
    }
    //console.log("yIntercept is: " + Number(yIntercept));
    equationParts.slope = slope;
    equationParts.yIntercept = yIntercept;
    
    return equationParts;
    
}

//export { extractParts };
// var parts = extractParts("((0.00494)*(vpWidth)-0.77778)");    

//console.log((parts.slope) + " and " + (parts.yIntercept));