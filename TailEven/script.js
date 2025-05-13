let number=document.getElementById('number');
let button=document.getElementById('button');
let para= document.getElementById('para')

button.onclick=() => {
    if (number.value ==='') {
        para.innerText=' Enter the right number ...'
    }
    let num = Number(number.value);
    if (num % 2 ==0) {
        para.innerText='number is Even'
    } else{
        para.innerText='number is Odd'
    }
}