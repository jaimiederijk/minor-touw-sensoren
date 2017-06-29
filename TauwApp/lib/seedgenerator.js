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
    image: function (tags) {
      var image = ['https://www.olympus-ims.com/data/Image/appnotes/xrf_delta_right_product_shot.JPG?rev=2702','https://www.polymersolutions.com/blog/wp-content/uploads/2014/05/SCiO-In-Hand.png','https://www.aerialmediapros.com/wp-content/uploads/2015/07/Map-Scout-Pro-DJI-Matrice-100-Dronedeploy-Drone-Precision-Construction-Inspection-mapping-Drone-UAV-best-main-4-e1491336663414.png'];
      return image[tags.integer(0, image.length - 1)];
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
    summary_small: function (tags) {
      var summary_small =  ["Can create a perfect 3D map of any town.", "resolution accuracy interval duration innovation"];
      return summary_small[tags.integer(0, summary_small.length - 1)];
    },
    summary_big: function (tags) {
      var summary_big =  ["Can create a perfect 3D map of any town.", "resolution accuracy interval duration innovation"];
      return summary_big[tags.integer(0, summary_big.length - 1)];
    },
    contactName: function (tags) {
      var contactName =  ["Jan", "Jesper"];
      return contactName[tags.integer(0, contactName.length - 1)];
    },
    contactPhone: function (tags) {
      var contactPhone =  ["000546454", "063433454455"];
      return contactPhone[tags.integer(0, contactPhone.length - 1)];
    },
    contactMail: function (tags) {
      var contactMail =  ["email@nl", "email@com"];
      return contactMail[tags.integer(0, contactMail.length - 1)];
    },
    contactPhoto: function (tags) {
      var contactPhoto =  ["https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/005/0ae/0b1/0ae28b8.jpg", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/005/0ae/0b1/0ae28b8.jpg"];
      return contactPhoto[tags.integer(0, contactPhoto.length - 1)];
    },
    referenceTitle: function (tags) {
      var referenceTitle =  ["Project A", "Project B"];
      return referenceTitle[tags.integer(0, referenceTitle.length - 1)];
    },
    referenceSummary: function (tags) {
      var referenceSummary =  ["Project A In de huidige opzet bestaat het ", "Project B In de huidige opzet bestaat het "];
      return referenceSummary[tags.integer(0, referenceSummary.length - 1)];
    },
    referenceLink: function (tags) {
      var referenceLink =  ["Project A  ", "Project B "];
      return referenceLink[tags.integer(0, referenceLink.length - 1)];
    },
    referenceImage: function (tags) {
      var referenceImage =  ["http://www.terracarta.nl/bestanden/afbeelding/436-foto-grondradar.jpg", "http://www.terracarta.nl/bestanden/afbeelding/436-foto-grondradar.jpg "];
      return referenceImage[tags.integer(0, referenceImage.length - 1)];
    }
  }
]
