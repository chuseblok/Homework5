

var today = moment();
$(".day").text(today.format("MMM Do, YYYY"));
console.log(today)

var time = moment();
$(".time-block").text(time.format("LT"));
console.log(time)

$( function() {
    $( "sortable" ).sortable("day");
  } );