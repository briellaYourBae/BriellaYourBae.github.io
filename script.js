const $ = (id) => document.getElementById(id);

//Changing the image of the crewmate.
function bg_change(element, id){
    element.style.background = `url(https://i.ibb.co/zfwfQJy/Whats-App-Image-2022-12-21-at-19-00-19.jpg)`;
    element.style.backgroundSize = "cover";
    element.style.backgroundPosition = "center";
}

//Deleting the notification on click.
function delete_element(element){
    element.style.opacity = "0";
    setTimeout(function(){
        element.remove();
    },500);
}

//The color of the message box border.
function border_color(element, color){
    element.style.borderLeft = "3px solid " + color;
    element.style.borderRight = "3px solid " + color;
}

//Text writing animation;
//element is where you write the text.
//text is the actual text you want to write.
function write_text(element, text, counter = 0){
    if(text.length > counter){
        element.innerHTML += text[counter];
        setTimeout(function(){
            //looping the function until the text is written. Using the same parameters as the main function.
            write_text(element, text, counter);
        },50);
        counter++;
    }
}

function pop_up(type = "default", message = "No New Messages", mode = "light"){
    let el = document.createElement("div");
    $("notifications-container").appendChild(el);
    el.classList = "main_image";

    //Adding the text.
    let text = document.createElement("div");
    el.appendChild(text);
    text.classList = "pop_up_text";
    switch(type){
        case "default":
            bg_change(el, "6CoEKz2");
            border_color(text, "whitesmoke");
            break;
        case "success":
            bg_change(el, "UjvApH7");
            border_color(text, "lime");
            break;
        case "warning":
            bg_change(el, "v62NWrA");
            border_color(text, "gold");
            break;
        case "error":
            bg_change(el, "CPMbQyO");
            border_color(text, "red");
            break;
        case "important":
            bg_change(el, "o5CiSI9");
            border_color(text, "black");
            break;
        case "secret":
            bg_change(el, "3HEXpwH");
            border_color(text, "purple");
            text.classList.add("secret");
            break;
    }
    //Pop up appearance
    setTimeout(function(){
        el.style.opacity = "1";
        setTimeout(function(){
            //Text box appearance
            text.style.minWidth = "200px";
            //Writing the message
            setTimeout(function(){
                let paragraph = document.createElement("p");
                text.appendChild(paragraph);
                write_text(paragraph, message);
            },1000);
        },400)
    },100);
    //text box background
    if(mode == "dark"){
        text.style.background = "#333333";
        text.style.color = "white";
    }
    else{
        text.style.background = "whitesmoke";
    }

    //Deleting the pop up.
    el.addEventListener("click", function(){
        delete_element(el);
    });
}

//click effect.
function tap(evt){
    let x=evt.clientX;
    let y=evt.clientY;
    let cr=document.createElement("div");
    let ap=document.body.appendChild(cr);
    cr.style.left=`${x - 1}px`;
    cr.style.top=`${y - 1}px`;
    cr.classList = "bomb";
    
    function explode(){
        cr.style.opacity="0";
        cr.style.transform=`scale(12)`;
        setTimeout(deleteBomb,1000);
    }
    setTimeout(explode,25);
    
    function deleteBomb(){
        cr.remove();
    }
}

//L o a d
window.onload = function(){
    document.body.addEventListener("click",tap);
    setTimeout(function(){
        pop_up(
            type = "default",
            message = "Hello Kamu, Kepo Ya? saranku, gunakan menggunakan mode landscape yaw"
        );
    },1000);
    for(let i = 0; i < document.getElementById("others").getElementsByTagName("a").length; i++){
        document.getElementById("others").getElementsByTagName("a")[i].addEventListener("click", function(){
            pop_up(
                type = "error",
                message = "Salah klik broh."
            );
        })
    }
}