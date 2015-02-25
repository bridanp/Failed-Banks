/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "Number": {
        "type": "number"
    },
    "limit": {
        "type": "object",
        "properties": {}
    },
    "skip": {
        "type": "object",
        "properties": {}
    },
    "Boolean": {
        "type": "boolean"
    },
    "String": {
        "type": "string"
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);

/**
 * Data storage
 */
Apperyio.storage = {

    "limit": new $a.LocalStorage("limit", "String"),

    "skip": new $a.LocalStorage("skip", "String"),

    "word": new $a.LocalStorage("word", "String")
};