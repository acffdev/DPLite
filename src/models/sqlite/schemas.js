export const expenses = `
  CREATE TABLE IF NOT EXISTS expenses (
    id INTEGER PRIMARY KEY NOT NULL, 
    date TEXT DEFAULT (DATETIME('now', 'localtime')), 
    title TEXT, 
    price REAL NOT NULL, 
    status INTEGER DEFAULT 1 
  );
`;

export const drop = `DROP TABLE expenses`;
