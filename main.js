        var canvas = document.getElementById("myCanvas");
        ctx = canvas.getContext("2d");
        var mouseEvent = "empty";
        var last_x;
        var last_y;
        colour = "black";
        width = 1;

    canvas.addEventListener("mousedown", my_mousedown);
    function my_mousedown(e) {
        colour = document.getElementById("colour").value;
        width = document.getElementById("width").value;
        radius = document.getElementById("radius").value;
        mouseEvent = "mouseDown";
}
    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e) {
        mouseEvent = "mouseUp";
    }
    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e) {
        mouseEvent = "mouseLeave";
    }
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e) {
        current_x = e.clientX - canvas.offsetLeft;
        current_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;
        console.log("last_postion_of_x =" + last_x + "last_postion_of_y =" + last_y);
        console.log("current_postion_of_x =" + current_x + "current_postion_of_y =" + current_y);
        ctx.arc(current_x, current_y, radius,0, 2 * Math.PI)
        ctx.stroke();
        }
        last_x = current_x;
        last_y = current_y;
    }
    function clearArea() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }