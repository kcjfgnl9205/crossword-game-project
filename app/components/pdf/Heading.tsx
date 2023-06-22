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

export default function PdfHeading({
  fontWeight = "bold",
  fontSize = 14,
  children
}: Props) {
  return (
    <Text
      style={{
        fontWeight: fontWeight,
        fontSize: fontSize,
        marginBottom: "24px"
      }}
    >
      {children}
    </Text>
  )
}
