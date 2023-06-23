import { Text } from '@react-pdf/renderer';
import { Style } from '@react-pdf/types';


type Props = {
  fontWeight?: 'bold' | 'medium' | 'normal'
  fontSize?: number;
  fontFamily?: string;
  textAlign?: 'center' | 'left';
  style?: Style | Style[];
  bottom?: number;
  fixed?: boolean;
  children?: React.ReactNode;
}

export default function PdfTitle({
  fontWeight = "bold",
  fontSize = 10,
  children
}: Props) {
  return (
    <Text
      style={{
        fontWeight: fontWeight,
        fontSize: fontSize,
        marginTop: "12px",
        marginBottom: "6px"
      }}
    >
      {children}
    </Text>
  )
}
