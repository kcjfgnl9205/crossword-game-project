import { Text } from '@react-pdf/renderer';
import { Style } from '@react-pdf/types';


type Props = {
  position?: "absolute" | "relative"
  fontWeight?: 'bold' | 'medium' | 'normal'
  fontSize?: number;
  textAlign?: 'center' | 'left' | 'right';
  style?: Style | Style[];
}

export default function PdfPageNumber({
  fontWeight = "normal",
  fontSize = 12,
  textAlign = "center",
}: Props) {
  return (
    <Text
      style={{
        position: "absolute",
        bottom: 30,
        left: 0,
        right: 0,
        fontWeight: fontWeight,
        fontSize: fontSize,
        textAlign: textAlign,
        color: "grey",
      }}
      render={({ pageNumber, totalPages }) =>`${pageNumber} / ${totalPages}`}
      fixed
    />
  )
}
