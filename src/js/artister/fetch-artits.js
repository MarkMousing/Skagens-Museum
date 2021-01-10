function getArtists(page, artist) {
    fetch("src/js/artister/page.json").then(response => {
        return response.json()
    }).then(response => {

        for (let key of response) {
            if (key.pagename === page) {
                for(let item of key.content) {
                    if(item.artist === artist) {
                        document.getElementById("jsonMain").innerHTML = item.content;
                    }
                }
            }
        }
    }).catch(error => {
        console.error(error);
    });
}

getArtists("artists", "artists");


function getPerson(artist) {
    fetch("src/js/artister/page.json").then(response => {
        return response.json()
    }).then(response => {

        for (let key of response) {
            for (let item of key.content) {
                if(item.artist === artist) {
                    document.getElementById("jsonMain").innerHTML = item.content;
                }
            }
        }
    }).catch(error => {
        console.error(error);
    });
}

function showPerson(artist) {
    document.querySelector("main").scrollTo(0,0);
    getPerson(artist);
}