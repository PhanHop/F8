function myChangeList(type,element){
    let pass = document.getElementsByClassName('tab-item');
    for(i=0;i<pass.length;i++){
        pass[i].style.background ='brown';
    }
    element.style.background = 'orange';
    document.getElementById(type).style.display = 'flex';
    switch(type){
        case 'list-one':
            document.getElementById('list-two').style.display = 'none';
            document.getElementById('list-three').style.display = 'none';
            break;
        case 'list-two':
            document.getElementById('list-one').style.display = 'none';
            document.getElementById('list-three').style.display = 'none';
            break;
        case 'list-three':
            document.getElementById('list-one').style.display = 'none';
            document.getElementById('list-two').style.display = 'none';
            break;
    }
}