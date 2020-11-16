//SET THE DATE AT THE TOP OF THE PAGE
console.log (moment())
$("#currentDay").text();
var now = moment ();
var date = $(currentDay).text(now.format("dddd, MMMM Do"));
//(today.formatt("MMMM Do YYYY, H:mmA"))

$(".saveBtn").on("click", function(){
    console.log("clickedsave")
});
