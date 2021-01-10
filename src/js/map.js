var map;
var styles = {
  hide: [{
    featureType: 'poi',
    stylers: [{visibility: 'off'}]
  }]
};

function initMap() {
  var skagen = {lat: 57.72478229999999, lng: 10.597170699999992};
  var anchor = {lat: 57.726137, lng: 10.5947053};
  var drachmann = {lat: 57.718875, lng: 10.5756323};


  map = new google.maps.Map(
  document.getElementById('map'), {
    zoom: 16,
    center: skagen
  });

  map.setOptions({
    styles: styles['hide'],
    mapTypeControl: false,
    streetViewControl: false
  });

  var skagenMarker = new google.maps.Marker({
    position: skagen,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Skagens museum',
    icon: {
      url: "src/images/paint/skagen.svg",
    }
  })

  var anchorMarker = new google.maps.Marker({
    position: anchor,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Anchors hus',
    icon: {
      url: "src/images/paint/anchor.svg",
    }
  })

  var drachmannMarker = new google.maps.Marker({
    position: drachmann,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Drachmanns hus',
    icon: {
      url: "src/images/paint/drachmann.svg",
    }
  })
}

function skagen() {
  map.setCenter(new google.maps.LatLng(57.72478229999999,10.597170699999992));
}

function anchor() {
  map.setCenter(new google.maps.LatLng(57.726137,10.5947053));
}

function drachmann() {
  map.setCenter(new google.maps.LatLng(57.718875,10.5756323));
}
