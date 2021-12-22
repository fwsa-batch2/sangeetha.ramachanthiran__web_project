//Create variables for canva sheet and tools and context...!
    const draw = document.getElementById("canvaSheet");
    const drawingTools = document.getElementById("drawingTools");
    const drawingContext = draw.getContext('2d');
    
//Create offset for X and Y co-ordinators..!
    const drawOffSetX = draw.offsetLeft;
    const drawOffSetY = draw.offsetTop;

//offset for X and Y co-ordinate subract from inner width and height and create sheet width and height..!
    draw.width = window.innerWidth - drawOffSetX;
    draw.height = window.innerHeight - drawOffSetY;

    let isDraw = false;
    let lineWidth = 5;

    let coordinateX;
    let coordinateY;
 
    drawingTools.addEventListener('click', e =>{
      if(e.target.id === 'clear'){
        drawingContext.clearRect(0, 0, draw.width,draw.height);
      }
    });

    drawingTools.addEventListener('change' , e=>{
        if(e.target.id === 'chooseColor'){
            drawingContext.strokeStyle = e.target.value;
        }

        if(e.target.id === 'lineWidth'){
            lineWidth = e.target.value
        }
        
    });

    //This variable for 58th line...!
    const canva = (e) => {
        if(!isDraw){
            return;
        }
        drawingContext.lineWidth = lineWidth;
        drawingContext.lineCap = 'round'

        drawingContext.lineTo(e.clientX - drawOffSetX, e.clientY);
        drawingContext.stroke();
    }
    
    draw.addEventListener('mousedown',(e) =>{
        isDraw = true;
        coordinateX = e.clientX;
        coordinateY = e.clientY;
    });

    draw.addEventListener('mouseup', e =>{
        isDraw = false;
        drawingContext.stroke();
        drawingContext.beginPath();
    });

    draw.addEventListener('mousemove',canva);


    
    
    


