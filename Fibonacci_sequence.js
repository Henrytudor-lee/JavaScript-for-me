//利用递归.
function num(a,b){
    let c = a + b
    console.log(c);
    num(b,c)    //这里的c为递归函数的实参，是具体数值，到递归中的let c =这又是重新声明局部变量。
}
//打印开头两个数
console.log(1);
console.log(1);
//调用函数
num(1,1)
