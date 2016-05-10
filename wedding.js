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
	function initMap() {
	  map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 8
	  });
	}
	
var locationInfo = navigator.geolocation.getCurrentPosition(onSuccess, onError);

function onSuccess(locationObj){
  console.log(locationObj);
  var latitude=locationObj.coords.latitude;
  console.log(latitude);
  
};

function onError(error){
  console.log(error);
  
};








