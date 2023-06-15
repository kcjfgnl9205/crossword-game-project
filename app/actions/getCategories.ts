import { excuteQuery, getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { SELECT_CATEGORY_MST } from "@/app/libs/db/sql/category";
import { CategoryType, ChapterType, LangType, PartType } from "@/app/types";


type Props =  {
  slug: string; // カテゴリー名(name_en)
}

// カテゴリーリスト取得する
export default async function getCategories(params?: Props): Promise<Array<CategoryType>> {
  const connection = await getConnection();
  try {
    const categoryResults: Array<CategoryType> = await excuteQuery(connection, SELECT_CATEGORY_MST, []);
    const transformedData: Array<CategoryType> = [];
    categoryResults.forEach((row: any) => {
      const catregoryIndex = transformedData?.findIndex((category: CategoryType) => category?.id === row.category_id);
      if (catregoryIndex === -1) {
        // 新しいカテゴリー追加
        transformedData.push({
          id: row.category_id,
          name: row.category_name,
          name_en: row.category_name_en,
          sorted: row.category_sorted,
          min_cnt: row.category_min_cnt,
          langs: [{
            id: row.lang_id,
            name: row.lang_name,
            name_en: row.lang_name_en,
            flg: row.category_lang_package_flg
          }],
          parts: [{
            id: row.part_id,
            name: row.part_name,
            sorted: row.part_sorted,
            chapters: [{
              id: row.chapter_id,
              name: row.chapter_name,
              sorted: row.chapter_sorted,
              flg: row.chapter_flg,
            }]
          }],
        });
      } else {
        const langIndex = transformedData[catregoryIndex].langs?.findIndex((lang: LangType) => lang?.id === row.lang_id);
        if (langIndex === -1) {
          transformedData[catregoryIndex].langs.push({
            id: row.lang_id,
            name: row.lang_name,
            name_en: row.lang_name_en,
            flg: row.category_lang_package_flg
          });
        }

        const partIndex = transformedData[catregoryIndex].parts?.findIndex((part: PartType) => part?.id === row.part_id);
        if (partIndex === -1) {
          transformedData[catregoryIndex].parts.push({
            id: row.part_id,
            name: row.part_name,
            sorted: row.part_sorted,
            chapters: [{
              id: row.chapter_id,
              name: row.chapter_name,
              sorted: row.chapter_sorted,
              flg: row.chapter_flg
            }]
          });
        } else {
          const chapterIndex = transformedData[catregoryIndex].parts[partIndex].chapters?.findIndex((chapter: ChapterType) => chapter?.id === row.chapter_id);
          if (chapterIndex === -1) {
            transformedData[catregoryIndex].parts[partIndex].chapters.push({
              id: row.chapter_id,
              name: row.chapter_name,
              sorted: row.chapter_sorted,
              flg: row.chapter_flg
            });
          }
        }
      }
    });

    // slug(name_en)が存在すると該当するデータのみリターンする
    if (params?.slug) {
      return transformedData.filter((category: CategoryType) => category.name_en === params.slug);
    }

    return transformedData;
  } catch (error: any) {
    console.log("getCategories" + error);
    return [];
  } finally {
    releaseConnection(connection);
  }
}
