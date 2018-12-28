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
    var Ipt3= Math.ceil(Math.random()*100);
  
    
    if(Ipt1==''){
        alert('请输入你的姓名');
       return;
    }
    if(Ipt1=="胡庆国"){
        Ipt3=100;
    //    return;
    }
    if(Ipt2==''){
        alert('请输入你暗恋的对象的姓名');
        return;
    }
    if(Ipt1==Ipt2){
        alert('你太自恋了')
        return;
    }
 
    
    if(Ipt3<50){
        Txt3.innerHTML=Ipt1+"向"+Ipt2+"表白的成功几率是"+Ipt3+"%"+"<br/>"+"成功率一半都没到,还是放弃吧！哈哈"
      
    }else if(Ipt3>50 && Ipt3<=70){
        Txt3.innerHTML=Ipt1+"向"+Ipt2+"表白的成功几率是"+Ipt3+"%"+"<br/>"+"还不错，好好加油！"
       
    }else if(Ipt3>70 && Ipt3<90){
        Txt3.innerHTML=Ipt1+"向"+Ipt2+"表白的成功几率是"+Ipt3+"%"+"<br/>"+"去吧，我等着喝喜酒了！"
        
    }else if(Ipt3>=90 &&Ipt3<100){
        Txt3.innerHTML=Ipt1+"向"+Ipt2+"表白的成功几率是"+Ipt3+"%"+"<br/>"+"哇！你这成功率也太高了吧"
    
    }else if(Ipt3=100){
        Txt3.innerHTML=Ipt1+"向"+Ipt2+"表白的成功几率是"+Ipt3+"%"+"<br/>"+"如果你有勇气，ta已经是你的了！！！" 
    }else if(Ipt3=50){
        Txt3.innerHTML=Ipt1+"向"+Ipt2+"表白的成功几率是"+Ipt3+"%"+"<br/>"+"一半一半，看运气喽！" 
    }
    // else if(Ipt3>50 && Ipt3<=70){
    //     Txt3.innerHTML=Ipt1+"向"+Ipt2+"表白的成功几率是"+Ipt3+"%"+"<br/>"+"还不错，好好加油！"
       
    // }else if(Ipt3>70 && Ipt3<90){
    //     Txt3.innerHTML=Ipt1+"向"+Ipt2+"表白的成功几率是"+Ipt3+"%"+"<br/>"+"去吧，我等着喝喜酒了！"
     
    // }else if(Ipt3>=90 &&Ipt3<100){
    //     Txt3.innerHTML=Ipt1+"向"+Ipt2+"表白的成功几率是"+Ipt3+"%"+"<br/>"+"哇！你这成功率也太高了吧"
    
    // }else if(Ipt3=100){
    //     Txt3.innerHTML=Ipt1+"向"+Ipt2+"表白的成功几率是"+Ipt3+"%"+"<br/>"+"如果你有勇气，ta已经是你的了！！！"
      
    // }
      

    })

   
    
})


    





