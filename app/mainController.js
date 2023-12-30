// const dataMapper = require('./dataMapper.js');
 const traData=require('./DB/fullData.json');

const mainController = {
    HomePage: async (request, response, next) => {
        try {
            const tradList = await traData.map(tradList => tradList.content);
                
            
            response.render('index',{tradList});
           
            
        } catch (error) {
            console.log(error)

            response.status(500).send("Une erreur de serveur est survenue, désolé du souci");
        }
      
    }, 
    ToolsPage:(request, response) => {
       try {
        response.render('outils');
       } catch (error) {
        console.log(error)

        response.status(500).send("Une erreur de serveur est survenue, désolé du souci");
   
       }
    },
   
};

module.exports = mainController;
