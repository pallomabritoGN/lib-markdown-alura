import pegaArquivo from '../index.js';

const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe('pegaArquivo::', () => {
  it('Deve ser uma função', () => {
    expect(typeof(pegaArquivo)).toBe('function');
  })
  it('Deve retornar array com resultados', async () => {
    const resultado = await pegaArquivo('/var/www/palloma/lib-markdown/test/arquivos/texto1.md');
    expect(resultado).toEqual(arrayResult);
  })
  it('Deve retornar mensagem "Não há links"', async () => {
    const resultado = await pegaArquivo('/var/www/palloma/lib-markdown/test/arquivos/texto2.md');
    expect(resultado).toBe('Não há links');    
  })
  it('Deve lançar um erro na falta de arquivo', () => {
    async function capturaErro() {
      await pegaArquivo('/var/www/palloma/lib-markdown/test/arquivos/texto.md');
      expect(capturaErro).toThrowError(/Arquivo não encontrado./)
    }
  })
})

