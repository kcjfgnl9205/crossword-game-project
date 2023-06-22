import { Text, StyleSheet, View } from '@react-pdf/renderer';
import { Style } from '@react-pdf/types';
import { PdfBoardView } from './View';


const styles = StyleSheet.create({
  table: {
    borderColor: "#000",
    borderWidth: 1,
    flexFlow: 1,
  },
  tableRow: {
    flexDirection: "row"
  },
  headerBg: {
    backgroundColor: "#eeeeee",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  tableCellHeader: {
    margin: 2,
    fontSize: 8,
    fontWeight: "bold",
    textAlign: "center"
  },
  tableCell: {
    margin: 2,
    fontSize: 8
  },
  textCenter: {
    textAlign: "center"
  }
})


type Props = {
  style?: Style;
  bottom?: number;
  headerFixed?: boolean;
  fields: Array<any>;
  data?: Array<any>;
}

export default function PdfTable({
  headerFixed = false,
  fields,
  data,
  style
}: Props) {
  return (
    <View style={[styles.table]}>
      <View style={[styles.tableRow, styles.headerBg]} fixed={headerFixed}>
        {
          fields.map((item: any, index: number) => (
            <View key={index} style={[{width: item.width + "%"}]}>
              <Text style={[styles.tableCellHeader]}>{item?.title}</Text>
            </View>
          ))
        }
      </View>
      <View style={[styles.tableRow, styles.headerBg]} fixed={headerFixed}>
        {
          data?.map((items: any, index: number) => 
            items.map((item: any, _index: number) => (
              <View key={index} style={[{width: item.width + "%"}]}>
                <Text style={[styles.tableCellHeader]}>{item?.title}</Text>
              </View>
            ))
          )
        }
      </View>
      <View style={[styles.tableRow]}>
      {
        data?.map((items: any, index: number) => 
          items.map((item: any, _index: number) => (
            <PdfBoardView
              key={_index}
              style={{
                height: "20px",
                width: item.width + "%",
                borderStyle: "solid",
                textAlign: "center"
              }}
              mh={0}
              mv={0}
              py={0}
              bw={1}
              borderColor='#000'
            >
              <Text style={{ fontSize: 8 }}>{item.item}</Text>
            </PdfBoardView>
          ))
        )
      }
      </View>
    </View>
  )
}
