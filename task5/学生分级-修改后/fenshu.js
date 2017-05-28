    function calc() {
        var num = parseInt(document.getElementById('fenshu').value);
        var result;
        if (isNaN(num)){
            result = '输入的是非数字字符串类型，请输入0-100的数字。';
        }else{
            result = oper(num);
        }
        document.getElementById('result').innerText = result;
    }

    function oper(nums) {
        if (nums >= 90 && nums <= 100) {
            return 1;
        } else if (nums >= 80 && nums <= 89) {
            return 2;
        } else if (nums >= 70 && nums <= 79) {
            return 3;
        } else if (nums >= 60 && nums <= 69) {
            return 4;
        } else if (nums >= 50 && nums <= 59) {
            return 5;
        } else if (nums >= 40 && nums <= 49) {
            return 6;
        } else if (nums >= 30 && nums <= 39) {
            return 7;
        } else if (nums >= 20 && nums <= 29) {
            return 8;
        } else if (nums >= 10 && nums <= 19) {
            return 9;
        } else if (nums >= 0 && nums <= 9) {
            return 10;
        }else if(nums<0 || nums>100){
        	return '请输入0-100的数字';
        }
    }