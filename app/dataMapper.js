const client = require('./DB/database.js');
const dataMapper = {
getGundamTrad : async ()=> {
    // la requête SQL pour prendre les traductions de la DB obarba via pg client
    const queryString= `SELECT *FROM "traduction";`
    //on veut récupérer les résultats
    const result = await client.query(queryString);
    
    const tradList= result.rows;
    //on renvoie la liste des traductions
    return tradList;
}
};
module.exports = dataMapper;