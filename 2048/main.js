$(function(){
	newgame();
});
var board = new Array();

function newgame(){
	init();
	generateOneNumber();
	generateOneNumber();
	clearOclock();
}

function init(){
	for(var i=0;i<4;i++){
		board[i]=new Array();
		for(var j=0;j<4;j++){
			board[i][j]=0;
			var gridcell=$("#grid-cell-"+i+"-"+j);
			gridcell.css("top",getPosTop(i,j));
			gridcell.css("left",getPosLeft(i,j));
		}
	}
	updateBoardView();
}
function updateBoardView(){
	$(".number-cell").remove();
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			$("#grid-container").append("<div class='number-cell' id='number-cell-" + i + "-" + j + "'></div>" );
			var numberCell=$("#number-cell-"+i+"-"+j);
			if(board[i][j]==0){
				numberCell.css("width", "0px");
                numberCell.css("height", "0px");
                numberCell.css("top", getPosTop(i, j) + 100);
                numberCell.css("left", getPosLeft(i, j) + 100);

			}
			else{
				numberCell.css("width", "100px");
                numberCell.css("height", "100px");
                numberCell.css("top", getPosTop(i, j));
                numberCell.css("left", getPosLeft(i, j));
                numberCell.css("background-color", getNumberBackgroundColor(board[i][j]));
                numberCell.css("color", getNumberColor(board[i][j]));
                numberCell.text(board[i][j]);
			}
			
		}
	}
	//设置数字值的字体样式
    $(".number-cell").css("line-height", "100px");
    $(".number-cell").css("font-size", "60px");

}
function generateOneNumber(){
	
    //1 生成一个随机的位置
    var randx = parseInt(Math.floor(Math.random() * 4));
    var randy =parseInt(Math.floor(Math.random() * 4));
    //定义一个死循环,完成生成随机空格子
    while (true) {
        //如果当前格子的值为0,满足条件
        if (board[randx][randy] == 0) {
            break;
        }
		
        //否则重新随机一个位置
        var randx = parseInt(Math.floor(Math.random() * 4));
        var randy = parseInt(Math.floor(Math.random() * 4));
    }
    //2 生成一个随机的数字(2048游戏规则,新生成的数字只可以是2或4)
    var randNumber = Math.random() < 0.5 ? 2 : 4;

    //3 在随机的位置上显示出随机的数字
    //在随机位置显示随机数字
    board[randx][randy] = randNumber;
    //实现随机数字显示的动画
    ShowNumberWithAnimation(randx, randy, randNumber);
	//更新分数
	updateScore();
}
function updateScore(){
	var totalScore=0;
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			totalScore+=board[i][j];
		}
	}
	document.getElementById("score").innerHTML=" "+totalScore;
}
