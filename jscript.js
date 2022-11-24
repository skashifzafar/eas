function grid_input(){
   size=parseInt(prompt('Please enter the size of the grid.','10'),10)
}
var size=10
const container=document.querySelector('#container')
const butt=document.createElement('input')
butt.type='button'
butt.value='Click to input size'
const grid=document.createElement('div')
grid.id='grid'
const bdiv=document.createElement('div')
bdiv.id='bdiv'
bdiv.appendChild(butt)
document.addEventListener('click',function(){grid_input()})
console.log(size)
container.appendChild(bdiv)
container.appendChild(grid)
for (var i=0;i<size;i++){
    const r=document.createElement('div')
    for (var j=0;j<size;j++){
        const b=document.createElement('div')
        const c=document.createElement('div')
        c.id=i+'-'+j
        c.style.border='solid'
        c.style.borderWidth='1px';
        b.appendChild(c)
        r.appendChild(b)
    }
    grid.appendChild(r)
}