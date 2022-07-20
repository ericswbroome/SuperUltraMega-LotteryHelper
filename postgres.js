const {Sequelize} = require('sequelize');

pgsql = new Sequelize(process.env.DATABASE_URL, {
    dialextOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

