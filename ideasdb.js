const sqlite3 = require("sqlite3").verbose();
const ideasdb = new sqlite3.Database("./src/database/ideas.db");

ideasdb.serialize(function() {
  // Criar tabela
  ideasdb.run(`
    CREATE TABLE IF NOT EXISTS ideas(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      title TEXT,
      category TEXT,
      description TEXT,
      link TEXT
    );
  `);

  // Inserir dados na tabela
  const query = `
  INSERT INTO ideas(
    image,
    title,
    category,
    description,
    link
  ) VALUES (?,?,?,?,?);
  `;

  const values = [
    "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    "Cursos de Progamação",
    "Estudo",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi omnis earum dolores nobis modi",
    "#"
  ];

  /* ideasdb.run(query, values, function(err) {
    if (err) return console.log(err)

    console.log(this)
  }); */

  // Consultar dados na tabela
  /* ideasdb.all(`SELECT * FROM ideas`, function(err, rows) {
    if (err) return console.log(err)

    console.log(rows)
  }); */

  // Deletar dado na tabela
  /* ideasdb.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err) {
    if (err) return console.log(err)

    console.log("DELETEI", this)
  }) */
});

module.exports = ideasdb;
