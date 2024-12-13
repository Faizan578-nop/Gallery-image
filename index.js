




function rubahMiniKeBig (element){
    const bigImage = document.querySelector(".big-image")
    const miniImage = element
    const srcMiniImage = miniImage.getAttribute("src")
    const srcBigImage = bigImage.getAttribute("src")

    //fungsi untuk merubah src di image
    const changeSRC = function(){
        bigImage.removeAttribute("src")
        bigImage.setAttribute("src",`${srcMiniImage}`)    
        bigImage.classList.add("fade")


        //Animation
        if (srcMiniImage !== srcBigImage){setTimeout(function(){bigImage.classList.remove("fade")},100)}
        else if (srcBigImage==srcMiniImage){bigImage.classList.remove("fade")}
        //Animation End
        
    }
    if (element.classList.contains = "mini-image"){
        changeSRC()
    }
    // else if(srcBigImage == srcMiniImage){}
}


const containerMiniElement = document.querySelector(".content-mini")

containerMiniElement.addEventListener("click",function(e){
    rubahMiniKeBig(e.target)

    //Animation
    const miniImage =Array.from( document.getElementsByClassName("mini-image"))
    miniImage.forEach(function(value,index) {value.classList.remove("active")})
    e.target.classList.add("active")
    //Animation End
})