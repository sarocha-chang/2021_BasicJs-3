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
var count =0
document.getElementById('no').addEventListener('dblclick',function(){
    count++
    if(count==1){
    document.getElementById('ok').innerHTML ="ok,"
    }else if(count==2){
    document.getElementById('ok').innerHTML ="วิชานี้,"
    }else if(count==3){
    document.getElementById('ok').innerHTML ="ง่าย,"
    }else{
    document.getElementById('ok').innerHTML ="จริงๆนะ,"
    count=0
    }
})

