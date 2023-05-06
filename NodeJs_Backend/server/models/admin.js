module.exports = (Sequelize, DataTypes)=>{
    const admin = Sequelize.define("admin", {
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
        }
        


    })
    return admin;
}