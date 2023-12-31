const { Game, Designer, Editorial, Language, Category, Mechanic, Thematic, Author } = require ("../db.js");

const GET_ALL_GAMES = async (req, res) => {
    try {
        let games = await Game.findAll({
            include: [{model: Author}, {model: Category}, {model: Designer}, {model: Editorial}, {model: Language}, {model: Mechanic}, {model: Thematic}]});
        if (games.length === 0) {
             return res.status(404).json({message: "No games were found"});
        }
        return res.status(200).json(games);
    } catch (error) {
      return res.status(500).json({message: error.message});
    }
};

module.exports = {
    GET_ALL_GAMES
};