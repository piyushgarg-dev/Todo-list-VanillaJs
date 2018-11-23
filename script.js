//alert("hey")
//var ul;
//var li;
//var h=document.createElement('h1')
//var myvalue=document.createTextNode("Hello World")
//h.appendChild(myvalue)
//document.querySelector('h1').appendChild(h)

function addItem(){
    
    var input=document.getElementById('input');
    var item=input.value;
    var ul= document.getElementById('list')
    var textnode=document.createTextNode(item)
    
    if(item==''){
        return false;
//       alert("c")
//        var p1=document.createElement('p')
//        p1.textContent="Enter Your todo!"
//        p.appendChild("my todo")
//        document.querySelector('p').appendChild(p1)
       }
    else{
        
        var li=document.createElement('li')
        
        var checkbox= document.createElement('input')
        checkbox.type='checkbox';
        checkbox.setAttribute('id','check')
                              
        var label=document.createElement('label');
        
        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        
        ul.insertBefore(li, ul.childNodes[0])
        li.className='visual'
        
        setTimeout(() => {
           //li.className='visual' ;
        },2);
        
        input.value='';
        
    }
    
}





