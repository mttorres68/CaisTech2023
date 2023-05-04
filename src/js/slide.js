let count = 1;
document.getElementById("radio1").checked = true;


setInterval( function() {
    netImagem();
}, 2500)


function netImagem(){
    count++;
    if(count > 5){
        count=1;
    }

    document.getElementById("radio"+count).checked = true;

}