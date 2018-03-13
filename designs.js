// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid() {

let  y = inputHeight.value
let  x = inputWidth.value

 	for ( var rows = 0; rows < x; rows++) {
 		$("#pixelCanvas").append("<tr id = row" + rows + ">" + "</tr>");
 		for (var columns = 0; columns < y; columns++) {
 			$("#row"+rows).append("<td class=cell></td>");
 		}
 	}
}

function clearGrid(){
	$("tr").remove();
	$("td").remove();
}

$("#submit_button").click(function() {
    clearGrid();
    makeGrid();
    $(".cell").click(function() {
        $(this).css("background-color",colorPicker.value);
    });
});
