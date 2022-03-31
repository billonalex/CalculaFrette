export default function CalculeFrette(diapason, nbFrettes) {
  var diap = diapason;
  var res = [];
  for (var i = 0; i < nbFrettes; i += 1) {
    var fret = diap / 17.817154;
    var temp = [i + 1, fret];
    diap -= fret;
    temp.push(diapason - diap);
    temp.push(diap);
    res.push(temp);
  }

  return res;
}
