module.exports = (Sequelize, DataTypes)=>{
    const ship_company = Sequelize.define("ship_company", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        area: {
            type: DataTypes.STRING,
            allowNull: false,
        }
        


    })
    return ship_company;
}