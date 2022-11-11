
const app=require("./app");
const clienteDao=require("./database/dao/cliente-dao");
const produtoDao=require("./database/dao/produto-dao");
const request=require("supertest");

describe("Conjunto de testes app",()=>{

    it("Testando GetInfo Endpoint",async()=>{
        //cenário
        const esperado="geekxxx";
        //execução
        const res=await request(app).get("/getInfo");
        
        //validação
        expect(res.body.user).toBe(esperado);
    });

    it("Ao salvar um cliente o endpoint deve retornar Ok",async()=>{
        const databaseSpy = jest.spyOn(clienteDao, 'gravarDados');
        databaseSpy.mockReturnValue(true);

      
        //cenário
        const esperado="Ok";
        //execução
        const res=await request(app)
                  .post("/clientes/salvar")
                  .send({codigo:"",
                    nome:"236",
                    endereco:"7889"});
        
      

        //validação
        expect(res.text).toBe(esperado);
        expect(res.status).toBe(201);
    });

    it("Ao tentar salvar um cliente e der um erro o endpoint deve retornar  NOk e 401",async()=>{
        const databaseSpy = jest.spyOn(clienteDao, 'gravarDados');
        databaseSpy.mockReturnValue(false);//gravarDados Sempre Vai Retornar false

      
        //cenário
        const esperado="NOk";

        //execução
        const res=await request(app)
                  .post("/clientes/salvar")
                  .send({});
                  
      
          expect(res.status).toBe(401);
    
        
    });

    

    it("Ao listar todos os clientes o endpoint deve retornar um array",async()=>{
        const databaseSpy = jest.spyOn(clienteDao, 'buscaTodosDados');
        databaseSpy.mockReturnValue([{codigo:"1",nome:"2",endereco:"3"}]);//gravarDados Sempre Vai Retornar false

      
        //cenário
        const esperado=[{codigo:"1",nome:"2",endereco:"3"}];

        //execução
        const res=await request(app)
                  .get("/clientes/listar");
                  
      
        expect(res.body).toEqual(esperado);
    
        
    });

    it("Ao listar um cliente pelo código o endpoint deve retornar um objeto",async()=>{
        const databaseSpy = jest.spyOn(clienteDao, 'buscaDados');
        databaseSpy.mockReturnValue({codigo:"1",nome:"2",endereco:"3"});//gravarDados Sempre Vai Retornar false

      
        //cenário
        const esperado={codigo:"1",nome:"2",endereco:"3"};

        //execução
        const res=await request(app)
                  .get("/clientes/listar/1");
                  
      
        expect(res.body).toEqual(esperado);
    
        
    });

    //testes produtos
    
    it("Ao salvar um produto o endpoint deve retornar Ok",async()=>{
        const databaseSpy = jest.spyOn(produtoDao, 'gravarDados');
        databaseSpy.mockReturnValue(true);

      
        //cenário
        const esperado="Ok";
        //execução
        const res=await request(app)
                  .post("/produtos/salvar")
                  .send({codigo:"",
                    nome:"236",
                descricao: "teste",
                unidademedida: "KG",
                precoun: 10.00,
                estoque: 10});
        
      

        //validação
        expect(res.text).toBe(esperado);
        expect(res.status).toBe(201);
    });

    it("Ao tentar salvar um produto e der um erro o endpoint deve retornar  NOk e 401",async()=>{
        const databaseSpy = jest.spyOn(produtoDao, 'gravarDados');
        databaseSpy.mockReturnValue(false);//gravarDados Sempre Vai Retornar false

      
        //cenário
        const esperado="NOk";

        //execução
        const res=await request(app)
                  .post("/produtos/salvar")
                  .send({});
                  
      
          expect(res.status).toBe(401);
    
        
    });

    

    it("Ao listar todos os produtos o endpoint deve retornar um array",async()=>{
        const databaseSpy = jest.spyOn(produtoDao, 'buscaTodosDados');
        databaseSpy.mockReturnValue([{codigo:"1",nome:"2",descricao:"3",unidademedida:"4",precoun:"5",estoque:"6"}]);//gravarDados Sempre Vai Retornar false

      
        //cenário
        const esperado=[{codigo:"1",nome:"2",descricao:"3",unidademedida:"4",precoun:"5",estoque:"6"}];

        //execução
        const res=await request(app)
                  .get("/produtos/listar");
                  
      
        expect(res.body).toEqual(esperado);
    
        
    });

    it("Ao listar um produto pelo código o endpoint deve retornar um objeto",async()=>{
        const databaseSpy = jest.spyOn(produtoDao, 'buscaDados');
        databaseSpy.mockReturnValue({codigo:"1",nome:"2",descricao:"3",unidademedida:"4",precoun:"5",estoque:"6"});//gravarDados Sempre Vai Retornar false

      
        //cenário
        const esperado={codigo:"1",nome:"2",descricao:"3",unidademedida:"4",precoun:"5",estoque:"6"};

        //execução
        const res=await request(app)
                  .get("/produtos/listar/1");
                  
      
        expect(res.body).toEqual(esperado);
    
        
    });

})