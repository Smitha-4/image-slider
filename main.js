
function changeImages(){
    var images=["img1.jpg","img2.jpg","img3.jfif","img4.jpg","img5.jfif"]
    x=0
    document.getElementById("picture").src=images[x]
    x++;
     if(x==4){
        x=0;
     }
}