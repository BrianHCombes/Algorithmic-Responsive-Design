//***********************************************************************************************************************************************************    
// variable declarations
    new Clipboard("#copyEqBtn");
    
    var orientReport = window.matchMedia("(orientation: portrait)");
    
    //var vpWidth = window.innerWidth;
    var vpWidth = window.screen.availWidth;
    var unitTypeForEquation;
    
//***********************************************************************************************************************************************************    
// Derive Slope Intercept Equation

    function calc(){
        for(i=0; i<3; i++){
                if(document.getElementsByName("unit")[i].checked === true){
                    unitTypeForEquation = document.getElementsByName("unit")[i].value;
                }
            }
        var viewport1 = Number(document.getElementById("equationPoint1").value);
        var property1 = Number(document.getElementById("equationPoint2").value);
        var viewport2 = Number(document.getElementById("equationPoint3").value);
        var property2 = Number(document.getElementById("equationPoint4").value);
        var slope = (property1 - property2)/(viewport1 - viewport2);
        var yIntercept = property1 - slope*viewport1;
        
        if(yIntercept.toFixed(5) >= 0) // To add or not to add the "+" sign
            document.getElementById("eqExpression").innerHTML = "((" + slope.toFixed(5) + ")*(" + unitTypeForEquation + ")+" + yIntercept.toFixed(5) + ")"; 
        else
            document.getElementById("eqExpression").innerHTML = "((" + slope.toFixed(5) + ")*(" + unitTypeForEquation + ")" + yIntercept.toFixed(5) + ")"; 
        document.getElementById("slopeInput").value = slope.toFixed(5);
        document.getElementById("yInterceptInput").value = yIntercept.toFixed(5);
        document.getElementById("viewportWidthInput").value = viewport1.toFixed(0);
    }

//***********************************************************************************************************************************************************  
// Calculate Element or Property size at given viewport width
    
    function getSize(){
        var slope = Number(document.getElementById("slopeInput").value);
        var yInt =  Number(document.getElementById("yInterceptInput").value);
        var width = Number(document.getElementById("viewportWidthInput").value);
        var size = (slope*width + yInt);
        document.getElementById("showSize").innerHTML = size.toFixed(2);
    }

