// Function to toggle the display of submenus
function toggleSubMenu(menuId) {
    var submenu = document.getElementById(menuId);
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

// Function to display browser information
function displayBrowserInfo() {
    var info = 'Browser Details:<br>';
    info += 'Navigator App Name: ' + navigator.appName + '<br>';
    info += 'Navigator Product: ' + navigator.product + '<br>';
    info += 'Navigator App Version: ' + navigator.appVersion + '<br>';
    info += 'Navigator User Agent: ' + navigator.userAgent + '<br>';
    info += 'Navigator Platform: ' + navigator.platform + '<br>';
    info += 'Navigator Language: ' + navigator.language + '<br>';
    info += 'Window Inner Height: ' + window.innerHeight + '<br>';
    info += 'Window Inner Width: ' + window.innerWidth + '<br>';
    info += 'Screen Width: ' + screen.width + '<br>';
    info += 'Screen Height: ' + screen.height + '<br>';
    info += 'Screen Available Width: ' + screen.availWidth + '<br>';
    info += 'Screen Available Height: ' + screen.availHeight + '<br>';
    info += 'Screen Color Depth: ' + screen.colorDepth + '<br>';
    info += 'Screen Pixel Depth: ' + screen.pixelDepth + '<br>';
    info += 'Location Href: ' + location.href + '<br>';
    info += 'Location Hostname: ' + location.hostname + '<br>';
    info += 'Location Pathname: ' + location.pathname + '<br>';
    info += 'Location Protocol: ' + location.protocol + '<br>';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            info += 'Geolocation Latitude: ' + position.coords.latitude + '<br>';
            info += 'Geolocation Longitude: ' + position.coords.longitude + '<br>';
            document.getElementById('browserInfo').innerHTML = info;
        });
    } else {
        info += 'Geolocation is not supported by this browser.';
        document.getElementById('browserInfo').innerHTML = info;
    }
}
