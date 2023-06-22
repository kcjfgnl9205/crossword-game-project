import React from 'react';
import { Font, Document, Page } from '@react-pdf/renderer';
import PdfHeading from '../components/pdf/Heading';
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
        <PdfHeading fixed>{username}さん（{item.name}）</PdfHeading>

        {
          item.parts.map((part: any) => {
            return (
              <React.Fragment key={part.id}>
                <PdfTitle>{part.name}</PdfTitle>
                <PdfTable
                  headerFixed
                  fields={
                    part.chapters.map((chapter: any, idx: number, arr: Array<any>) => { return { title: chapter.name, width: Math.floor(100 / arr.length) } })
                  }
                  data={
                    part.chapters.map((chapter: any, idx: number, arr: Array<any>) => 
                      chapter.langs.map((lang: any, _idx: number, langArr: Array<any>) =>  { return { title: lang.name, width: Math.floor(100 / arr.length + langArr.length), item: lang.total_questions === null ? "" : `${lang.total_correct_answers} / ${lang.total_questions}` } })
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