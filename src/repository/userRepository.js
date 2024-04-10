import con from "./connection.js";

export async function userSave(user) {
  let command = `
    insert into tb_admin (nome_adm, email_adm, senha_adm)
                  values (?, ?, ?)
  `

  let resp = await con.query (command, [user.name, user.email, user.password])
  let info = resp[0];

  user.id = info.insertId;
  return user;
}

export async function userLists() {
  let command = `
    select * 
      from tb_admin
  `

  let resp = await con.query(command, []);
  let line = resp[0];

  return line;
}