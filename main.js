let output = document.getElementById('output');
let inputname = document.getElementById('nametxt');
let inputemail = document.getElementById('mailtxt');
let submitbtn =  document.getElementById('sub');
let clearbtn =  document.getElementById('clr');
let inputdob = document.getElementById('dobtxt');
let inputimg = document.getElementById('imgtxt');
let obj = document.querySelectorAll('.cls');
let radios = document.querySelectorAll('.radiobtn');
let flag = 0;
let uploaded = '';

inputimg.addEventListener("change", function () {
    var reader = new FileReader();
    reader.addEventListener("load", function() {
        uploaded = reader.result;
    });
    reader.readAsDataURL(this.files[0]);
});

submitbtn.onclick = function(){
    for(i=0;i<document.querySelectorAll(".inputclass").length;i++){
        if(document.querySelectorAll(".inputclass")[i].value == ''){
            alert("Please Fill All Inputs!");
            flag = 1;
            break;
        }
    }
    if(flag==1){
        flag=0;
        return;
    }
    else{
        let divData = document.createElement('div');
        let divImg = document.createElement('div');
        divData.className = "data";
        divImg.className = 'img';
        let selected ;
        for(i=0 ; i<obj.length;i+=1){
            if (radios[i].checked == true) {
                selected = radios[i].value;
            }
        }
        divImg.innerHTML = '<img class="display" src="'+uploaded+'" />';
        divData.innerHTML = '<div class="info"><p>Name : '+inputname.value+'</p><p>Email : '+inputemail.value+'</p><p>DOB : '+inputdob.value+'</p><p>Gender : '+selected+'</p></div>';
        divData.appendChild(divImg);
        output.appendChild(divData);
    }
}
clearbtn.onclick = function(){
    for(i=0 ; i<obj.length;i+=1){
        obj[i].value = '';
    }
    for(i=0 ; i<obj.length;i+=1){
        radios[i].checked = false;
    }
    uploaded = '';
    inputimg.value = '';
}