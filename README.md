# Responsive Web Design using algorithms

### **Obtaining pixel precision presentation regardless of viewport size** 


### :arrow_down_small: **Plunker**
Run in Plunker | Citation / Note
----------------------------------------------------------------------------|--------------------------------------------------------
[View in Plunker](https://plnkr.co/edit/Kycfo9gBu5gfeR5jTkyy?p=info) | For file viewing - Use a browser for responsive performance
[View in Browser](http://www.tarptiedown.com/response/response-tool.html) | For demonstrating responsive performace

:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:

### :arrow_down_small: **My Metadata**
**SelfEd**          |  **Info** 
------------------- | ------------------------------------------------------------------------
**Date:**           | 01/11/2018
**Archive_Title:**  | Responsive-Design-Research
**Objective:**      | To develop responsive design strategies
**Catalyst:**       | To make web pages mobile friendly                                                                   

:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:

### :arrow_down_small: **Tutorial Links**
**   Citation / Note   **    | **Research Sources**                                                
---------------------- | ---------------------------------------------------------------------------
**screen resolutions** | http://mediag.com/news/popular-screen-resolutions-designing-for-all/ 
**-**                  | https://i1.wp.com/thedigitaldisciple.net/wp-content/uploads/2016/09/Tablet-Screen-Master-2016-09-21-Alpha-Sort.jpg
**-**  | https://www.w3schools.com/browsers/default.asp   (browser statistics for all devices) 
**-**  | https://stackoverflow.com/questions/6666907/how-to-detect-a-mobile-device-with-javascript 
**-**  | -
**-**  | -
**-**  | -
**-**  | -
**-**  | -
**-**  | -
**-**  | -
**-**  | -
                      
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:

### :arrow_down_small: **Learn Process:**

Had a brief moment where I needed to brush up on anonymous functions. Found this great Noah Stokes tutorial (listed in Tutorial Links). He gets reasonably complex at the end of his tutorial. I plan to write some SelfEd code based on his example (hopefully soon). For now, his tutorial is all that's needed.
 
03/05/2017   
In selling off a client's grow gear I used ng-repeat to display rows of images and captions. The data array that ng-repeat is accessing is an array of objects. The caption property is normally a string. But I replaced a couple of captions with self executing anonymous functions. The functions have return statements and **VOILA!** the return values are displayed as the caption property.
See **Project-TTD-Grow-Gear-Sale** project where I'm deploying this with the intent of accessing outside data. Here's a snip of the example code from the project. Notice the function calls on the first and last objects.

    imageCtrlSelf.iList = [ {"image":"GFS-Images/IMAG2174.jpg", "label":"GFS-Images/IMAG2181.jpg", 
                                        "caption": (function(){return "This comment is from a function call"})()}, 
                                    {"image":"GFS-Images/IMAG2175.jpg", "label":"GFS-Images/IMAG2179.jpg", 
                                        "caption":" Add comments here - Add comments here - Add comments here"},
                                    {"image":"GFS-Images/IMAG2176.jpg", "label":"GFS-Images/IMAG2180.jpg", 
                                        "caption":" Add comments here - Add comments here - Add comments here"},
                                    {"image":"GFS-Images/IMAG2177.jpg", "label":"GFS-Images/IMAG2180.jpg", 
                                        "caption":" Add comments here - Add comments here - Add comments here"},
                                    {"image":"GFS-Images/IMAG2178.jpg", "label":"GFS-Images/IMAG2183.jpg", 
                                        "caption":  (function(){return 25;})()}    
From a javascript block you need to assign a self executing function to a value for it to work properly. In this case the function is called **"selfRunfunc"** and will execute on load due to the parans at the end.    

    var selfRunfunc = function(){
        alert("This function is self executing");
    }();

