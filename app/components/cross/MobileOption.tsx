import { useContext, useEffect, useState } from "react";
import Hint from "./Hint";
import { CrosswordContext } from "./context";


type Props = {
  onHintShow?: boolean;
  setOnHintShow?: React.Dispatch<React.SetStateAction<boolean>>;
  item?: any;
}

export default function OptionMobile({ onHintShow, setOnHintShow, item }: Props) {
  const [ data, setData ] = useState("");
  const { handleHintSelected } = useContext(CrosswordContext);

  // 改行処理
  useEffect(() => {
    const fetchDataFromDB = () => {
      const fetchedData = item.info.clue as string;
      const replacedData = fetchedData.replace(/\n/g, '<br>');
      setData(replacedData);
    };

    fetchDataFromDB();
  }, [item]);
  
  return (
    <div className="border rounded-lg p-2 bg-neutral-100 block md:hidden">
      <h3 className="font-semibold text-md">
        {`問題 ${item.info.number} ${ item.direction === "across" ? "（よこ問題）" : "（たて問題）" }`}
      </h3>
      <div dangerouslySetInnerHTML={{ __html: data }} />
      {
        item.info.hint && 
        <span>
          <span className="text-yellow-500 text-xs" onClick={() => { setOnHintShow?.(prev => !prev); handleHintSelected(item.direction, item.info.number.toString()) }}>Hintを{ onHintShow ? "閉じる" : "見る" }</span>
          <Hint onShow={onHintShow}>{item.info.hint}</Hint>
        </span>
      }
    </div>
  )
}
