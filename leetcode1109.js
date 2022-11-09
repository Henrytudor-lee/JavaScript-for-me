
/* 
*给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
*回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
*例如，121 是回文，而 123 不是。
*/

//字符串解法是很好理解的，下面我尝试自己通过数学的手段去解题。

let x = -1    //比较好的测试例子是   0   10  101   100000001  -10 
let isPalidrome = function(x){

    //判断是否为负数，负数直接返回false
    if(x < 0) return false

    //设置初始数字位数默认为1
    let num = 1

    //封装求数字位数的函数
    function fn(x){
        if(x >= 10**num){
            num++
            fn(x)
        }
        return num
    }

    //储存位数值
    let n = fn(x)

    /* 
    *封装给定数字取指定位数的数字的函数   思路是先对所在位数取包括位数数字在内往后所有数字（取余数），再对其保留首位数字（除位数10的幂次方再取整）
    *num1:  数字
    *m: 数字的位数
    *b: 取第几位数
    */

    function fn1(num1,m,b){
        //这里有个小tips，如果取整用的parseInt，则当位数较大时，比如10^-7，它会判定为1，而不是0.
        return Math.floor((num1 % 10**(m - (b - 1))) / (10**(m - b)))
    }

    //对于一个数字，只需首尾对比，则对比次数为数字的位数/2 ，向下取整。
    for(let i = 1;i <= parseInt(n / 2);i++){
        if(fn1(x,n,i) != fn1(x,n,n - i + 1)){
            return false
        }
    }

    return true
}
