function find_lowest_cost_node() {
    let lowest_cost_node = null;
    let lowest_cost = Number.POSITIVE_INFINITY;
    for (let node in costs) {
        if (processed.indexOf(node) === -1 && costs[node] < lowest_cost) {
            lowest_cost = costs[node];
            lowest_cost_node = node;
        }
    }
    return lowest_cost_node;
}

var graph = {};
graph["start"] = {};
graph["start"]["A"] = 6;
graph["start"]["B"] = 2;
graph["A"] = {};
graph["A"]["end"] = 1;
graph["B"] = {};
graph["B"]["A"] = 3;
graph["B"]["end"] = 5;
graph["end"] = null;

var costs = {};
costs["A"] = 6;
costs["B"] = 2;
costs["end"] = Number.POSITIVE_INFINITY;

var parents = {};
parents["A"] = "start";
parents["B"] = "start";
parents["end"] = null;

var processed = [];

var parent = find_lowest_cost_node();
while (parent) {
    let cost = costs[parent];
    let children = graph[parent];
    for (let child in children) {
        let new_cost = cost + graph[parent][child];
        if (new_cost < costs[child]) {
            costs[child] = new_cost;
            parents[child] = parent;
        }
    }
    processed.push(parent);
    parent = find_lowest_cost_node();
}

node = parents["end"];
while (node) {
    console.log(node);
    node = parents[node];
}
