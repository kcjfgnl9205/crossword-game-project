//---------------------------------//
//   GLOBAL VARIABLES              //
//---------------------------------//

var board: any, itemArray: any, wordBank: any, wordsActive: any;

var Bounds = {  
  top:0, right:0, bottom:0, left:0,

  Update:function(col: any,row: any){
    this.top = Math.min(row,this.top);
    this.right = Math.max(col,this.right);
    this.bottom = Math.max(row,this.bottom);
    this.left = Math.min(col,this.left);
  },
  
  Clean:function(){
    this.top = 999;
    this.right = 0;
    this.bottom = 0;    
    this.left = 999;
  }
};


function findLargestSquare(matrix: any) {
  let col: number = matrix[0].length;
  let row: number = matrix.length;
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== null) {
        col = Math.min(j, col);
        row = Math.min(i, row);
      }
    }
  }
  return [col, row];
}

//---------------------------------//
//   MAIN                          //
//---------------------------------//
export function CrosswordBoardCreate(items: Array<any>){
  itemArray = items;
  for(var i = 0, isSuccess=false; i < 10 && !isSuccess; i++){
    CleanVars();
    isSuccess = PopulateBoard();
  }

  if (isSuccess) {
    const [ col, row ] = findLargestSquare(board);
    wordsActive = wordsActive.map((el: any) => {
      return { ...el, col: Math.abs(el.col - col), row: Math.abs(el.row - row) }
    })
    return wordsActive;
  }
}

function CleanVars(){
  Bounds.Clean();
  wordBank = [];
  wordsActive = [];
  board = [];
  
  for(var i = 0; i < 32; i++){
    board.push([]);
    for(var j = 0; j < 32; j++){
      board[i].push(null);
    }
  }
}


function PopulateBoard(){
  PrepareBoard();
  
  for(var i=0,isOk=true,len=wordBank.length; i<len && isOk; i++){
    isOk = AddWordToBoard();
  }  
  return isOk;
}


function PrepareBoard(){
  wordBank=[];
  
  for(var i = 0, len = itemArray.length; i < len; i++){
    wordBank.push({
      id: itemArray[i].id,
      clue: itemArray[i].clue,
      hint: itemArray[i].hint,
      answer: itemArray[i].answer,
      char: itemArray[i].answer.split(""),
      totalMatches: 0,
      effectiveMatches: 0,
      successfulMatches: [],
    });
  }
  
  for(i = 0; i < wordBank.length; i++){
    for(var j = 0, wA=wordBank[i]; j<wA.char.length; j++){
      for(var k = 0, cA=wA.char[j]; k<wordBank.length; k++){
        for(var l = 0,wB=wordBank[k]; k!==i && l<wB.char.length; l++){
          wA.totalMatches += (cA === wB.char[l])?1:0;
        }
      }
    }
  }  
}


