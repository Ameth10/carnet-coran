// Fabrique index.html (une seule page, utilisable hors ligne) à partir de source/carnet.html
const fs=require('fs'),path=require('path');
const dir=__dirname;
const src=fs.readFileSync(path.join(dir,'source/carnet.html'),'utf8');
const lib=fs.readFileSync(path.join(dir,'vendor/jspdf.umd.min.js'),'utf8').replace(/<\/script/gi,'<\/script');
const tag='<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>';
if(!src.includes(tag))throw new Error('balise jsPDF introuvable dans source/carnet.html');
const body=src.replace(tag,()=>'<script>\n'+lib+'\n</script>');
const head=[
  '<meta charset="utf-8">',
  '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">',
  '<meta name="theme-color" content="#2f5240">',
  '<meta name="apple-mobile-web-app-capable" content="yes">',
  '<meta name="mobile-web-app-capable" content="yes">',
  '<meta name="apple-mobile-web-app-title" content="Carnet Coran">',
  '<meta name="apple-mobile-web-app-status-bar-style" content="default">',
  '<link rel="manifest" href="manifest.webmanifest">',
  '<link rel="apple-touch-icon" href="icon-180.png">',
  '<link rel="icon" type="image/png" href="icon-180.png">'
].join('\n');
const out='<!doctype html>\n<html lang="fr">\n<head>\n'+head+'\n</head>\n<body>\n'+body+'\n</body>\n</html>\n';
fs.writeFileSync(path.join(dir,'index.html'),out);
console.log('index.html :',Math.round(out.length/1024),'Ko');
