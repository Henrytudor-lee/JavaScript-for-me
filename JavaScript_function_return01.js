
    function getNum(x,y){
        let num1 = x+y
        return num1
    }
    getNum(45,87)
    document.write(num1)    //此时结果报错，因为let声明变量为局部域变量，函数运行结束则终止，所以num1为undefined

    //解决办法
    function getNum(x,y){
        let num1 = x+y
        return num1
    }
    document.write(getNum(45,87))  

    //解决办法2
    function getNum(x,y){
        return x+y
    }
    let num1=getNum(45,87)
    document.write(num1)
   
