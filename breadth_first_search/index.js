function isSeller(person) {
    return person[0] === 't';
}

var graph = {};

graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = ["you"];
graph["thom"] = [];
graph["jonny"] = [];


var searchQueue = []
graph["you"].map((item) => searchQueue.push(item));

var searched = ["you"]
var person;

function search() {
    while (searchQueue.length > 0) {
        person = searchQueue.shift();
        if (isSeller(person)) {
            console.log(person + " is a seller");
            return true;
        }
        
        if (searched.indexOf(person) === -1) {
            graph[person].map((item) => searchQueue.push(item));
            searched.push(person);
        }
    }
    return false;
}

if (search(person)) {
    var parent;
    while (searched.length > 0) {
        parent = searched.pop();
        if (graph[parent].indexOf(person) !== -1) {
            console.log(parent);
            person = parent;
        }
    }
}
