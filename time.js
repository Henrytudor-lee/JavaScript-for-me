//CSDN   @itfallrain
function TimeDown(id1,id2,id3,id4,endDateStr) {
    //结束时间
    let endDate = new Date(endDateStr);      //对于局部使用的函数建议通过let声明变量而不是var
    //当前时间
    let nowDate = new Date();
    //相差的总秒数
    let totalSeconds = parseInt((endDate - nowDate) / 1000);
    //天数
    let days01 = Math.floor(totalSeconds / (60 * 60 * 24));
    //取模（余数）
    let modulo = totalSeconds % (60 * 60 * 24);
    //小时数
    let hours01 = Math.floor(modulo / (60 * 60));
    modulo = modulo % (60 * 60);
    //分钟
    let minutes01 = Math.floor(modulo / 60);
    //秒
    let seconds01 = modulo % 60;
    //输出到页面
    document.getElementById(id1).innerHTML = days01;        //熟练掌握getElementById的使用。
    document.getElementById(id2).innerHTML = hours01;
    document.getElementById(id3).innerHTML = minutes01;
    document.getElementById(id4).innerHTML = seconds01;
    //延迟一秒执行自己
    setTimeout(function () {                   
        TimeDown(id1,id2,id3,id4,endDateStr);   //这里注意函数形参、实参的数量要对应，名称也要一一对应。
    }, 1000)
    // setInterval(TimeDown(id1,id2,id3,id4,endDateStr),1000);// 这里浏览器F12报错Maximum call stack size exceeded

    // setInterval(function(){
    //     TimeDown(id1,id2,id3,id4,endDateStr);
    // },1000)                //类比上面的setTimeout用立即执行函数框架去嵌套执行则能成功运行。

    //通过F12发现setInterval和setTimeout在执行时发现，Interval执行间隔更短，而Timeout则是按照1s间隔执行；后续仍需花时间去深入了解其中的区别。
}
