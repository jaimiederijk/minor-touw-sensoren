//  http://www.json-generator.com/
//
// below script is for website http://www.json-generator.com/
//




[
  '{{repeat(250, 250)}}',
  {

    name: function (tags) {
      var name = ['XRF', 'bananameter', 'BAR','deeltjesversneller', 'star', 'b-22','THC','Hydrofoon','TRC','Tot meter', 'Drukmeter', 'Laser','Lab onderzoek', 'Drone', 'Sateliet','Potmeter','Oscilloscoop','Anemometer','Spectrumanalysator', 'telescoop'];
      return name[tags.integer(0, name.length - 1)];
    },
    image: function (tags) {
      var image = [
        'https://asset.conrad.com/media10/isa/160267/c1/-/nl/102201_BB_00_FB/testo-417-fluegelrad-anemometer-wind-anemometer-03-tot-20-ms-voor-gecontroleerde-woningventilatie-luchtaan-en-afvoe.jpg?x=520&y=520',
        'http://www.testandmeasurementtips.com/wp-content/uploads/2011/05/analog-oscilloscope.jpg',
        'https://www.polymersolutions.com/blog/wp-content/uploads/2014/05/SCiO-In-Hand.png',
        'https://www.aerialmediapros.com/wp-content/uploads/2015/07/Map-Scout-Pro-DJI-Matrice-100-Dronedeploy-Drone-Precision-Construction-Inspection-mapping-Drone-UAV-best-main-4-e1491336663414.png',
        'http://esero_production.67a9f12c562e4385958ef41a7bba215b.objectstore.eu/system/insets/images/000/002/911/original/les-35-telescoop.jpg?1342467789',
        'http://deredactie.be/polopoly_fs/1.1659857!image/2430941114.jpg_gen/derivatives/landscape670/2430941114.jpg',
        'http://www.centralauto.be/uploads/assets/96035/1494542709316-35023624_resize-920x920.jpg',
        'https://ae01.alicdn.com/kf/HTB1WInlQXXXXXXhXVXXq6xXFXXXO/ZF-25-11A-and-14A-font-b-Hydrophone-b-font-used-in-OBC-can-be-customed.jpg',
        'http://surveyequipment.com/media/catalog/product/cache/1/image/903be06a881aa18fc50d3dc96e8b9fba/l/e/leica-disto-x310-790656.jpg?1496774957',
        'http://www.pngall.com/wp-content/uploads/2016/04/Satellite-PNG-File.png',
        'https://www.snoesjes.com/dynamic/media/34/images/Doopsuiker/Reageerbuisje%20voor%20bedankjes.jpg'
      ];
      return image[tags.integer(0, image.length - 1)];
    },
    sector: function (tags) {
      var sector = ['Landelijk','Stedelijk','Industrie'];
      return sector[tags.integer(0, sector.length - 1)];
    },
    branch: ['{{repeat(1,2)}}',
      function (tags) {
      var branch = ["Bodem", "Afval", "Grondstoffen", "Ecologie", "Water", "Inspectie", "Waterbodem", "Infrastructuur"];
      return branch[tags.integer(0, branch.length - 1)];
    }],
    tags: [ '{{repeat(1,3)}}',
      function (t) {
      var tags = ["Chemisch", "3D model", "Volume bepaling", "Fysisch"];
      return tags[t.integer(0, tags.length - 1)];
    }],
    level: [ '{{repeat(1,3)}}',
     function (tags) {
      var level = ["Bodemlucht", "Maaiveld", "Textruur", "Lutum", "Organisch stof", "Metalen", "PAK", "PCB", "Bodemvreemde materialen", "Onderscheidt in chemische verbindingen"];
      return level[tags.integer(0, level.length - 1)];
     }
    ],
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
    summary_big: '{{lorem(1, "paragraphs")}}',
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
