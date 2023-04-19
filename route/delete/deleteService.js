const DB_URL = process.env.DB_URL;
const invoke = require("../../lib/http/invoke");

let deleteService = async (query) => {
    try {

        var queryObject = {
            url: query.url,
            database: query.cluster,
            client: query.client,
            docType: query.docType,
            query: query.query
        }
        let response = await invoke.makeHttpCall("post", "remove", queryObject);
        return response.data.statusMessage;

    }catch(err) {
        console.log(err)
        return err;
    }
}

let deleteManyService = async (query) => {
    try {

        var queryObject = {
            url: DB_URL,
            database: query.cluster,
            client: query.client,
            docType: query.docType,
            query: query.query
        }
        let response = await invoke.makeHttpCall("post", "removemany", queryObject);
        return response.data.statusMessage;

    }catch(err) {
        console.log(err)
        return err;
    }
}

module.exports = {
    deleteService,
    deleteManyService
}