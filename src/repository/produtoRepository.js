import con from "./connection.js";

export async function salvarProduto(roupa) {
    let comando = `
        insert into tb_roupa (nom_roupa, desc_roupa, preco_roupa, tipo_roupa, cor_roupa, tam_roupa, material_roupa)
        values(?,?,?,?,?,?,?)
    `

    let resp = await con.query(comando, [roupa.nome, roupa.desc, roupa.preco, roupa.tipo, roupa.cor, roupa.tam, roupa.material])
    let info = resp[0];

    roupa.id = info.insertId;
    return produto;
}

export async function listarProdutos() {
    let comando = `
        select *
         from tb_roupa
    ` 

    let resp = await con.query(comando, []);
    let linhas = resp[0];

    return linhas;
}

// listar por preco menor

export async function removerProduto(id) {
    let comando = `
        delete from tb_roupa where id_roupa = ?
    `

    let resp = await con.query(comando, [id]);
    let info = resp[0];

    return info.affectedRows;
}

export async function alterarRoupa(roupa, id) {
    let comando = `
        update tb_roupa
            set nome_roupa = ?,
                desc_roupa = ?,
                preco_roupa = ?
                tipo_roupa = ?,
                cor_roupa = ?,
                tam_roupa = ?,
                material_roupa = ?
        where id_roupa = ?
    `

    let resp = await con.query(comando, [roupa.nome, roupa.desc, roupa.preco, roupa.tipo, roupa.cor, roupa.tam, roupa.material, id]);
    let info = resp[0];

    return info.affectedRows;
}

export async function alterarImagem(id, caminho) {
    let comando = `
        update tb_roupa
            set img_roupa = ?
        where id_roupa = ?
    `

    let resp = await con.query(comando, [caminho, id]);
    let info = resp[0];

    return info.affectedRows;
}