




function rubahMiniKeBig (element){
    const bigImage = document.querySelector(".big-image")
    const miniImage = element
    const srcMiniImage = miniImage.getAttribute("src")
    const srcBigImage = bigImage.getAttribute("src")

    const changeSRC = function(){
        bigImage.removeAttribute("src")
        bigImage.setAttribute("src",`${srcMiniImage}`)
    }


    if (element.classList.contains = "mini-image"){
        changeSRC()
    }
    // else if(srcBigImage == srcMiniImage){}
}


const containerMiniElement = document.querySelector(".content-mini")


containerMiniElement.addEventListener("click",function(e){
    rubahMiniKeBig(e.target)
    // if (e.target.classList.contains("pa")){console.info("yes")}
    // else {console.info("no")}
})