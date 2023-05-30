const SELECT_PART_MST_BY_CATEGORY_NAME = `
        SELECT part_mst.id
             , part_mst.name
             , part_mst.sorted
          FROM category_mst
    INNER JOIN part_mst
            ON part_mst.category_id = category_mst.id
           AND part_mst.deleted_at IS NULL
           AND category_mst.deleted_at IS NULL
         WHERE category_mst.name_en = ?
      ORDER BY part_mst.sorted
`;
export const select_part_mst_by_categoryname = async (conn: any, name: any) => {
  try {
    const [ rows ] = await conn?.execute(SELECT_PART_MST_BY_CATEGORY_NAME, [name]);
    return rows;
  } catch (err) {
    throw err;
  }
};


const INSERT_PART_MST = 'INSERT INTO PART_MST(name, sorted, category_id) VALUES(?, ?, ?)';
export const insert_part_mst = async (conn: any, category_id: number, obj: any) => {
  try {
    const [ rows ] = await conn?.execute(INSERT_PART_MST, [obj.name, obj.sorted, category_id]);
    return rows;
  } catch (err) {
    throw err;
  }
};


const DELETE_PART_MST = 'UPDATE PART_MST SET deleted_at = ? WHERE id = ?';
export const delete_part_mst = async (conn: any, id: number) => {
  try {
    const [ rows ] = await conn?.execute(DELETE_PART_MST, [new Date(), id]);
    return rows;
  } catch (err) {
    throw err;
  }
};


const UPDATE_PART_MST = 'UPDATE PART_MST SET name = ?, sorted = ? WHERE id = ?';
export const update_part_mst = async (conn: any, id: number, obj: any) => {
  try {
    const [ rows ] = await conn?.execute(UPDATE_PART_MST, [obj.name, obj.sorted, id]);
    return rows;
  } catch (err) {
    throw err;
  }
};
