const {database,check}=require("./dbconfig");

describe("Conjunto de testes dbconfig",()=>{
    it("Ao chamar o método check o retorno deve ser true",async()=>{
        //cenário
        const esperado=true;
        //execução
        const res=await check();
        //validação
        expect(res).toBe(esperado);
    });
});