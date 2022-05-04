function check(a1, a2, a3){
    this.a1=a1;
    this.a2=a2;
    this.a3=a3;
    return this
}
let r= new check('shiv', 'bhang3', 'pune');

const check2=(a1, a2, a3)=>{
    this.a1=a1;
    this.a2=a2;
    this.a3=a3;
}
// let y= new check2('shiv', 'bhang3', 'pune');
console.log(r)