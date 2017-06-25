var utils = {
  orFilterQuery : function (currentquery, requestquery, possiblefilters) {
    var query = currentquery;
    var requestquery = requestquery;
    var filters = possiblefilters;

    for (var i = 0; i < filters.length; i++) {
      // if de filter ook echt is ingevuld
      if (requestquery[filters[i]] !== undefined) {
        // kijk of er meerdere checkboxes zijn geselecteerd
        if ( Array.isArray(requestquery[filters[i]]) ) {
          // als het geen number is
          if (isNaN(requestquery[filters[i]][0])) {
            query[filters[i]]={$in : requestquery[filters[i]]};
          // wel een number
          } else {
            var newArray = [];
            for (var t = 0; t < requestquery[filters[i]].length; t++) {
              newArray.push(Number(requestquery[filters[i]][t]));
            }
            query[filters[i]]={$in : newArray};
          }
        // geen array dus maar één checkbox
        } else {
          // not number
          if (isNaN(requestquery[filters[i]])) {
            query[filters[i]] = requestquery[filters[i]];
          } else {
            query[filters[i]] = Number(requestquery[filters[i]]);
          }

        }
      }
    }
    return query
  },
  filterBuilder : function (sensors, filtersubjects) {
    var sensors = sensors;
    var filterSub = filtersubjects;// ["accuracy","costs"]
    var filter = {};
    // what we want
    // {
    //   accuracy:[0,1,2,3,4],
    //  costs:[0,1,3]
    // }

    filterSub.forEach(function(subject) {
      filter[subject] = [];
    });
    for (var i = 0; i < sensors.length; i++) {
      for (var r = 0; r < filterSub.length; r++) {
        if (filter[filterSub[r]].indexOf(sensors[i][filterSub[r]])==-1 && sensors[i][filterSub[r]]!=="") {
          filter[filterSub[r]].push(sensors[i][filterSub[r]]);
        }

      }

    }
    filterSub.forEach(function(subject) {
      filter[subject].sort();
    });

    return filter;
  }
}



module.exports = {utils: utils};
