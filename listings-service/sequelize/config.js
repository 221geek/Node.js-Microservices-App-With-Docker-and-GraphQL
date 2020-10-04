module.exports.development = {
    dialect: "mysql",
    seederStorage: "sequalize",
    url: precess.env.DB_URI
};