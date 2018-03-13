# master
p4z作品
<!DOCTYPE html>
<html>
<head>
    <title>Pixel Art Maker!</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Monoton">
    <link rel="stylesheet" href="styles.css">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>

</head>
<body>
    <h1>Lab: Pixel Art Maker</h1>

    <h2>Choose Grid Size</h2>
    <form id="sizePicker">
        Grid Height:
        <input type="number" id="inputHeight" name="height" min="1" value="1">
        Grid Width:
        <input type="number" id="inputWidth" name="width" min="1" value="1">
        <input type="button" id="submit_button" value="submit" >

    </form>

    <h2>Pick A Color</h2>
    <input type="color" id="colorPicker" value="#000000">

    <h2>Design Canvas</h2>
    <table id="pixelCanvas"></table>

    <script src="designs.js"></script>

</body>
</html>
