const produtoDao=require("./produto-dao");

describe("Conjunto de testes produto-dao",()=>{
    it("Ao salvar um produto o método gravarDados deve retornar true",async()=>{
        //cenário
        const esperado=true;
        //execução
        const res=await produtoDao.gravarDados({
            codigo:"",
            nome:"236",
            descricao: "teste",
            unidademedida: "KG",
            precoun: 10.00,
            estoque: 10
        });
        //validação
        expect(res).toBe(esperado);
    });

    it("Ao salvar um produto o método gravarDados deve retornar false",async()=>{
        //cenário
        const esperado=false;
        //execução
        const res=await produtoDao.gravarDados({});
        //validação
        expect(res).toBe(esperado);
    });

    it("Ao buscar um produto o método buscaDados deve retornar um array com um objeto",async()=>{
        //cenário
        const esperado=1;
        //execução
        const res=await produtoDao.buscaDados(1);
        //validação
        expect(res.length).toBe(esperado);
    });

    it("Ao buscar todos os produtos o método buscaTodosDados deve retornar um array com vários objetos",async()=>{
        //cenário
        const esperado=1;
        //execução
        const res=await produtoDao.buscaTodosDados();
        //validação
        expect(res.length).toBe(esperado);
    });

});