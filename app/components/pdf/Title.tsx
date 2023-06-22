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
  fontSize = 12,
  children
}: Props) {
  return (
    <Text
      style={{
        fontWeight: fontWeight,
        fontSize: fontSize,
        marginTop: "8px",
        marginBottom: "12px"
      }}
    >
      {children}
    </Text>
  )
}
