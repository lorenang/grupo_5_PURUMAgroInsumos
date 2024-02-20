module.exports = (sequelize, DataTypes) => {
    let alias = 'user';
    let cols = {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_fullName: {
            type: DataTypes.STRING(150),
            allowNull: true
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        user_email: {
            type: DataTypes.STRING(150),
            allowNull: true
        },
        password: {
            type: DataTypes.STRING(250),
            allowNull: true
        },
        user_image: {
            type: DataTypes.CHAR(250),
            allowNull: true
        }
    };
    let config = {
        timestamps: false
    };

    const user = sequelize.define(alias, cols, config); 

    return user;
};
