Set.prototype.toString = function() {
    var res = '';
    this.forEach((item) => res += item + ' ');
    return res;
}

Set.prototype.intersection = function(set) {
    const res = new Set();
    this.forEach((item) => { 
        if (set.has(item)) {
            res.add(item);
        }
    });
    return res;
}

Set.prototype.difference = function(set) {
    const res = new Set();
    this.forEach((item) => { 
        if (!set.has(item)) {
            res.add(item);
        }
    });
    return res;
}

//============================================================================================

var st_needed = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

const stations = {};
stations['kone'] = new Set(['id', 'nv', 'ut']);
stations['ktwo'] = new Set(['wa', 'id', 'mt']);
stations['kthree'] = new Set(['or', 'nv', 'ca']);
stations['kfour'] = new Set(['nv', 'ut']);
stations['kfive'] = new Set(['ca', 'az']);

const final_stations = new Set();

while (st_needed.size > 0) {
  var best_station = null;
  var st_covered = new Set();

  for (const station in stations) {
    const st_for_station = stations[station];
    const covered = st_for_station.intersection(st_needed);

    if (covered.size > st_covered.size) {
      best_station = station;
      st_covered = covered;
    }
  }

  st_needed = st_needed.difference(st_covered);
  final_stations.add(best_station);
}

console.log("final_stations: " + final_stations);
