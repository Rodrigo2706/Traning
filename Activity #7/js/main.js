/*!
* All Rights Reserved
* This software is proprietary information of
* Intelligent Sense
* Use is subject to license terms.
* Filename: main.js
*/

/*
* Author: Rodrigo Navarro Vargas
* All this is done while the page loads.
*/

$(window).load(function() {

/*
* Author: Rodrigo Navarro Vargas
* Helper used for adding 1 to the elements in
* the array for the positions of the rank position.
* That way, the 1st position is 1 and not 0.
*/
  Handlebars.registerHelper("inc", function(value, options)
  {
    return parseInt(value) + 1;
  });

/*
* Author: Rodrigo Navarro Vargas
* Ajax function is used to retrive information from a web page.
*/
  var templateSource = $("#results-template").html();
  var template = Handlebars.compile(templateSource);
  var resultsPlaceholder = $("#results");

  $.ajax({
    url:"http://api.ht.fuseamplify.com/api/artist/top?aggregate=true",
    dataType: 'jsonp',
    success:function(json){

      data = json;

      //After information is retrived, it is loaded into the page.
      $(document.body).append(template(data));

      //After that, all elements of the page get an event.
      addEvents();
    },
    error:function(){
      alert("Error");
    }
  });

/*
* Author: Rodrigo Navarro Vargas
* Funtion used for adding events to all the spans in the html
* Inputs: none
* Output: all spans, including (spnHide, spnShow), now have an action.
*/
  function addEvents() {
    $('.row').each(function(index, element){

      //All elements that will be modified
      var spnHide = $(this).find('.spnHide');
      var spnShow = $(this).find('.spnShow');
      var details = $(this).find('.details');
      var h1 = $(this).find('h1');
      var row = $(this);

      //Animation for hiding the details elements
      spnHide.click(function(event){
        spnHide.hide(2000);
        spnShow.show(1000).animate({
          left: "35px",
          width: "80px"
        },1000);
        h1.animate({
          position: "adsolute",
          "margin-right": "-60px"
        },1000);
        details.hide(2000);
        row.animate({
          width: "160px"
        }, 2000);
      });

      //Animation for showing the details elements
      spnShow.click(function(event){
        spnShow.hide(2000);
        spnHide.show(1000).animate({
          right: "-27px"
        },1000);
        h1.animate({
          "margin-right": "0px",
          top: "-20px"
        },1000);
        details.show(1000);
        row.animate({
          width: "550px"
        }, 2000);
      });

    });
  }
});