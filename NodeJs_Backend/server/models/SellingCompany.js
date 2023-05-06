module.exports = (Sequelize, DataTypes)=>{
    const selling_company = Sequelize.define("selling_company", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    })
    return selling_company;
}