# Responsive Web Design using algorithms

### **Obtain pixel perfect presentation regardless of viewport size** 


### :arrow_down_small: **Plunker**
Run in Plunker | Citation / Note
----------------------------------------------------------------------------|--------------------------------------------------------
[View in Plunker*](https://plnkr.co/edit/Kycfo9gBu5gfeR5jTkyy?p=info) | * **For file viewing only** - Use a browser for proper responsive performance
[View in Browser](http://www.tarptiedown.com/response/response-tool.html) | For demonstrating responsive performance

:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:

### :arrow_down_small: **My Metadata**
**Research**          |  **Info** 
------------------- | ------------------------------------------------------------------------
**Date:**           | 01/11/2018
**Archive_Title:**  | Responsive-Design-Research
**Objective:**      | To develop responsive design strategies
**Catalyst:**       | To make web pages mobile friendly                                                                   

:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:

### :arrow_down_small: **Research Links**
**Citation/Note/Description**    | **Research Sources**                                                
---------------------- | ---------------------------------------------------------------------------
**screen resolutions** | http://mediag.com/news/popular-screen-resolutions-designing-for-all/ 
**screen resolutions** | https://i1.wp.com/thedigitaldisciple.net/wp-content/uploads/2016/09/Tablet-Screen-Master-2016-09-21-Alpha-Sort.jpg
**browser stats**      | https://www.w3schools.com/browsers/default.asp   (browser statistics for all devices) 
**device detection**   | https://stackoverflow.com/questions/6666907/how-to-detect-a-mobile-device-with-javascript 
**device detection**   | http://www.hand-interactive.com/resources/detect-mobile-javascript.htm
**user agent**         | https://developer.mozilla.org/en-US/search?q=navigator.userAgent
**responsive guide**   | https://developer.mozilla.org/en-US/Apps/Progressive/Responsive/responsive_design_building_blocks
**reponsive guide**    | https://developer.mozilla.org/en-US/docs/Tools/Responsive_Design_Mode
**font sizing**        | https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
**CSS units**          | https://www.w3schools.com/cssref/css_units.asp

:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:

## :arrow_down_small: **Algorithmic Responsive Design Tool**

No question one of my last frontiers to explore in full stack web development was RWD. There are still many stones I have yet to turn over in RWD. But within the first couple of weeks of RWD research I realized I could use linear equations to manage responsiveness.

I wrote an RWD development tool called **Algorithmic Response Tool**. It's a beta version but is useful as is.

## Theory of Operation
This tool asks for the desired element size for the 1st viewport width and the desired element size for the 2nd viewport width. It then calculates and creates a **sizing equation** to determine what the element's size should be at any given viewport width based on your input criteria. The sizing equation is intended for use in Javascript HTML DOM or equivalent to manipulate CSS properties as well as non CSS affected components. The equation has a simple slope-intercept format.

For example: **(0.00256) x (width) + 0.07692** defines an element size
of **5** at a viewport width of **1920px** and a size of **1** at a viewport width of **360px**


## Using the Algorithmic Response Tool
You can download and run the files or for a quick look click: [**response-tool.html**](http://www.tarptiedown.com/response/response-tool.html)

**Prep:** First decide how you want an element to look or behave in a large viewport. Then decide how you want the same element to look or behave in a small viewport. These are the two points needed to create the sizing equation.

**Step 1:** Enter the viewport width and element size you desire on a large viewport such as a desktop or laptop.   
**Step 2:** Enter the viewport width and element size you desire on a small viewport such as a mobile phone.    
**Step 3:** Click the create equation button.    
**Step 4:** Now click the copy button and paste the equation into your Javascript as needed.

## Example Code
**Note:** The code is written in Javascript HTML DOM.

    document.getElementById("title").style.fontSize = (0.00109)*(width) + 0.90769 + "em";      
    // 3em at 1920 - 1.3em at 360
    // width is viewport width
    
    document.getElementById("title").style.fontSize = (-0.01923)*(width) + 56.92308 + "vw";  
    // 20vw at 1920 - 50vw at 360
    // width is viewport width
    
    
## App Features
**1:** Equation Maker   
**2:** Size finder at given viewport width   
**3:** Reported device widths using various window properties    
**4:** Reported Device orientation using event listener.   

## Comments, Tips and Pointers
**1:** As of this juncture - I use **`window.screen.availWidth`** to determine the device's viewport width.   
**2:** You can just as easily do height sizing.   
**3:** This app is responsive so try it out on your various devices.   
**4:** Technically, you are not limited to relative sizing with ***em*** or ***%*** etc. You can safely use ***px*** as well.   
**5:** You are not limited to grid constraints.   
**6:** For non-linear response I recommend defining your response curve then overlaying multiple linear equations to closely approximate your non-linear response curve. For example:   

    for(i=0; i<document.getElementsByClassName("equationPoints1").length; i++ ){
        if(width >= 960){ 
            document.getElementsByClassName("equationPoints1")[i].style.left = "20%";                               
            // 20% at 960 and up
        } 
        else if(width >= 480 && width < 960){
            document.getElementsByClassName("equationPoints1")[i].style.left = (-0.04167)*(width) + 60.00000 + "%"; 
            // 20% at 960 - 40% at 480
        }
        else {
            document.getElementsByClassName("equationPoints1")[i].style.left = (-0.16667)*(width) + 120.00000 + "%";
            // 40% at 480 - 60% at 360
        }
    }
**7:** Review the code blocks in the Javascript file for more details. All is written in simple Javascript HTML DOM for clarity.   
**8:** If using Google Chrome right click anywhere on browser page, then click **inspect** to open developer tools, then click on **toggle device toolbar** *(on top menu bar)*, then use features to emulate various device widths and sizes to hone responsiveness. Other browsers also support developer tools.
