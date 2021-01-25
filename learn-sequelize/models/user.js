const Sequelize = require('sequelize');
const {
    User
} = require('.');

module.exports = class User extends Sequelize.Model {
    // 테이블 설정
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true,
            },
            age: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },
            married: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            comment: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'User',
            tableName: 'users_sequelize',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    // 다른 테이블과의 관계
    static associate(db) {
<<<<<<< HEAD
        db.User.hasMany(db.Comment, {foreignKey: 'commenter', sourceKey: 'id'});
=======
        db.User.hasMany(db.Comment, {
            foreignkey: 'commenter',
            sourceKey: 'id'
        });
>>>>>>> c1ef3f86148d7e3f5834e0257fc2aaf892529b35
    }
}