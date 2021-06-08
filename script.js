var borderTick = 9
document.getElementById("cancel").style.border = `${borderTick}px solid white`
var margin=20

document.getElementById('ok').addEventListener('click',function(){
    margin = margin+5
    document.getElementById('no').style.marginLeft=`${margin}px`
    document.getElementById('no').style.marginRight=`${margin}px`
    document.getElementById('cancel').style.marginLeft=`${margin}px`
    document.getElementById('cancel').style.marginRight=`${margin}px`

})


