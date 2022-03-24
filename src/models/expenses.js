import db from "./sqlite/model";
import { expenses } from "./sqlite/schemas";

/* create table */
db(expenses).catch((err) => console.error(err));

/* create */
export const create = (title, price) =>
  db("INSERT INTO expenses (title, price) VALUES (?, ?)", [title, price]);

/* read */
export const read = {
  all: () =>
    db(
      `SELECT 
        id, 
        strftime('Despesa feita em %d/%m/%Y às %H:%M', date) as date,
        title,
        price,
        status  
      FROM expenses WHERE strftime('%m', date) = strftime('%m', date('now')) AND status = 1 ORDER BY date DESC`
    ),
  id: (id) =>
    db(
      `SELECT 
        id, 
        strftime('Despesa feita em %d/%m/%Y às %H:%M', date) as date,
        title,
        price,
        status
      FROM expenses WHERE id = ? AND status = 1 LIMIT 1`,
      [id]
    ),
  date: (start, end) =>
    db(
      `SELECT 
          id, 
          strftime('Despesa feita em %d/%m/%Y às %H:%M', date) as date,
          title,
          price,
          status 
        FROM expenses WHERE date BETWEEN ? AND ? AND status = 1 ORDER BY date DESC`,
      [start, end]
    ),
};

/* update */
export const update = {
  title: (id, title) =>
    db("UPDATE expenses SET title = ? WHERE id = ?", [title, id]),
  price: (id, price) =>
    db("UPDATE expenses SET price = ? WHERE id = ?", [price, id]),
  status: (id, status) =>
    db("UPDATE expenses SET status = ? WHERE id = ?", [status, id]),
  date: (id, date) =>
    db("UPDATE expenses SET date = ? WHERE id = ?", [date, id]),
};

/* delete */
export const remove = (id) => db("DELETE FROM expenses WHERE id = ?", [id]);
