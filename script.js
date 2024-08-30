const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');
let painting = false; 
let brushColor = document.getElementById('colorPicker').value;
let brushSize = document.getElementById('brushSize').value;

// Start painting 
function startPosition(e) {
    painting = true;
    draw(e);  
}

// Stop painting 
function endPosition() {
    painting = false;
    ctx.beginPath();  
}

// Drawing 
function draw(e) {
    if (!painting) return;  

    ctx.lineWidth = brushSize;  
    ctx.lineCap = 'round';      
    ctx.strokeStyle = brushColor;  

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mouseout', endPosition);
canvas.addEventListener('mousemove', draw);

// brush color
document.getElementById('colorPicker').addEventListener('change', (e) => {
    brushColor = e.target.value;
});

// brush size
document.getElementById('brushSize').addEventListener('change', (e) => {
    brushSize = e.target.value;
});

// Clear
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}