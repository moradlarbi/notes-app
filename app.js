var boutton = document.getElementById('add');
var i =0;
var couleurs =["#FF4F5C","#9AF777","#77D8F7","#E9F92F"];
var notes = document.getElementById('notes');
var tab3 = JSON.parse(localStorage.getItem('tab3'));
var search = document.getElementById("searcharea");
if (tab3){
    tab3.forEach(item =>{
        addNewNote(item[0],item[1]);
    })
}
boutton.addEventListener("click",() =>{
    addNewNote('');
})
setInterval(misaJour, 200);
function addNewNote(item1 = '',item2 = ''){
    misaJour();
    var x = document.createElement('li');
    x.classList.add("note");
    var y = document.createElement('span');
    y.classList.add("delete");
    y.innerText = 'x';
    x.appendChild(y);
    y = document.createElement('form');
    y.classList.add("text");
    var w = document.createElement('input');
    w.classList.add("title");
    w.setAttribute("type","text");
    w.setAttribute("placeholder","title");
    w.value = item1;
    y.appendChild(w);
    w = document.createElement('textarea');
    w.classList.add("contenue");
    w.value = item2;
    y.appendChild(w);
    x.appendChild(y);
    x.style.borderBottom = "10px solid "+ couleurs[i];
    x.style.borderRadius = "5%";
    if (i === couleurs.length -1){
        i = 0;
    }
    else{
        i++;
    }
    notes.appendChild(x);
}
function misaJour(){
    if (search.value !== ''){
        var b = document.querySelectorAll("#notes input[type=text]");
        b.forEach(item =>{
            item.parentNode.parentNode.classList.remove("hidden");
            if (item.value.includes(search.value) === false){
                item.parentNode.parentNode.classList.add("hidden");
            }        
        })
    }
    else{
        var b = document.querySelectorAll("#notes input[type=text]");
        b.forEach(item =>{
            item.parentNode.parentNode.classList.remove("hidden");
        })
    }
    
    var supp = document.querySelectorAll('.delete');
    supp.forEach(item =>{
        item.addEventListener("click",function(){
            this.parentNode.remove();
        })
    })
    var cpt = 0;
    var index = [];
    var a = document.querySelectorAll('textarea');
    const tab2 = [];
    a.forEach(item =>{
        if (item.value !== ''){
            tab2.push(item.value);
            index.push(cpt);
        }
        cpt++;
    })
    var b = document.querySelectorAll("#notes input[type=text]");
    const tab1 = [];
    cpt = 0;
    b.forEach(item =>{
        if(index.includes(cpt)){
            tab1.push(item.value);
        }
        cpt++;
    })
    cpt = 0;
    var tab3 = [];
    while(cpt < tab2.length){
        tab3.push([tab1[cpt],tab2[cpt]]);
        cpt++;
    }
    localStorage.setItem('tab3',JSON.stringify(tab3));
       
} 



