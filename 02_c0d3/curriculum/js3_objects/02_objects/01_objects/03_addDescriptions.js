const allFuns = {}

const addDescriptions = (characters, info) => {
    characters.forEach(e => {
        return e["description"] = info[e.name]
    });
}



allFuns.addDescriptions = addDescriptions

module.exports = allFuns