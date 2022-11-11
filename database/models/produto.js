const Sequelize=require('sequelize');
const {database}=require('../db/dbconfig.js');

const Produto=database.define('produto',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    codigo:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    nome:{
        allowNull:false,
        type:Sequelize.STRING(100)
    },
    descricao: {
        allowNull: true,
        type: Sequelize.STRING(300)
    },
    unidademedida:{
        allowNull: false,
        type: Sequelize.STRING(2)
    },
    precoun: {
        allowNull: false, 
        type: Sequelize.FLOAT
    },
    estoque: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.FLOAT
    }
});

module.exports=Produto;