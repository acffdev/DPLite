export const dateToSql = (d) =>
  `${d.split("/")[2]}-${("0" + d.split("/")[1]).slice(-2)}-${(
    "0" + d.split("/")[0]
  ).slice(-2)}`;
