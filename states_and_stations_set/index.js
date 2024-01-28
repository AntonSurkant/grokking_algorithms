const st_needed = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

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
    var st_for_station = stations[station];
    var covered = new Set();
    st_for_station.forEach((item) => {
      if (st_needed.has(item)) {
        covered.add(item);
      }
    });

    if (covered.size > st_covered.size) {
      best_station = station;
      st_covered = covered;
    }
  }

  final_stations.add(best_station);
  st_covered.forEach((item) => st_needed.delete(item));
}

final_stations.forEach((item) => console.log('+' + item));
