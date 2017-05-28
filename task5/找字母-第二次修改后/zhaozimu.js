	var	arr1 = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a", "x", "x"];
	document.getElementById("arr1").innerText = arr1;


// 创建两个字典，以字母为key值，分别以出现次数和所在位置为value值
	var count = {};
	var pos = {};
	var i;
	for (i in arr1){
		var char = arr1[i];
		if(count[char]){
		 	count[char] = count[char] + 1;
		 	pos[char] += "," + i;
		 }else{
		 	count[char] = 1;
		 	pos[char] = i;
		 }
	}

	console.log(count);
	console.log(pos);

	var most_letter;
	var most_numb = 0;
	for (letter in count){
		if (count[letter] > most_numb){
			most_numb = count[letter];    //most_numb 为最大的出现次数，有可能只有一个字母，也有可能同时有几个字母
		}
	}

//构建数组，用来装出现次数最大的字母，有可能只有一个元素，也有可能有好几个。
	var result = [];
	for (var element in count){
		if (count[element] == most_numb){
			result.push(element);
		}
	}

//构建空字典，装入字母和其所对应的位置
	var resultt = {};
	for (word in result){
		var ans = result[word];
		resultt[ans] = pos[ans];
	}



	for (line in resultt){
		document.write(line, ":", resultt[line] + "<br>");
	}


	console.log(resultt);
	document.getElementById("most_letter").innerText = result;
	document.getElementById("most_numb").innerText = most_numb;
	