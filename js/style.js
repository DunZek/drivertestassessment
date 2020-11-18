const nav = document.querySelector('nav');
const main = document.querySelector('main');
const body = document.querySelector('body');

// Change panel group and color scheme
body.addEventListener('mousemove', (mouseEvent) => {

    // Technical
    const margin = 0.15
    const margin_left = margin*window.innerWidth
    const margin_right = window.innerWidth - margin*window.innerWidth
    let xpos, ypos
    if (mouseEvent){
    //Viewport
    xpos = mouseEvent.screenX;
    ypos = mouseEvent.screenY;
    } else {
    //IE
    xpos = window.event.screenX;
    ypos = window.event.screenY;
    }

    // Detect mouse on areas
    const keyframed = [nav, main, body]
    if (xpos <= margin_left){
        for (e in keyframed){
            keyframed[e].classList.add('to_blue')
        }
    } else if (xpos >= margin_right){
        for (e in keyframed){
            keyframed[e].classList.remove('to_blue')
        }
    }

    console.log(xpos, ypos)
})
