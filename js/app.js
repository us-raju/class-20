document.getElementById('sidebar_button').addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('show')
})

document.getElementById('m-glass').addEventListener('click', function(){
    document.getElementById('search_box').classList.add('show')
})
document.getElementById('scerch_close').addEventListener('click', function(){
    document.getElementById('search_box').classList.remove('show')
})

document.getElementById('colorFlipper').addEventListener('click', function(){
    let hexcode = '#';

    hexcode += (Math.random()*1000).toString(16).substring(4,10)
    document.body.style.background = hexcode;
    console.log(hexcode)
})

// setInterval (function(){
//     let hexcode = '#';

//     hexcode += Math.random().toString(16).substring(2,8)
//     document.body.style.background = hexcode;
// }, 1000)




let num = 85
switch (num) {
    case  num >= 80 && num <= 100:
        text = 'A+';
        break;
    case  num >= 70 && num < 80:
        text = 'A';
        break;
    case  num >= 60 && num < 70:
        text = 'A-';
        break;
    case  num >= 50 && num < 60:
        text = 'B';
        break;
    case  num >= 40 && num < 50:
        text = 'C';
        break;
    case  num >= 33 && num < 40:
        text = 'D';
        break;
    case  num >= 0 && num < 33:
        text = 'F';
        break;
        default:
    text = 'invlid number';
}

document.getElementById("result").innerHTML = text;
// console.log(text);




for (let i = 1; i <= 100; i++){
    if(i % 2 == 0){
        document.write(i + 'is even number' + '<br>')
    }
}


for (let i = 1; i <= 100; i++){
    if(i % 2 != 0){
        document.write(i + 'is odd number' + '<br>')
    }
}





