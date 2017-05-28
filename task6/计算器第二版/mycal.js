window.onload = function() {
    var clear = document.getElementById("clear");
    //显示结果
    var result = document.getElementById("result");
    var plus = document.getElementById("plus");
    var minus = document.getElementById("minus");
    var multiply = document.getElementById("multiply");
    var divide = document.getElementById("divide");
    var point = document.getElementById("point");
    var sin = document.getElementById("sin");
    var cos = document.getElementById("cos");
    var minus_sign = document.getElementById("minus_sign");
    var equals = document.getElementById("equals");
    //取出0-9个数字
    var zero = document.getElementById("zero");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");
    //临时存储
    var temp = "";
    //控制显示的变量
    var temp1 = "";
    if (zero.addEventListener) {
        //清除
        clear.addEventListener("click", clearEvent, false);
        //输入数字绑定单击事件
        zero.addEventListener("click", zeroEvent, false);
        one.addEventListener("click", oneEvent, false);
        two.addEventListener("click", twoEvent, false);
        three.addEventListener("click", threeEvent, false);
        four.addEventListener("click", fourEvent, false);
        five.addEventListener("click", fiveEvent, false);
        six.addEventListener("click", sixEvent, false);
        seven.addEventListener("click", sevenEvent, false);
        eight.addEventListener("click", eightEvent, false);
        nine.addEventListener("click", nineEvent, false);
        //运算符号绑定单击事件
        plus.addEventListener("click", plusEvent, false);
        minus.addEventListener("click", minusEvent, false);
        multiply.addEventListener("click", multiplyEvent, false);
        divide.addEventListener("click", divideEvent, false);
        point.addEventListener("click", pointEvent, false);
        sin.addEventListener("click", sinEvent, false);
        cos.addEventListener("click", cosEvent, false);
        minus_sign.addEventListener("click", minus_signEvent, false);
        equals.addEventListener("click", equalsEvent, false);
    } else {
        //清除
        clear.attachEvent("onclick", clearEvent);
        //输入数字绑定单击事件
        zero.attachEvent("onclick", zeroEvent);
        one.attachEvent("onclick", oneEvent);
        two.attachEvent("onclick", twoEvent);
        three.attachEvent("onclick", threeEvent);
        four.attachEvent("onclick", fourEvent);
        five.attachEvent("onclick", fiveEvent);
        six.attachEvent("onclick", sixEvent);
        seven.attachEvent("onclick", sevenEvent);
        eight.attachEvent("onclick", eightEvent);
        nine.attachEvent("onclick", nineEvent);
        //运算符号绑定单击事件
        plus.attachEvent("onclick", plusEvent);
        minus.attachEvent("onclick", minusEvent);
        multiply.attachEvent("onclick", multiplyEvent);
        divide.attachEvent("onclick", divideEvent);
        point.attachEvent("onclick", pointEvent);
        sin.attachEvent("onclick", sinEvent);
        cos.attachEvent("onclick", cosEvent);
        minus_sign.attachEvent("onclick", minus_signEvent);
        equals.attachEvent("onclick", equalsEvent);
    }

    //输入0方法
    function zeroEvent() {
        var regex = /^[+/*]+$/gi;
        var regex1 = /^[-]{2,}$/gi;
        if (regex.test(temp) || regex1.test(temp)) {
            result.innerHTML = "NaN";
        } else {
            temp += 0;
            temp1 += 0;
            result.innerHTML = temp1;
        }
        console.info(temp);
    }

    //输入1方法
    function oneEvent() {
        var regex = /^[+/*]+$/gi;
        var regex1 = /^[-]{2,}$/gi;
        if (regex.test(temp) || regex1.test(temp)) {
            result.innerHTML = "NaN";
        } else {
            temp += 1;
            temp1 += 1;
            result.innerHTML = temp1;
        }
        console.info(temp);
    }

    //输入2方法
    function twoEvent() {
        var regex = /^[+/*]+$/gi;
        var regex1 = /^[-]{2,}$/gi;
        if (regex.test(temp) || regex1.test(temp)) {
            result.innerHTML = "NaN";
        } else {
            temp += 2;
            temp1 += 2;
            result.innerHTML = temp1;
        }
        console.info(temp);
    }

    //输入3方法
    function threeEvent() {
        var regex = /^[+/*]+$/gi;
        var regex1 = /^[-]{2,}$/gi;
        if (regex.test(temp) || regex1.test(temp)) {
            result.innerHTML = "NaN";
        } else {
            temp += 3;
            temp1 += 3;
            result.innerHTML = temp1;
        }
        console.info(temp);
    }

    //输入4方法
    function fourEvent() {
        var regex = /^[+/*]+$/gi;
        var regex1 = /^[-]{2,}$/gi;
        if (regex.test(temp) || regex1.test(temp)) {
            result.innerHTML = "NaN";
        } else {
            temp += 4;
            temp1 += 4;
            result.innerHTML = temp1;
        }
        console.info(temp);
    }

    //输入5方法
    function fiveEvent() {
        var regex = /^[+/*]+$/gi;
        var regex1 = /^[-]{2,}$/gi;
        if (regex.test(temp) || regex1.test(temp)) {
            result.innerHTML = "NaN";
        } else {
            temp += 5;
            temp1 += 5;
            result.innerHTML = temp1;
        }
        console.info(temp);
    }

    //输入6方法
    function sixEvent() {
        var regex = /^[+/*]+$/gi;
        var regex1 = /^[-]{2,}$/gi;
        if (regex.test(temp) || regex1.test(temp)) {
            result.innerHTML = "NaN";
        } else {
            temp += 6;
            temp1 += 6;
            result.innerHTML = temp1;
        }
        console.info(temp);
    }

    //输入7方法
    function zeroEvent() {
        var regex = /^[+/*]+$/gi;
        var regex1 = /^[-]{2,}$/gi;
        if (regex.test(temp) || regex1.test(temp)) {
            result.innerHTML = "NaN";
        } else {
            temp += 7;
            temp1 += 7;
            result.innerHTML = temp1;
        }
        console.info(temp);
    }

    //输入8方法
    function eightEvent() {
        var regex = /^[+/*]+$/gi;
        var regex1 = /^[-]{2,}$/gi;
        if (regex.test(temp) || regex1.test(temp)) {
            result.innerHTML = "NaN";
        } else {
            temp += 8;
            temp1 += 8;
            result.innerHTML = temp1;
        }
        console.info(temp);
    }

    //输入9方法
    function zeroEvent() {
        var regex = /^[+/*]+$/gi;
        var regex1 = /^[-]{2,}$/gi;
        if (regex.test(temp) || regex1.test(temp)) {
            result.innerHTML = "NaN";
        } else {
            temp += 9;
            temp1 += 9;
            result.innerHTML = temp1;
        }
        console.info(temp);
    }



    //加法方法
    function plusEvent() {
        var reg = /[+]{1,}$/gi;
        if (reg.test(temp)) {
            temp += "";
            temp1 += "";
        } else {
            temp += "+";
            temp1 = "";
        }
    }

    //减法方法
    function minusEvent() {
        var reg = /[-]{1,}$/gi;
        if (reg.test(temp)) {
            temp += "";
            temp1 += "";
        } else {
            temp += "-";
            temp1 = "";
        }
    }

    //乘法方法
    function plusEvent() {
        var reg = /[*]{1,}$/gi;
        if (reg.test(temp)) {
            temp += "";
            temp1 += "";
        } else {
            temp += "*";
            temp1 = "";
        }
    }

    //除法方法
    function plusEvent() {
        var reg = /[/]{1,}$/gi;
        if (reg.test(temp)) {
            temp += "";
            temp1 += "";
        } else {
            temp += "/";
            temp1 = "";
        }
    }

    //sin方法
    function.sinEvent() {
        console.info(Math.sin(temp));
        temp = Math.sin(temp);
        result.innerHTML = temp;
    }

    //cos方法
    function.cosEvent() {
        console.info(Math.cos(temp));
        temp = Math.cos(temp);
        result.innerHTML = temp;
    }

    //小数点添加方法
    function pointEvent() {
        var reg1 = /[.]{1,}$/gi;
        if (reg1.test(temp1)) {
            temp += "";
            temp1 += "";
        } else {
            temp += ".";
            temp1 = temp1 + ".";
            result.innerHTML = temp1;
        }
    }

    //添加取消的方法
    var index = 0;

    function minus_signEvent() {
        index++;
        if (index % 2 == 0) {
            temp1 = Math.abs(temp);
            if (isNaN(temp1)) {
                temp1 = "";
            }
            temp = temp1;
            result.innerHTML = temp1;
        } else {
            temp1 = "-" + temp1;
            temp = temp1;
            result.innerHTML = temp1;
        }
    }

    //等于方法
    function equalsEvent() {
        var reg = /\/0/gi;
        if (reg.test(temp)) {
            result.innerHTML = "NaN";
        } else {
            result.innerHTML = parseFloat(eval(temp).toFixed(1));
            temp1 = eval(temp);
            console.info(eval(temp1));
        }
    }

    //当计算完一组运算之后，清除之前保留的运算结果
    temp = "";
    temp1 = "";
    //清除方法
    function.clearEvent() {
        result.innerHTML = 0;
        temp = "";
        temp1 = "";
    }
}
