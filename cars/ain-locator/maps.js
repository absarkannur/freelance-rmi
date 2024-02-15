var pyrmont;

if( window.lat && window.lng ){
    
    pyrmont = {lat: window.lat, lng: window.lng};

} else {
    
    if ( navigator.geolocation ) {
        
        navigator.geolocation.getCurrentPosition( function( position ){

            pyrmont = {lat: position.coords.latitude, lng: position.coords.longitude };
            
            window.lat = position.coords.latitude;
            window.lng = position.coords.longitude;

        });

    } else { 

        x.innerHTML = "Geolocation is not supported by this browser.";
    
    }

}

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 11,
  });
}

var marker;

function getPlace(){

    var stores = [
		{
			name: 'Guess',
			location: {lat: 24.184944850585275, lng: 55.75533446931024},
		}
	];

    var latlng = new google.maps.LatLng( 24.184944850585275, 55.75533446931024 );
    map.setCenter(latlng);

    var myLatLng = { lat: window.lat, lng: window.lng };

    if (marker){
        marker.setMap(null);
    }

    marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
    });

    stores.forEach(function(store){
		markStore(store);
	});

}


function markStore(storeInfo){

    const image = "https://digitalventure1.com/pic_store/peugeot.png";

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: storeInfo.location,
        title: storeInfo.name,
        icon: image,
    });

    // show store info when marker is clicked
    marker.addListener('click', function(){
        showStoreInfo(storeInfo);
    });
}

function showStoreInfo(storeInfo){
    var info_div = document.getElementById('info_div');
    info_div.innerHTML = 'Store name: '
        + storeInfo.name
        + '<br>Hours: ' + storeInfo.hours;
}