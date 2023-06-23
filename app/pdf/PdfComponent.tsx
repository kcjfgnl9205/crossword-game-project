import React from 'react';
import { Font, Document, Page, Text } from '@react-pdf/renderer';
import PdfTitle from '../components/pdf/Title';
import PdfPageNumber from '../components/pdf/PageNumber';
import PdfTable from '../components/pdf/Table';

Font.register(
  {
    family: "NotoSansJP",
    src: "../../fonts/NotoSansJP-Regular.ttf"
  }
);

type Props = {
  username: string;
  item: any;
}

const PdfComponent = ({ username, item }: Props) => {
  return (
    <Document>
      <Page style={{
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
        fontFamily: 'NotoSansJP'
      }}>

        {/* ヘッダー、カテゴリー */}
        <Text style={{ fontSize: 9, padding: 2 }}>会社名：神田IT School</Text>
        <Text style={{ fontSize: 9, padding: 2 }}>名前：{username}</Text>
        <Text style={{ fontSize: 9, padding: 2 }}>カテゴリー：{item.name}</Text>

        {
          item.parts.map((part: any) => {
            return (
              <React.Fragment key={part.id}>
                <PdfTitle>{part.name}</PdfTitle>
                <PdfTable
                  headerFixed
                  fields={
                    part.chapters.map((chapter: any, idx: number, arr: Array<any>) => { return { title: chapter.name, width: Math.ceil(100 / arr.length) } })
                  }
                  data={
                    part.chapters.map((chapter: any, idx: number, arr: Array<any>) => 
                      chapter.langs.map((lang: any, _idx: number, langArr: Array<any>) =>  { return { title: lang.name, width: Math.ceil(100 / arr.length + langArr.length), item: lang.total_questions === null ? "" : `${lang.total_correct_answers} / ${lang.total_questions}` } })
                    )
                }
                />
              </React.Fragment>
            )
          })
        }
        <PdfPageNumber />

      </Page>
    </Document>
  ) 
};

export default PdfComponent;