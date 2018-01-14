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
**Citation/Note/Description**    | **Research Sources**                                                
---------------------- | ---------------------------------------------------------------------------
**screen resolutions** | http://mediag.com/news/popular-screen-resolutions-designing-for-all/ 
**-**                  | https://i1.wp.com/thedigitaldisciple.net/wp-content/uploads/2016/09/Tablet-Screen-Master-2016-09-21-Alpha-Sort.jpg
**-**  | https://www.w3schools.com/browsers/default.asp   (browser statistics for all devices) 
**-**  | https://stackoverflow.com/questions/6666907/how-to-detect-a-mobile-device-with-javascript 
**-**  | http://www.hand-interactive.com/resources/detect-mobile-javascript.htm
**-**  | https://developer.mozilla.org/en-US/search?q=navigator.userAgent
**-**  | https://developer.mozilla.org/en-US/Apps/Progressive/Responsive/responsive_design_building_blocks
**-**  | https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
**-**  | https://www.w3schools.com/cssref/css_units.asp
**-**  | -
**-**  | -
**-**  | -
  

  
  
  
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:

### :arrow_down_small: **Algorithmic Responsive Design:**

No question one of my last frontiers to explore in full stack web development was RWD. There are still many stones I have yet to turn over in RWD. But within the first couple of weeks of RWD research I realized I could use linear equations to manage responsiveness.

I wrote an RWD development tool called **Algorithmic Response Tool**. It's a beta verion but is useful as is.

### Theory of Operation:
This tool asks for the desired size of an Element at viewport width "A" and also at viewport width "B." It then calculates
and creates a **sizing equation** to linearly determine what the element's size should be. This sizing equation then calculates a proportionaly sized element regardless of viewport width. The sizing equation is intended for use in Javascript HTML DOM or equivalent to manipulate CSS properties as well as non CSS components.


Media queries not needed.


## Using the Algorithmic Response Tool:
You can download and run the files or for a quick look click: [**response-tool.html**](http://www.tarptiedown.com/response/response-tool.html)

**Step 1:** Enter the viewport width and element size you desire on a large viewport such as a desktop or laptop.
**Step 2:** Enter the viewport width and element size you desire on a small viewport such as a mobile phone.
**Step 3:** Click the create equation button.
**Step 4:** Now click the copy button and paste the equation into your Javascript as needed.

## Example Code
    document.getElementById("title").style.fontSize = (0.00109)*(width) + 0.90769 + "em";      // 3em at 1920 - 1.3em at 360

