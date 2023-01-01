//nuestro modelo

const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function create(programmingLanguaje){

    const resultado = await db.query(`
    INSERT INTO lenguajes_programacion
    (nombre , anio_salida, github_rank)
    VALUES
        (
            "${programmingLanguaje.nombre}",
            "${programmingLanguaje.anio_salida}",
            "${programmingLanguaje.github_rank}"
        )
    `);

    let message = "Erro al crear el lenguaje de programacion";
    if(resultado.affectedRows){
        message = "El lenguaje se a creado con exito";
    }
    return {message};
}

async function read(page = 1){
    const offset = helper.getOffSet(page, config.listPerPage);
    const rows = await db.query(`
        SELECT * FROM lenguajes_programacion LIMIT ${offset}, ${config.listPerPage};
    `);

    const data = helper.emptyRows(rows);
    const metadata = {page};

    return{
        data,
        metadata
    }
}

async function update(id, programmingLanguaje){
    const resultado = await db.query(`
        UPDATE lenguajes_programacion
        SET nombre="${programmingLanguaje.nombre}",
            anio_salida="${programmingLanguaje.anio_salida}",
            github_rank="${programmingLanguaje.github_rank}"
        WERE id=${id}
    `)

    let message = "Erro al actualizar el lenguaje de programacion";
    if(resultado.affectedRows){
        message = "El lenguaje se a actualizado con exito";
    }
    return {message};
}

module.exports = {
    create,
    read,
    update
}