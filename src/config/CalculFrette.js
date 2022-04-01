export default function CalculFrette(diapason, nbFrettes) {
  var diap = diapason;
  var resJson = [];
  for (var i = 0; i < nbFrettes; i += 1) {
    var fret = diap / 17.817154;
    var json = { numerofrette: i + 1, distanceEntreFrettes: fret };
    diap -= fret;
    json.distanceSilletFrette = diapason - diap;
    json.distanceChevaletFrette = diap;
    resJson.push(json);
  }
  return resJson;
}
