{
    function solution(board, moves) {
        let result = [];
        let cnt=0;
        for(let k=0; k<moves.length; k++) {
            for(let i=0; i<board.length; i++) {
                if(board[i][moves[k]-1] !== 0){
                    if(result[result.length-1] === board[i][moves[k]-1]){
                        cnt = cnt+2;
                        result.pop();
                        board[i][moves[k]-1] = 0;
                        break;
                    }
                    result.push(board[i][moves[k]-1]);
                    board[i][moves[k]-1] = 0;
                    break;
                }
            }
        }
        return cnt;
    }
    console.log(solution([[0,0,0,0,0],
                        [0,0,1,0,3],
                        [0,2,5,0,1],
                        [4,2,4,4,2],
                        [3,5,1,3,1]],[1,5,3,5,1,2,1,4]));
}