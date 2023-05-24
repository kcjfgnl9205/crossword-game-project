import { InputClueType, InputClueTypeResult } from "../types";


// 秒を分, 秒に変更する
export const changeSecondToMinute = (seconds: number): any => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return { minute: m, second: s }
}

// 分：秒を秒をに変更する
export const changeMinuteToSecond = (minute: number, seconds: number): number => {
  return (minute * 60 ) + seconds;
}



export function crosswordGenerator(arr: Array<InputClueType>) {
    // increase the probability of having an answer
    const sortedArr = sortArr(arr);
    return draw([{ clue: sortedArr[sortedArr.length - 1].clue, hint: sortedArr[sortedArr.length - 1].hint, answer: sortedArr.pop()?.answer || "", col: 0, row: 0, isHorizon: true, direction: "across" }], sortedArr.pop() || { clue: "", hint: "", answer: "" })

    function sortArr(arr: Array<InputClueType>): Array<InputClueType> {
      return [ ...arr ].sort((prev, next) => prev.answer.length - next.answer.length);
    }

    function shuffleArr(arr: Array<InputClueTypeResult>) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
      }
      return arr
    }

    // positionObjArr:
    // {
    //   answer: 'prototype',
    //   col: 0,
    //   row: 0,
    //   isHorizon: true
    // }
    function letterMapOfPositionObjArr(positionObjArr: Array<InputClueTypeResult>) {
      const rtn: any = {}
      positionObjArr.forEach(positionObj => {
        for (let i = 0, len = positionObj.answer.length; i < len; i += 1) {
          const letter = positionObj.answer[i]
          if (!rtn[letter]) rtn[letter] = []
          rtn[letter].push({
            x: positionObj.col + (positionObj.isHorizon ? i : 0),
            y: positionObj.row + (positionObj.isHorizon ? 0 : i)
          })
        }
      })
      return rtn
    }

    // letterMap:
    // {
    //   x: [{x: -1, y: -1}],
    //   y: [{x: -1, y:  0}, {x: 0, y: 0}],
    //   z: [{x:  0, y:  1}, {x: 1, y: 1}]
    // }
    type positionProps = {
      letterMap: any;
      clueObject: InputClueType;
    }
    function findPosition({ letterMap, clueObject }: positionProps) {
      const matrixObj = letterMapToMatrix(letterMap)
      if (!clueObject.answer) return []
      const available: Array<InputClueTypeResult> = []
      const len = clueObject.answer.length;
      for (let i = 0; i < len; i += 1) {
        const letter = clueObject.answer[i]
        if (!letterMap[letter]) continue
        letterMap[letter].forEach((xyObj: any) => {
          const col = xyObj.x
          const row = xyObj.y
          const isHorizon = matrixObj[row][col + 1] === undefined

          if (isHorizon) {
            // o[y][x - 1] must have no letter if o[y][x] is horizon
            if (matrixObj[row][col - i - 1] !== undefined) return
            if (matrixObj[row][col - i + len] !== undefined) return
            for (let j = 0; j < len; j += 1) {
              if (i === j) continue
              if (matrixObj[row - 1] && matrixObj[row - 1][col - i + j] !== undefined) return
              if (matrixObj[row][col - i + j] !== undefined) return
              if (matrixObj[row + 1] && matrixObj[row + 1][col - i + j] !== undefined) return
            }
          } else {
            if (matrixObj[row - i - 1] && matrixObj[row - i - 1][col] !== undefined) return
            if (matrixObj[row - i + len] && matrixObj[row - i + len][col] !== undefined) return
            for (let j = 0; j < len; j += 1) {
              if (i === j || matrixObj[row - i + j] === undefined) continue
              if (matrixObj[row - i + j][col - 1] !== undefined) return
              if (matrixObj[row - i + j][col] !== undefined) return
              if (matrixObj[row - i + j][col + 1] !== undefined) return
            }
          }

          available.push({
            clue: clueObject.clue,
            hint: clueObject.hint,
            answer: clueObject.answer,
            col: xyObj.x - (isHorizon ? i : 0),
            row: xyObj.y - (isHorizon ? 0 : i),
            isHorizon,
            direction: isHorizon ? "across" : "down",
          })
        })
      }
      return available
    }

    // matrixObj:
    // {
    //   -1: [-1: 'x', 0: 'y'        ],
    //    0: [         0: 'y', 1: 'z'],
    //    1: [                 1: 'z']
    // }
    function letterMapToMatrix(letterMap: any) {
      const matrix: Array<any> = []
      Object.keys(letterMap).forEach(letter => {
        letterMap[letter].forEach((letterObj: any) => {
          const y = letterObj.y
          const x = letterObj.x
          if (!matrix[y]) matrix[y] = {}
          matrix[y][x] = letter
        })
      })
      return matrix
    }

    function draw(positionObjArr: Array<InputClueTypeResult>, clueObject: InputClueType) {
      let check = false;
      const letterMap = letterMapOfPositionObjArr(positionObjArr);
      if (!clueObject?.answer) return output(positionObjArr);
      const nextObjArr = findPosition({
        clueObject,
        letterMap: letterMap
      })
      if (nextObjArr.length) {
        // const arr = shuffleArr(nextObjArr)
        const theClueObject = sortedArr.pop() as InputClueType
        for (let i = 0; i < nextObjArr.length; i += 1) {
          const nextObj = nextObjArr[i]
          const ans: any = draw(positionObjArr.concat(nextObj), theClueObject)
          if (ans) {
            check = true;
            positionObjArr.push(nextObj)
            sortedArr.push(theClueObject)
            return ans
          }
        }
        if (!check) {
          return false;
        }
        sortedArr.push(theClueObject)
        return false
      } else return false
    }

    function output(positionObjArr: Array<InputClueTypeResult>) {
      let translateX = 0
      let translateY = 0
      let maxX = 0
      let maxY = 0

      positionObjArr.forEach(positionObj => {
        const wordLen = positionObj.answer.length
        const isHorizon = positionObj.isHorizon
        const currentX = positionObj.col
        const currentY = positionObj.row
        const tailX = currentX + wordLen * (isHorizon ? 1 : 0)
        const tailY = currentY + wordLen * (isHorizon ? 0 : 1)
        if (tailX > maxX) maxX = tailX
        if (tailY > maxY) maxY = tailY
        if (currentX < translateX) translateX = currentX
        if (currentY < translateY) translateY = currentY
      })

      const order = arr.reduce((iter: any, val: any, idx: number) => {
        iter[val] = idx
        return iter
      }, {})

      const newPositionObjArr = positionObjArr.map(positionObj => {
        const rtn = positionObj
        rtn.col -= translateX
        rtn.row -= translateY
        return rtn
      }).sort((a, b) => order[a.answer] - order[b.answer])

      const height = maxY - translateY
      const width = maxX - translateX

      const ownerMap = new Array(height).fill(0).map(() => new Array(width))

      newPositionObjArr.forEach((positionObj, orderIdx) => {
        const letterArr = positionObj.answer.split('')
        const isHorizon = positionObj.isHorizon
        const startY = positionObj.row
        const startX = positionObj.col
        letterArr.forEach((letter, letterIdx) => {
          const x = startX + (isHorizon ? letterIdx : 0)
          const y = startY + (isHorizon ? 0 : letterIdx)
          const obj = {letter}
          const key = isHorizon ? 'h' : 'v'
          const target = ownerMap[y][x] || obj
          target[key] = orderIdx
          target[key + 'Idx'] = letterIdx
          if (!ownerMap[y][x]) ownerMap[y][x] = obj
        })
      })

      return {
        height,
        width,
        positionObjArr: newPositionObjArr,
        ownerMap
      }
    }
  }

  export function convertToResultArray(arr: Array<any>) {
    let result: any = {
      across: {},
      down: {}
    };
  
    let acrossKey = 1;
    let downKey = 1;
    arr.forEach((item) => {
      const { clue, hint, answer, col, row, isHorizon } = item;
      const newItem = { clue, hint, answer, row, col };
  
      if (isHorizon) {
        const key = Object.values(result.down).findIndex((downItem: any) => downItem.row === row && downItem.col === col) + 1;
        
        if (key === 0) {
          result.across[acrossKey++] = newItem;
        } else {
          result.across[key + 1] = newItem;

          // downにあるデータ変更
          result.down[downKey++] = result.down[downKey - 2];
          delete result.down[downKey - 2];
        }
      } else {
        const key = Object.values(result.across).findIndex((acrossItem: any) => acrossItem.row === row && acrossItem.col === col) + 1;
        
        if (key === 0) {
          result.down[downKey++] = newItem;
        } else {
          result.down[key + 1] = newItem;
          
          // acrossにあるデータ変更
          result.across[acrossKey++] = result.across[acrossKey - 2];
          delete result.across[acrossKey - 2];
        }
      }
    });
  
    return result;
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












