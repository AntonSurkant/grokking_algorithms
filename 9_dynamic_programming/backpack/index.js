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

            totalCost = 0;
            itemsIdx = [];

            if (item.weight <= j + 1) {
                totalCost = item.cost;
                itemsIdx.push(i);
                if (i > 0 && item.weight < j + 1) {
                    totalCost += getCellCost(i - 1, j - item.weight);
                    itemsIdx.push(...getCellItemsIdx(i - 1, j - item.weight));
                }
            }

            if (i > 0 && getCellCost(i - 1, j) > totalCost) {
                totalCost = getCellCost(i - 1, j);
                itemsIdx = getCellItemsIdx(i - 1, j);
            }

            cell[i].push([totalCost, ...itemsIdx]);
        }
    }

    return cell[len - 1][BACKPACK_SIZE - 1];
}

/////////// TESTS

function runTest(items) {
    const packedItems = packBackpack(items);
    console.log('Final cost:', packedItems[0]);
    packedItems.slice(1).map((itemIdx) => console.log(items[itemIdx] ? items[itemIdx].name : ''));
}

const items = [
    new Item("recorder", 4, 3000),
    new Item("notebok", 3, 2000),
    new Item("guitar", 1, 1500),
]

runTest(items);

items.push(new Item("iPhone", 1, 2000));

runTest(items);
