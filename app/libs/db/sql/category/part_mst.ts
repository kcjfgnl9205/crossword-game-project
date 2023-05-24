const INSERT_PART_MST = 'INSERT INTO PART_MST(name, sorted) VALUES(?, ?)';
export const insert_part_mst = async (conn: any, obj: any) => {
  try {
    const [ rows ] = await conn?.execute(INSERT_PART_MST, [obj.name, obj.sorted]);
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
