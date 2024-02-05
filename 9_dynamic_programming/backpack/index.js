const BACKPACK_SIZE = 4;

class Item {
    constructor(name, weight, cost) {
        this.name = name;
        this.weight = weight;
        this.cost = cost;
    }
}

function packBackpack(items) {
    const cell = [];

    function getCellCost(i, j) {
        return cell[i][j][0];
    }

    function getCellItemsIdx(i, j) {

        console.log("!!!", i, j, cell[i][j], cell[i][j].slice(1));
        
        return cell[i][j].slice(1);
    }

    const len = items.length;
    var item;
    var totalCost;
    var itemsIdx;

    for (var i = 0; i < len; i++) {
        cell.push([]);
        for (var j = 0; j < BACKPACK_SIZE; j++) {
            item = items[i];

            itemsIdx = [];

            if (item.weight < j + 1) {
                totalCost = item.cost;
                itemsIdx.push(i);
                if (i > 0) {
                    totalCost += getCellCost(i - 1, j - item.weight);
                    itemsIdx.push(...getCellItemsIdx(i - 1, j - item.weight));
                }
            }
            else {
                totalCost = item.weight === j + 1 ? item.cost : 0;
                itemsIdx.push(item.weight === j + 1 ? i : -1);
            }

            if (i > 0 && getCellCost(i - 1, j) > totalCost) {
                totalCost = getCellCost(i - 1, j);
                itemsIdx.push(...getCellItemsIdx(i - 1, j));
            }

            cell[i].push([totalCost, ...itemsIdx]);
        }
    }

    console.log(cell);

    return items;
}

/////////// TESTS

function runTest(items) {
    const packedItems = packBackpack(items);
    console.log('Final cost:', 
        packedItems.reduce((accumulator, item) => accumulator + item.cost, 0)
    );
    packedItems.map((item) => console.log(item.name));
}

const items = [
    new Item("recorder", 4, 3000),
    new Item("notebok", 3, 2000),
    new Item("guitar", 1, 1500),
]

runTest(items);

items.push(new Item("iPhone", 1, 2000));

runTest(items);
