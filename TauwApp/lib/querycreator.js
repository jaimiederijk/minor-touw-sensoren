var queryCreator = {
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
  }
}



module.exports = {queryCreator: queryCreator};
