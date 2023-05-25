/**
 * クロスワードゲームに登録可能な最小ゲーム数
 * key1: AA001, key2: 001
 */
const FIND_NAME_MST_MINCNT = `
    SELECT name 
      FROM NAME_MST
     WHERE key1 = 'AA001'
       AND key2 = '001'
       AND deleted_at IS NULL
`;
export const find_name_mst_game_min_cnt = async (conn: any) => {
  try {
    const [ rows ] = await conn?.execute(FIND_NAME_MST_MINCNT, []);
    return rows;
  } catch (err) {
    throw err;
  }
};


const UPDATE_NAME_MST_MINCNT = "UPDATE NAME_MST SET name = ? WHERE key1 = 'AA001' AND key2 = '001'";
export const update_name_mst_game_min_cnt = async (conn: any, value: string) => {
  try {
    const [ rows ] = await conn?.execute(UPDATE_NAME_MST_MINCNT, [value]);
    return rows;
  } catch (err) {
    throw err;
  }
};
