import { View } from '@react-pdf/renderer';
import { Style } from '@react-pdf/types';


type Props = {
  mh?: number;
  mt?: number;
  mv?: number;
  p?: number;
  px?: number;
  py?: number;
  borderColor?: string;
  bg?: string;
  bw?: number;
  alignItems?: "flex-end" | "flex-start" | "center";
  flexDirection?: "row" | "column";
  fixed?: boolean;
  style?: Style | Style[];
  children?: React.ReactNode;
}

export function PdfView({
  mh = 20,
  p = 2,
  flexDirection = "column",
  style,
  fixed = false,
  children
}: Props) {
  return (
    <View
      style={{
        ...style,
        marginHorizontal: mh,
        padding: p,
        flexDirection: flexDirection
      }}
    >
      {children}
    </View>
  )
}


export function PdfBoardView({
  mh = 20,
  mv = 50,
  py = 2,
  px = 2,
  borderColor = "grey",
  bw = 2,
  style,
  fixed = false,
  children
}: Props) {
  return (
    <View
      style={{
        ...style,
        marginHorizontal: mh,
        marginVertical: mv,
        paddingLeft: px,
        paddingRight: px,
        paddingTop: py,
        paddingBottom: py,
        borderColor: borderColor,
        borderWidth: bw,
      }}
    >
      {children}
    </View>
  )
}