let inputF = document.getElementById('numinput');
let button = document.getElementById('btn');
let para = document.getElementById('Para')

button.onclick= () => {
    if(inputF.value === '' ){
        para.innerText= ' لطفا عدد وارد کنید'  
    }
    let num = Number(inputF.value);
    let counter = 0;
        for(let i =1; i <= num; i++){
            if (num % i === 0) {
                    counter++;
            }
            if( counter > 2){
            para.innerText = 'عدد مرکب است'
        } else{
            para.innerText = 'عدد اول است'
        }
        } 
            
}