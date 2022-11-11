const clienteDao=require("./cliente-dao");

describe("Conjunto de testes cliente-dao",()=>{
    it("Ao salvar um cliente o método gravarDados deve retornar true",async()=>{
        //cenário
        const esperado=true;
        //execução
        const res=await clienteDao.gravarDados({
            codigo:"50",
            nome:"Teste",
            endereco:"Teste, 123"
        });
        //validação
        expect(res).toBe(esperado);
    });

    it("Ao salvar um cliente o método gravarDados deve retornar false",async()=>{
        //cenário
        const esperado=false;
        //execução
        const res=await clienteDao.gravarDados({});
        //validação
        expect(res).toBe(esperado);
    });

    it("Ao buscar um cliente o método buscaDados deve retornar um array com um objeto",async()=>{
        //cenário
        const esperado=1;
        //execução
        const res=await clienteDao.buscaDados(1);
        //validação
        expect(res.length).toBe(esperado);
    });

    it("Ao buscar todos os clientes o método buscaTodosDados deve retornar um array com vários objetos",async()=>{
        //cenário
        const esperado=1;
        //execução
        const res=await clienteDao.buscaTodosDados();
        //validação
        expect(res.length).toBe(esperado);
    });

});