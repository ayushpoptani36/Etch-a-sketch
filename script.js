
const slider=document.querySelector('.grid_slider');
const sliderLabel=document.querySelector('label[for="grid_slider"]');
const canvas=document.querySelector('.canvas');
slider.addEventListener('input',function(){
    sliderLabel.textContent=`${slider.value} X ${slider.value}`;
    createDivs();
});
const clearButton=document.querySelector('.clear');
const eraser=document.querySelector('.eraser');
const colorArr=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
let clicked=0;
let rgbMode=0;
let eraserMode=0;
let colorMode=0;
createDivs();

clearButton.addEventListener('click',clearCanvas);

const rgbButton=document.querySelector('.rgb_mode');
const colorButton=document.querySelector('.color_mode');
const picker=document.querySelector('.color_picker_cover');
const pickerHidden=document.querySelector('.color_picker');
picker.addEventListener('click',()=>pickerHidden.click());
pickerHidden.addEventListener('change',()=>{
    picker.style.backgroundColor=pickerHidden.value;
});
function createDivs(){
    canvas.textContent="";
    let number=Number(slider.value);
    let width=500/number;
    let height=width;
    for(let i=0;i<(number*number);i++){
        let temp=document.createElement('div');
        temp.setAttribute('style',`min-width:${width}px;min-height:${height}px`);
        temp.classList.add("pixel");
        temp.addEventListener('mousedown',(e)=>{    let color;
            color=getColor();
            clicked=1;
            
    e.target.style.backgroundColor=color;
        });
        temp.addEventListener('mousemove',(e)=>{    if(clicked>0){
            let color;
            color=getColor();
    e.target.style.backgroundColor=color;
        }});
        temp.addEventListener('mouseup',(e)=>{
            clicked=0;
        });
        canvas.appendChild(temp);
    }
}


    
rgbButton.addEventListener('click',()=>{rgbMode=1
eraserMode=0;
});

colorButton.addEventListener('click',()=>{rgbMode=0;
    eraserMode=0;
});

function clearCanvas(){
    canvas.textContent="";
    createDivs();
}

function getColor(){
    if(eraserMode>0){
        return "white";
     }
     else if(rgbMode>0){
        return`#${colorArr[Math.floor(Math.random()*16)]}${colorArr[Math.floor(Math.random()*16)]}${colorArr[Math.floor(Math.random()*16)]}${colorArr[Math.floor(Math.random()*16)]}${colorArr[Math.floor(Math.random()*16)]}${colorArr[Math.floor(Math.random()*16)]}`;
     } 
     else{
         return pickerHidden.value;
     }
}

eraser.addEventListener('click',()=>eraserMode=1);

const buttons=document.querySelectorAll(`input[type=button]`);

buttons.forEach((e)=>e.addEventListener('click',clickedEffect));


function clickedEffect(e){
    buttons.forEach((f)=>f.classList.remove('clicked'));
    e.target.classList.add('clicked');

}