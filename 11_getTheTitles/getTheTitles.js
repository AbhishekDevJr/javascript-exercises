const getTheTitles = function(objArray) {
    let titleArray = objArray.map((book) => {
        return book.title;
    });
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
