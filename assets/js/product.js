function myChange(id){
    let sp = document.getElementById(id).getAttribute('src');
    document.getElementById("main-img").setAttribute('src',sp);
}