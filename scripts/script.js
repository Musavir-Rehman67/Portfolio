const image = document.querySelector("img");
image.onclick = () => {
    const mySrc = image.getAttribute("src");
    if (mySrc === "images/musa.jpg" ) {
        image.setAttribute("src","images/black_shirt.jpg");
    } else{
        image.setAttribute("src","images/musa.jpg")
    }
};

const personal = {
    firstName:"Musa",
    lastName:"Rehman",
    rollName:33,
    
    fullName:function(){
        return personal.firstName + " " + this.lastName
    }
}
document.getElementById("name").innerHTML = personal.fullName()
