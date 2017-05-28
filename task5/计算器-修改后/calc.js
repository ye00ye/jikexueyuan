function resultss() {
    if (document.getElementById('num1').value.trim() == '') {
        alert('第一个数输入不能为空');
        return;
    }
    var num1 = parseFloat(document.getElementById('num1').value);

    if (document.getElementById('num2').value.trim() == '') {
        alert('第二个数输入不能为空');
        return;
    }
    var num2 = parseFloat(document.getElementById('num2').value);
    var operate = document.getElementById('operate').value;
    var outputs = output(num1, num2, operate);
    document.getElementById('result').value = outputs.toFixed(3);
}


function output(par1, par2, par3) {
    switch (par3) {
        case '+':
            return (par1 + par2);
        case '-':
            return par1 - par2;
        case '*':
            return par1 * par2;
        case '/':
            if (par2 == 0) {
                alert('除数不能为0');
                return 'NaN';
            }
            return par1 / par2;
    }
}
