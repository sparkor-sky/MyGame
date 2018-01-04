
//keydown事件表示键盘被按下
$(document).keydown(function(event){        //event是keydown事件自带的
    switch (event.keyCode){
        case 37://left
            if(moveLeft()){
                generateOneNumber();
            }
            break;
        case 38://up
			if(moveUp()){
                generateOneNumber();
            }
            break;
        case 39://right
			if(moveRight()){
                generateOneNumber();
            }
            break;
        case 40://down
			if(moveDown()){
                generateOneNumber();
            }
            break;
		case 13://down
			newgame();
            break;
		default:break;
    }
});

function moveLeft(){
    //返回值是Boolean类型,判断是否可以向左移动.
    if(!canMoveLeft(board)){
        //当前的格子无法移动
        return false;
    }
    //完成向左移动的逻辑
    for(var i=0;i<4;i++){
        for(var j=1;j<4;j++){
            //当前数字格有值的(2,4...一定不是0)
            if(board[i][j] != 0){
                //向左移动的逻辑
                for (var k = 0; k < j; k++) {
                    if(board[i][k] == 0 && noBlokHorizontalCol(i, k, j, board)){
                        //才能向左移动
                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                    }else if(board[i][k] == board[i][j] && noBlokHorizontalCol(i, k, j, board)){
                        //才能向左移动
                        //move
                        showMoveAnimation(i, j, i, k);
                        //add
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView();",200);
    return true;
}

function moveUp(){
    //返回值是Boolean类型,判断是否可以向左移动.
    if(!canMoveTop(board)){
        //当前的格子无法移动
        return false;
    }
    //完成向上移动的逻辑
    for(var i=1;i<4;i++){
        for(var j=0;j<4;j++){
            //当前数字格有值的(2,4...一定不是0)
            if(board[i][j] != 0){
                //向上移动的逻辑
                for (var k = 0; k < i; k++) {
                    if(board[k][j] == 0 && noBlokVerticalCol(j, k, i, board)){
                        //才能向上移动
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                    }else if(board[k][j] == board[i][j] && noBlokVerticalCol(j, k, i, board)){
                        //才能向上移动
                        //move
                        showMoveAnimation(i, j, k, j);
                        //add
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView();",200);
    return true;
}

function moveRight(){
    //返回值是Boolean类型,判断是否可以向左移动.
    if(!canMoveRight(board)){
        //当前的格子无法移动
        return false;
    }
    //完成向右移动的逻辑
    for(var i=0;i<4;i++){
        for(var j=2;j>=0;j--){
            if(board[i][j] != 0){
                //向左移动的逻辑
                for (var k = 3; k > j; k--) {
                    if(board[i][k] == 0 && noBlokHorizontalCol(i, j, k, board)){
                        //才能向左移动
                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                    }else if(board[i][k] == board[i][j] && noBlokHorizontalCol(i, j, k, board)){
                        //才能向左移动
                        //move
                        showMoveAnimation(i, j, i, k);
                        //add
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView();",200);
    return true;
}

function moveDown(){
    //返回值是Boolean类型,判断是否可以向左移动.
    if(!canMoveDown(board)){
        //当前的格子无法移动
        return false;
    }
    //完成向下移动的逻辑
    for(var i=2;i>=0;i--){
        for(var j=0;j<4;j++){
            if(board[i][j] != 0){
                //向左移动的逻辑
                for (var k = 3; k > i; k--) {
                    if(board[k][j] == 0 && noBlokVerticalCol(j, i, k, board)){
                        //才能向上移动
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                    }else if(board[k][j] == board[i][j] && noBlokVerticalCol(j, i, k, board)){
                        //才能向上移动
                        //move
                        showMoveAnimation(i, j, k, j);
                        //add
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView();",200);
    return true;
}