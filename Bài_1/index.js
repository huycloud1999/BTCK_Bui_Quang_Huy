function checkSNT(num) {
        if(num < 2) return false;
        for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
     }
    return true;
}

function TinhTong() {
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    let sum = 0;
    for(let i = a; i <= b; i++) {
        if(checkSNT(i)) {
            sum += i;
        }
    }

    document.getElementById('kq').innerText = "Tổng các số nguyên tố trong khoảng " + a + " và " + b + " là: " + sum;
}
const btn=document.getElementById("btn")
btn.addEventListener("click",function(){
    TinhTong();
})
