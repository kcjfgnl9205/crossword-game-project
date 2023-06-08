import { useContext } from "react";
import Hint from "./Hint";
import { CrosswordContext } from "./context";


type Props = {
  onHintShow?: boolean;
  setOnHintShow?: React.Dispatch<React.SetStateAction<boolean>>;
  item?: any;
}

export default function OptionMobile({ onHintShow, setOnHintShow, item }: Props) {
  const { handleHintSelected } = useContext(CrosswordContext);
  
  return (
    <div className="border rounded-lg p-2 bg-neutral-100 block md:hidden">
      <h3 className="font-semibold text-md">
        {`問題 ${item.number} ${ item.direction === "across" ? "（よこ問題）" : "（たて問題）" }`}
      </h3>
      <p>{item.clue}</p>
      {
        item.hint && 
        <span>
          <span className="text-yellow-500 text-xs" onClick={() => { setOnHintShow?.(prev => !prev); handleHintSelected(item.direction, item.number.toString()) }}>Hintを{ onHintShow ? "閉じる" : "見る" }</span>
          <Hint onShow={onHintShow}>{item.hint}</Hint>
        </span>
      }
    </div>
  )
}
