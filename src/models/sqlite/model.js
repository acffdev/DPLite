import conn from "./connection";

export default function db(query, args = []) {
  return new Promise((resolve, reject) => {
    conn.transaction((tx) => {
      tx.executeSql(
        query,
        args,
        (tx, { insertId, rowsAffected, rows }) => {
          if (insertId) return resolve(insertId);
          if (rowsAffected > 0) return resolve(rowsAffected);
          resolve(rows._array);
        },
        (tx, error) => reject(error)
      );
    });
  });
}