// TODO: Clean this guy up
function AddWordToBoard(){
  var i, len, curIndex, curWord, curChar, curMatch, testWord, testChar, 
      minMatchDiff = 9999, curMatchDiff;  

  if(wordsActive.length < 1){
    curIndex = 0;
    for(i = 0, len = wordBank.length; i < len; i++){
      if (wordBank[i].totalMatches < wordBank[curIndex].totalMatches){
        curIndex = i;
      }
    }
    wordBank[curIndex].successfulMatches = [{col: 12, row: 12, isVertical: true}];
  }
  else{  
    curIndex = -1;
    
    for(i = 0, len = wordBank.length; i < len; i++){
      curWord = wordBank[i];
      curWord.effectiveMatches = 0;
      curWord.successfulMatches = [];
      for(var j = 0, lenJ = curWord.char.length; j < lenJ; j++){
        curChar = curWord.char[j];
        for (var k = 0, lenK = wordsActive.length; k < lenK; k++){
          testWord = wordsActive[k];
          for (var l = 0, lenL = testWord.char.length; l < lenL; l++){
            testChar = testWord.char[l];            
            if (curChar === testChar){
              curWord.effectiveMatches++;
              
              var curCross = {col: testWord.col, row: testWord.row, isVertical: true};              
              if(testWord.isVertical){
                curCross.isVertical = false;
                curCross.row += l;
                curCross.col -= j;
              } 
              else{
                curCross.isVertical = true;
                curCross.col += l;
                curCross.row -= j;
              }
              
              var isMatch = true;
              
              for(var m = -1, lenM = curWord.char.length + 1; m < lenM; m++){
                var crossVal = [];
                if (m !== j){
                  if (curCross.isVertical){
                    var xIndex = curCross.row + m;
                    
                    if (xIndex < 0 || xIndex > board.length){
                      isMatch = false;
                      break;
                    }
                    
                    crossVal.push(board[xIndex][curCross.col]);
                    crossVal.push(board[xIndex][curCross.col + 1]);
                    crossVal.push(board[xIndex][curCross.col - 1]);
                  }
                  else{
                    var yIndex = curCross.col + m;
                    
                    if (yIndex < 0 || yIndex > board[curCross.row].length){
                      isMatch = false;
                      break;
                    }
                    
                    crossVal.push(board[curCross.row][yIndex]);
                    crossVal.push(board[curCross.row + 1][yIndex]);
                    crossVal.push(board[curCross.row - 1][yIndex]);
                  }

                  if(m > -1 && m < lenM-1){
                    if (crossVal[0] !== curWord.char[m]){
                      if (crossVal[0] !== null){
                        isMatch = false;                  
                        break;
                      }
                      else if (crossVal[1] !== null){
                        isMatch = false;
                        break;
                      }
                      else if (crossVal[2] !== null){
                        isMatch = false;                  
                        break;
                      }
                    }
                  }
                  else if (crossVal[0] !== null){
                    isMatch = false;                  
                    break;
                  }
                }
              }
              
              if (isMatch === true){                
                curWord.successfulMatches.push(curCross);
              }
            }
          }
        }
      }
      
      curMatchDiff = curWord.totalMatches - curWord.effectiveMatches;
      
      if (curMatchDiff<minMatchDiff && curWord.successfulMatches.length>0){
        curMatchDiff = minMatchDiff;
        curIndex = i;
      }
      else if (curMatchDiff <= 0){
        return false;
      }
    }
  }
  
  if (curIndex === -1){
    return false;
  }
    
  var spliced = wordBank.splice(curIndex, 1);
  wordsActive.push(spliced[0]);
  
  var pushIndex = wordsActive.length - 1,
      rand = Math.random(),
      matchArr = wordsActive[pushIndex].successfulMatches,
      matchIndex = Math.floor(rand * matchArr.length),  
      matchData = matchArr[matchIndex];
  
  wordsActive[pushIndex].col = matchData.col;
  wordsActive[pushIndex].row = matchData.row;
  wordsActive[pushIndex].isVertical = matchData.isVertical;
  
  for(i = 0, len = wordsActive[pushIndex].char.length; i < len; i++){
    var xIndex = matchData.row,
        yIndex = matchData.col;
    
    if (matchData.isVertical){
      xIndex += i;    
      board[xIndex][yIndex] = wordsActive[pushIndex].char[i];
    }
    else{
      yIndex += i;  
      board[xIndex][yIndex] = wordsActive[pushIndex].char[i];
    }
    
    Bounds.Update(xIndex,yIndex);
  }
    
  return true;
}


export function convertAnswerObjectToAnswerArray(obj: any) {
  let arr: any[] = [];
  if (obj) {
    const acrossValues = Object.values(obj?.across);
    const downValues = Object.values(obj?.down);
    arr = [...acrossValues, ...downValues];
  }
  return arr;
}


export function convertToResultArray(arr: Array<any>) {
  let result: any = {
    across: {},
    down: {}
  };

  let acrossKey = 1;
  let downKey = 1;
  arr.forEach((item) => {
    const { id, clue, hint, answer, col, row, isVertical } = item;
    const newItem = { id, clue, hint, answer, row, col };
    if (isVertical) {
      result.down[downKey++] = newItem;
    } else {
      result.across[acrossKey++] = newItem;
    }
  });
  return result;
}