//  http://www.json-generator.com/
//
// below script is for website http://www.json-generator.com/
//




[
  '{{repeat(5, 7)}}',
  {

    name: function (tags) {
      var name = ['XRF', 'bananameter', 'berr','deeltjesversneller', 'star', 'b-22','jan','hydrofoon','TRC'];
      return name[tags.integer(0, name.length - 1)];
    },
    sector: function (tags) {
      var sector = ['Landelijk','Stedelijk','Industrie'];
      return sector[tags.integer(0, sector.length - 1)];
    },
    branch: function (tags) {
      var branch = ["Bodem", "Afval", "Grondstoffen", "Ecologie", "Water", "Inspectie", "Waterbodem", "Infrastructuur"];
      return branch[tags.integer(0, branch.length - 1)];
    },
    tags: function (t) {
      var tags = ["Chemisch", "3D model", "Volume bepaling", "Fysisch"];
      return tags[t.integer(0, tags.length - 1)];
    },
    level: function (tags) {
      var level = ["Bodemlucht", "Maaiveld", "Textruur", "Lutum", "Organisch stof", "Metalen", "PAK", "PCB", "Bodemvreemde materialen", "Onderscheidt in chemische verbindingen"];
      return level[tags.integer(0, level.length - 1)];
    },
    scale: function (tags) {
      var scale = ["Handmatig", "Lokaal", "Regionaal", "Provinciaal", "Landelijk", "Internationaal", "n.v.t"];
      return scale[tags.integer(0, scale.length - 1)];
    },

    resolution: function (tags) {
      var resolution = [0,1,2,3,4,5, "n.v.t"];
      return resolution[tags.integer(0, resolution.length - 1)];
    },
    accuracy: function (tags) {
      var accuracy = ["Niet nauwkeurig", "Matig nauwkeurig", "Redelijk nauwkeurig", "Zeer nauwkeurig"];
      return accuracy[tags.integer(0, accuracy.length - 1)];
    },
    interval: function (tags) {
      var interval = ["Jaren","Weken", "Uren", "Direct"];
      return interval[tags.integer(0, interval.length - 1)];
    },
    duration: function (tags) {
      var duration = ["Jaren","Weken", "Uren", "Minuten"];
      return duration[tags.integer(0, duration.length - 1)];
    },
    innovation: function (tags) {
      var innovation = ["Nog weinig bewijs", "Alleen wetenschappelijk bewezig", "Reeds in enkele projecten toegepast", "Bewezen techniek"];
      return innovation[tags.integer(0, innovation.length - 1)];
    },
    costs: function (tags) {
      var costs = ["Gratis tot goedkoop", "?", "Zeer duur"];
      return costs[tags.integer(0, costs.length - 1)];
    },
    filters: function (tags) {
      var filters =  ["scale", "resolution", "accuracy", "interval", "duration", "innovation"];
      return filters[tags.integer(0, filters.length - 1)];
    }
  }
]
