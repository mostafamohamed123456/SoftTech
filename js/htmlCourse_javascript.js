let sidenavBarBtns = document.getElementsByClassName("side-navbar-course-list")[0].children;
let content = document.getElementsByClassName("content")[0].children;
let images = document.getElementsByTagName("img");
let imgFullScreen = document.getElementById("fullscreen-img");
let closeFullScreenBtn = document.getElementById("close");
let fullScreenElem = document.querySelector(".img-fullscreen-container");


window.onload = function(){
    return newFunction();
}

function newFunction() {
    for (let x = 0; x <= sidenavBarBtns.length; x++) {
        sidenavBarBtns[x].addEventListener("click", () => {
            if (sidenavBarBtns[x].getAttribute("id") == content[x].getAttribute('id')) {
                for (let y = 0; y <= content.length; y++) {
                    if (content[x] == content[y]) {
                        content[y].classList.remove("hide");
                    } else {
                        content[y].classList.add("hide");
                    }
                }
            }
        });
    }
}
for (let i = 0; i <= images.length; i++) {
    images[i].addEventListener("click", () => {
        fullScreenElem.classList.remove("hide-container");
        imgFullScreen.setAttribute("src", images[i].getAttribute("src"));
    });
    closeFullScreenBtn.addEventListener("click",()=>{
        fullScreenElem.classList.add("hide-container");
    })
}
