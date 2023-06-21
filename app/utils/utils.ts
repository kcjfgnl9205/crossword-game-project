// 秒を分, 秒に変更する
export const changeSecondToMinute = (seconds: number): any => {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  
  return { minute: m, second: s }
}

// 分：秒を秒をに変更する
export const changeMinuteToSecond = (minute: number, seconds: number): number => {
  return (minute * 60 ) + seconds;
}


export function calculateScore(numQuestions: number): number {
  const maxScore = 100; // 満点
  let scorePerQuestion: number = 0;

  if (numQuestions === 0) {
    scorePerQuestion = 0; // 問題がない場合
  } else {
    scorePerQuestion = Math.floor(maxScore / numQuestions); // 点数計算
  }

  return scorePerQuestion;
}

// CSV出力
export const downloadCSV = async (item: any, filename: string) => {
  const title = item.name + '\n';
  const csvData = title + convertToCSV(item.parts);

  const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

}

const convertToCSV = (items: Array<any>) => {
  let result = "";
  items.forEach((item: any) => {
    result += item.name + '\n';

    const chapterName = item.chapters.map((chapter: any) => 
      chapter.langs.map((lang: any) =>  Object.values(chapter)[1])
    ).join(",") + '\n';

    const langName = item.chapters.map((chapter: any) => 
      chapter.langs.map((lang: any) =>  Object.values(lang)[1])
    ).join(",") + '\n';

    const score = item.chapters.map((chapter: any) => 
      chapter.langs.map((lang: any) =>  Object.values(lang)[3] === null ? "" : `${Object.values(lang)[4]}問/${Object.values(lang)[3]}問`)
    ).join(",") + '\n';

    result += chapterName + langName + score + '\n';
  })

  return result;
}
