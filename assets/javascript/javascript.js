$(function(){
    populateButtons(searchArray, 'searchButton', '#buttonsArea');
    console.log("Page Loaded");

})

var searchArray = ['Ewok', 'BB-8', 'IG-88'];

function populateButtons(searchArray,classToAdd,areaToAdd){
    $(areaToAdd).empty();
    for(var i=0;i<searchArray.length;i++){
        var a = $('<button>');
        a.addClass(classToAdd);
        a.attr('data-type',searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAdd).append(a);
    }
}