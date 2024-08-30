const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');
let painting = false;  // Track painting status
let brushColor = document.getElementById('colorPicker').value;
let brushSize = document.getElementById('brushSize').value;

// Start painting on mouse down
function startPosition(e) {
    painting = true;
    draw(e);  // Draw a dot immediately on click
}

// Stop painting on mouse up or mouse out
function endPosition() {
    painting = false;
    ctx.beginPath();  // Reset the path for new lines
}

// Drawing function
function draw(e) {
    if (!painting) return;  // Exit if not painting

    ctx.lineWidth = brushSize;  // Set brush size
    ctx.lineCap = 'round';      // Round line endings
    ctx.strokeStyle = brushColor;  // Set brush color

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

// Event listeners for drawing actions
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mouseout', endPosition);
canvas.addEventListener('mousemove', draw);

// Change brush color
document.getElementById('colorPicker').addEventListener('change', (e) => {
    brushColor = e.target.value;
});

// Change brush size
document.getElementById('brushSize').addEventListener('change', (e) => {
    brushSize = e.target.value;
});

// Clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}