//***********************************************************************************************************************************************************    
// Responsive Styling for Equation Maker Section  

    function styleEquationSection(){
        
        document.getElementById("chooseUnitPhrase").style.padding = "5px " + (0.03529)*(vpWidth)-11.29412 + "px";
        document.getElementById("chooseUnitPhrase").style.fontSize = (0.00062)*(vpWidth)+0.77778 + "em";         // XXem at 1920 - XXem at 360
        document.getElementsByClassName("unit")[0].style.fontSize = (0.00053)*(vpWidth)+0.63059 + "em";
        document.getElementsByClassName("unit")[1].style.fontSize = (0.00053)*(vpWidth)+0.63059 + "em";
        document.getElementsByClassName("unit")[2].style.fontSize = (0.00053)*(vpWidth)+0.63059 + "em";
        // document.getElementsByClassName("unit")[0].style.color = "red";
        document.getElementById("title").style.fontSize = (0.00123)*(vpWidth)+0.55556 + "em";         // XXem at 1920 - XXem at 360
        document.getElementById("title").style.fontSize = (0.00109)*(vpWidth) + 0.90769 + "em";         // XXem at 1920 - XXem at 360
        document.getElementsByClassName("headerStyle1")[0].style.fontSize = (0.00064)*(vpWidth) + 1.26923 + "em";         // 2.5em at 1920 - 1.5em at 360
        document.getElementsByClassName("headerStyle2")[0].style.fontSize = (0.00042)*(vpWidth) + 0.70000 + "em";         // 1.5em at 1920 - 0.9em at360
        document.getElementById("equationPointsEntry").style.fontSize = (0.00013)*(vpWidth) + 0.75385 + "em";             // 1.0em at 1920 - 0.8em at 360
        document.getElementById("equationPoint2").style.left = (-0.02564)*(vpWidth) + 69.23077 + "%";                     // 20% at 1920 - 60% at 360
        document.getElementById("equationPoint2").style.width = (0.03205)*(vpWidth) + 38.46154 + "px";                    // 100px at 1920 - 50px at 360     

        for(i=0; i<document.getElementsByClassName("equationPoints1").length; i++ ){
            if(vpWidth >= 960){ 
                document.getElementsByClassName("equationPoints1")[i].style.left = "20%";                               // 20% at 1920 - 20% at 960
            } 
            else if(vpWidth >= 480 && vpWidth < 960){
                document.getElementsByClassName("equationPoints1")[i].style.left = (-0.04167)*(vpWidth) + 60.00000 + "%"; // 20% at 960 - 40% at 480
            }
            else {
                document.getElementsByClassName("equationPoints1")[i].style.left = (-0.16667)*(vpWidth) + 120.00000 + "%";// 40% at 480 - 60% at 360
            }
            document.getElementsByClassName("equationPoints1")[i].style.width = (0.03205)*(vpWidth) + 38.46154 + "px";    // 100px at 1920 - 50px at 360
        }
    
        document.getElementById("createEquationBtn").style.fontSize = (0.00064)*(vpWidth) + 0.76923 + "em";               // 2em at 1920 - 1 em at 360
        document.getElementById("equationBox1").style.fontSize = (0.00064)*(vpWidth) + 0.76923 + "em";                    // 2em at 1920 - 1 em at 360 
        if(vpWidth < 540){
            document.getElementById("lineBreak1").style.display = "inline";     // display none above 475 - display inline below 475 
            document.getElementById("equationBox1").style.width = "75%";        // display none above 475 - display inline below 475 
        }
    }   
    
//*********************************************************************************************************************************************************** 
// Element size calculator at given viewport width - section
    function styleSizeAtSection() {    
        document.getElementsByClassName("headerStyle1")[1].style.fontSize = (0.00064)*(vpWidth) + 1.26923 + "em";         // 2.5em at 1920 - 1.5em at 360
        document.getElementsByClassName("headerStyle2")[1].style.fontSize = (0.00042)*(vpWidth) + 0.70000 + "em";         // 1.5em at 1920 - 0.9em at360

        document.getElementById("inputDiv2").style.fontSize = (0.00013)*(vpWidth) + 0.75385 + "em";
        for(i=0; i<document.getElementsByClassName("elementSizeEq").length; i++ ){
            if(vpWidth >= 960){ 
                document.getElementsByClassName("elementSizeEq")[i].style.left = "20%";                                 // 20% at 1920 - 20% at 960
            } 
            else if(vpWidth >= 480 && vpWidth < 960){
                document.getElementsByClassName("elementSizeEq")[i].style.left = (-0.04167)*(vpWidth) + 60.00000 + "%";   // 20% at 960 - 40% at 480
            }
            else
                document.getElementsByClassName("elementSizeEq")[i].style.left = (-0.16667)*(vpWidth) + 120.00000 + "%";  // 40% at 480 - 60% at 360

            document.getElementsByClassName("elementSizeEq")[i].style.width = (0.02244)*(vpWidth) + 56.92308 + "px";      // 100px at 1920 - 65px at 360
        }
        document.getElementById("elementSizeBtn").style.fontSize = (0.00064)*(vpWidth) + 0.76923 + "em";
    }
    
