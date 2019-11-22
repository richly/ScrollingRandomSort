var order = 0;
var status = "start";
var randomSortLoop;
var itemsSheetHtml = "";
var itemsSheet = document.getElementById("itemsSheet");


var items = ["a","b","c","d",
"e","f","g","h",
"i","j","k","l","m"];

window.onload = function() {
	itemsSheetHtml += "<table class=\"table  table-showed\"><tr><th style=\"border: 1px solid black;\">序号</th><th style=\"border: 1px solid black;\">名称</th></tr>";
	for(let index in items){
		order = parseInt(index) + 1;
		itemsSheetHtml += "<tr><td>"+order+"</td><td>"+items[index]+"</td></tr>";
	}
	itemsSheetHtml += "</table>";
	itemsSheet.innerHTML =itemsSheetHtml;
};

function randomSort(a, b) {
	return Math.random() > 0.5 ? -1 : 1;
}

function refresh(){
	itemsSheet.innerHTML =itemsSheetHtml;
}

// 输入名称数组 输出随机排序 
function randomSortitems(){
	itemsSheetHtml = "";
	items.sort(randomSort);
	itemsSheetHtml += "<table class=\"table  table-showed\"><tr><th style=\"border: 1px solid black;\">序号</th><th style=\"border: 1px solid black;\">名称</th></tr>";
	for(let index in items){
		order = parseInt(index) + 1;
		itemsSheetHtml += "<tr><td>"+order+"</td><td>"+items[index]+"</td></tr>";
	}
	itemsSheetHtml += "</table>";

    refresh();
}

function test(){
	randomSortitems();
}

//点击开始 ，滚动（每0.3秒刷新一次名单），开始按钮变成停止
function start(){
	startorstop.innerText = "停止";
	startorstop.className = "btn btn-default";
	status = "stop";
	randomSortLoop = setInterval(test, 200);
}


//点击停止， 停止滚动， 停止按钮变成开始
function stop(){
	startorstop.innerText = "开始";
	startorstop.className = "btn btn-primary";
	status = "start";
	window.clearInterval(randomSortLoop);
}


function startOrStop(){
	
	var startorstop = document.getElementById("startorstop");
	if(status == "start"){
		start();
	}else{
		stop();
	}
	
}
