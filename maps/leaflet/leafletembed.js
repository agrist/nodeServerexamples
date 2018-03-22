var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

function initmap() {
	// set up the map
	map = new L.Map('map');

	// create the tile layer with correct attribution
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 6, maxZoom: 12, attribution: osmAttrib});

	// start the map in Ventspils - 57.38944, 21.56056
  var latlng = L.latLng(57.4, 21.6);


  var imageUrl = '../maska_pludi_cropped.tif', imageBounds = [[57.3322, 21.226], [57.3739, 21.275]];
//  L.imageOverlay(imageUrl, imageBounds).addTo(map);

	map.setView(latlng,31);
	map.addLayer(osm);
	map.addLayer(new L.imageOverlay(imageUrl, imageBounds));
//  var layer = L.leafletGeotiff('maska_pludi.tif').addTo(map);
}

window.onload = function(){
  initmap();
}
//object.onload = function(){myScript};
/*The general idea is that window.onload fires when the document's window is ready for presentation and document.onload fires when the DOM tree (built from the markup code within the document) is completed.*/
