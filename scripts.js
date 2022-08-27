const api = 'a89a7a5b22c0cf17ff5fecf41412c4d0';

window.addEventListener('load',() => {
    let long;
    let lat;
    // Accessing Geolocation of User
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
        });
    }
});

