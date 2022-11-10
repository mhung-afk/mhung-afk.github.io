var isChromium = window.chrome;
var winNav = window.navigator;
var vendorName = winNav.vendor;
var isOpera = typeof window.opr !== "undefined";
var isIEedge = winNav.userAgent.indexOf("Edg") > -1;
var isIOSChrome = winNav.userAgent.match("CriOS");

if (isIOSChrome) {
   // is Google Chrome on IOS
} 
else if(
  isChromium !== null &&
  typeof isChromium !== "undefined" &&
  vendorName === "Google Inc." &&
  isOpera === false &&
  isIEedge === false
) {
   // is Google Chrome
   document.getElementById("playAudio").remove()
} else { 
   // not Google Chrome 
   document.getElementById("iframeAudio").remove()
}

// image show
let styleShow = {
    dotSize: 1,
    particleType: 'halftone',
    transitionTime: 24000,
    idleTime: 4000,
    color: 'black',
    separation: 8
}

let img = 'my_love.jpg'

const image = document.getElementById('image')
image.src = img

function animate(image, styleShow) {
    console.log('run')
    pict2pix.animate(
        {
            image: image,
            ...styleShow
        }
    );
}

window.onload = () => animate(image, styleShow)


//text show
function showText(text) {
    figlet(text,
        {
            font: 'Ghost',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true
        },
        function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                return;
            }
            document.getElementById('text').innerHTML = '<p>' + data.replace('\n', '<pre>') + '</p>'
        }
    );
}

const listText = ['My love!', "I just wanna say", "I love u the most!!!"]
setInterval(function () {
    const firstEle = listText.splice(0, 1)[0]
    console.log(listText)
    listText.push(firstEle)
    showText(firstEle)
}, 8000)