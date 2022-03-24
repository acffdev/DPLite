import * as SQLite from "expo-sqlite";

const conn = SQLite.openDatabase("db.db");

export default conn;
