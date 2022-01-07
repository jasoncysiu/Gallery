const data = require('../data/data.json');

const searchData = (query) => {

    let matchedData = [];

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (
            element.model_functionalities === query.model_functionalities
            && element.app_categories === query.app_categories
            && element.interaction_types === query.interaction_types
            && element.interaction_style === query.interaction_style        
        ) {
            matchedData.push(element);
        }
    }

    return matchedData;
}

module.exports = { searchData }