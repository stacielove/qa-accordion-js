// set actions
var action="click";
var speed="500";

$(document).ready(function(){
	
  // When you click on the li get next li element 'a'
  // Select all other answers (siblings) 
  // change the arrow icon so that it's facing down
  $('li.q').on(action,function(){
    $(this).next().slideToggle(speed).siblings('li.a').slideUp();

    var icon = $(this).children('i');
      // Every img that's not in the 'this' var remove the down arrow
      $('i').not(icon).removeClass('fa-chevron-down');
      // On the icon selected, toggle the down arrow class 
      icon.toggleClass('fa-chevron-down');
    });


});