//***********************************************************************************************************************************************************
// Populates table of width and length dimensions reported by various window properties and methods - section 
    function styleDimensionReportTable(){
        document.getElementsByClassName("headerStyle1")[2].style.fontSize = (0.00064)*(vpWidth) + 1.26923 + "em";         // 2.5em at 1920 - 1.5em at 360
        document.getElementsByClassName("headerStyle2")[2].style.fontSize = (0.00048)*(vpWidth) + 0.57692 + "em";         // 1.5em at 1920 - 0.9em at360
        document.getElementById("tableSize").style.fontSize = (0.00013)*(vpWidth) + 0.75385 + "em";
    }
    
    function dimensionReportTable() {  
        var dimenProperty = {
        "ow":window.outerWidth,
        "oh":window.outerHeight,
        "iw":window.innerWidth,
        "ih":window.innerHeight,
        "sw":window.screen.width,
        "sh":window.screen.height,
        "aw":window.screen.availWidth,
        "ah":window.screen.availHeight,
        "jow":$(window).outerWidth(),
        "joh":$(window).outerHeight(),
        "jiw":$(window).innerWidth(),
        "jih":$(window).innerHeight(),
        "jw":$(window).width(),
        "jh":$(window).height()
    };
        
        document.getElementsByClassName("dimenTable")[0].innerHTML = dimenProperty.ow;
        document.getElementsByClassName("dimenTable")[1].innerHTML = dimenProperty.oh;    
        document.getElementsByClassName("dimenTable")[2].innerHTML = dimenProperty.iw;    
        document.getElementsByClassName("dimenTable")[3].innerHTML = dimenProperty.ih;    
        document.getElementsByClassName("dimenTable")[4].innerHTML = dimenProperty.sw;    
        document.getElementsByClassName("dimenTable")[5].innerHTML = dimenProperty.sh;    
        document.getElementsByClassName("dimenTable")[6].innerHTML = dimenProperty.aw;    
        document.getElementsByClassName("dimenTable")[7].innerHTML = dimenProperty.ah;    
        document.getElementsByClassName("dimenTable")[8].innerHTML = dimenProperty.jow; 
        document.getElementsByClassName("dimenTable")[9].innerHTML = dimenProperty.joh;    
        document.getElementsByClassName("dimenTable")[10].innerHTML = dimenProperty.jiw;    
        document.getElementsByClassName("dimenTable")[11].innerHTML = dimenProperty.jih;    
        document.getElementsByClassName("dimenTable")[12].innerHTML = dimenProperty.jw;    
        document.getElementsByClassName("dimenTable")[13].innerHTML = dimenProperty.jh;        
}

//***********************************************************************************************************************************************************
//  Device orientation section
    function styleOrientationSection(){
        document.getElementsByClassName("headerStyle1")[3].style.fontSize = (0.00064)*(vpWidth) + 1.26923 + "em";         // 2.5em at 1920 - 1.5em at 360
        document.getElementsByClassName("headerStyle2")[3].style.fontSize = (0.00048)*(vpWidth) + 0.57692 + "em";         // 1.5em at 1920 - 0.9em at360
        
        document.getElementById("deviceOrientation").style.textAlign = "center";
        document.getElementById("deviceOrientation").style.fontSize = (0.00160)*(vpWidth) + 1.92308 + "em";
        document.getElementById("orientationAPI").style.fontSize = (0.00064)*(vpWidth) + 0.76923 + "em";                 // 2.0em at 1920 - 1em at 360
    }    

    function orientFunc(orientReport){
        vpWidth = window.screen.availWidth;
        var orientationReported = "";

        if(orientReport.matches){
            orientationReported = "portrait";
                } 
        else{
            orientationReported = "landscape";
        }
        document.getElementById("deviceOrientation").innerHTML = "<span style=\"color:red\">" + orientationReported + "</span>";
        
        styleEquationSection();
        styleSizeAtSection();
        styleDimensionReportTable();
        dimensionReportTable();
        styleOrientationSection();
        //location.reload();
    }

//***********************************************************************************************************************************************************    
// 
/* 
    function configPage(){
        styleEquationSection();
        styleSizeAtSection();
        dimensionReportTable();
    } 
*/

styleEquationSection();
styleSizeAtSection();
styleDimensionReportTable();
dimensionReportTable();
styleOrientationSection();
orientFunc(orientReport);                   // orientation status function invoked on page load    
orientReport.addListener(orientFunc);       // orientation status function invoked on event
    