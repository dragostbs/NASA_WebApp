function theLongitude() {
    return longitude = document.querySelector('.inputLongitude').value;
}

function theLatitude() {
    return latitude = document.querySelector('.inputLatitude').value;
}

function theDistance() {
    return distance = document.querySelector('.inputDistance').value;
}

function theDate() {
    return longitude = document.querySelector('.inputDate').value;
}

async function getData() {
    const mykey = "fhqElkLsyLFBQqzglCKKDn1DnW76AVBgS2WTC0Vf"
    const response = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=` + theLongitude() + `&lat=` + theLatitude() + `+&date=` + theDate() + `&&dim=` + theDistance() + `&api_key=${mykey}`);
    const theData = await response.json();

    console.log(theData);

    if (theData.msg == 'No imagery for specified date.') {
        window.alert('No Image found for specified Date !');
    } else {
        const image = document.querySelector('.pixelImg');
        const imageUrl = Object.values(theData.url).join("");
        image.innerHTML = `<img style="width:50%;" src="${imageUrl}" alt="Erorr" />`;
    }
}