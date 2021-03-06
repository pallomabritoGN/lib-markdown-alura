// const chalk = require('chalk');
//const fs = require('fs');
//import chalk from "chalk";
import fs from "fs"; //File system

function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null){
        arrayResultados.push({ [temp[1]]:temp[2] });
    }
    return arrayResultados.length === 0 ? "Não há links" : arrayResultados;
}

function trataErro(erro){
    throw new Error(erro.code, 'Arquivo não encontrado.');
}

export default async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo,encoding);
        return extraiLinks(texto);
    } catch(erro){
        trataErro(erro);
    }
}


