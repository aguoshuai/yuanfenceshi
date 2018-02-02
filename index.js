$(function(){
   var Txt1=document.getElementsByTagName('user-name');
   var Txt2=document.getElementsByTagName('lover-name');
   var Txt3=document.getElementById('jieguo-kuang');
   var Value1=document.getElementById('input1');
   var Value2=document.getElementById('input2');
   var reg=/^[\u2E80-\u9FFF]+$/;
   
$('.dianji-tijiao').click(function(){
    var Ipt1=Value1.value;
    var Ipt2=Value2.value;
    var Ipt3='';
    if((Ipt1!=='卢倩'||Ipt1!=='胡庆国')&&(Ipt2!=='卢倩'||Ipt2!=='胡庆国')){
        Ipt3='0%';
    }
    if(Ipt2=="卢倩"){
        Ipt3="0%"
    }
    if(Ipt1=='胡庆国'){
        Ipt3='100%';
    }
    
    if(Ipt1=='卢倩'){
        Ipt3='0%';
    }
    if(Ipt2=='胡庆国'){
        Ipt3='100%';
    }
   
   function isChinese(temp){
    var re=/[^/u4e00-/u9fa5]/;
   if (re.test(temp)) return false ;
   }
    Txt3.innerHTML=Ipt1+"向"+Ipt2+"表白的成功几率是"+Ipt3;
    
})

// $('#input1').blur(function(){
   
//         if(reg<=Ipt1<=reg){
//             return true;
//         }else{
//             alert('请输入汉字');
//             Ipt1='';
//         }
// })
// $('#input2').blur(function(){
   
//     if(reg<=Ipt1<=reg){
//         return true;
//     }else{
//         alert('请输入汉字');
//     }
// })
    

});



