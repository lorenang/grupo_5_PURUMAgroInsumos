module.exports = (sequelize, DataTypes) => {
    const Categorias = sequelize.define('Categorias', {
        categoria_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categoria_descripcion: {
            type: DataTypes.STRING(150),
            allowNull: true
        }
    });

    return Categorias;
};