!function(d,s,id){
	var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
	if(!d.getElementById(id)){js=d.createElement(s);
js.id=id;js.src=p+"://platform.twitter.com/widgets.js";
fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");


(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
  fjs.parentNode.insertBefore(js, fjs);
}}(document, 'script', 'facebook-jssdk'));
	var map;
	var marker;
	var marker2;
	var marker3;
	var BedBathPos = {lat:38.9288751, lng: -94.7838647};
	var IkeaPos = {lat: 39.019538,lng: -94.7608667};
	var TargetPos ={lat: 38.9288908,lng:-94.7488442};

	function initMap(position) {
	var latlon = position.coords.latitude + "," + position.coords.longitude;
	  map = new google.maps.Map(document.getElementById('map'), {
		center: latlon,
		zoom: 9
		});
	 marker = new google.maps.Marker({
		position: BedBathPos,
		map: map,
		title:'Hello World'
  });
	marker2 = new google.maps.Marker({
		position: IkeaPos,
		map: map,
		title:'Hello World'
  });
      	marker3 = new google.maps.Marker({
		position: TargetPos,
		map: map,
		title:'Hello World'
  });
}
	function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 38.9168474, lng: -94.824447},
	zoom: 9
	});

    var contentString1 = '<div id="content">'+
      '<h1><a href="http://www.bedbathandbeyond.com/store/page/Registry">Bed Bath and Beyond</a><h1> '
      '</div>';

  var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
  });
  
	var marker = new google.maps.Marker({
    position: BedBathPos,
    map: map,
	title:'Bed Bath and Beyond'
	});
	
	  marker.addListener('click', function() {
    infowindow1.open(map, marker);
  });
	    var contentString2 = '<div id="content">'+
      '<h1><a href="http://info.ikea-usa.com/giftregistry/">Ikea</a></h1> '
      '</div>';

  var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
  });
  
  	marker2 = new google.maps.Marker({
		position: IkeaPos,
		map: map,
		title:'Ikea'
  });
    marker2.addListener('click', function() {
    infowindow2.open(map, marker2);
  });

    var contentString = '<div id="content">'+
      '<h1><a href="http://www.target.com/registry/wedding/find">Target</a><h1> '
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
    	marker3 = new google.maps.Marker({
		position: TargetPos,
		map: map,
		title:'Target'
  });
  marker3.addListener('click', function() {
    infowindow.open(map, marker3);
  });
}
initMap();




