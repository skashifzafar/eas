const container=document.querySelector('#container')
for (var i=0;i<50;i++){
    const r=document.createElement('div')
    for (var j=0;j<50;j++){
        const b=document.createElement('div')
        const c=document.createElement('div')
        c.id=i+'-'+j
        //c.textContent='Square '+i+'-'+j
        c.style.border='solid'
        c.style.borderWidth='1px';
        b.appendChild(c)
        r.appendChild(b)
    }
    container.appendChild(r)
}