function getpage(page, lan) {
    fetch("sites.json").then(response => {
        return response.json()
    }).then(response => {

        //Her skal vi arbejde med json objektet
        for (let key of response) {
            if (key.pagename === page) {
                for (let item of key.content) {
                    if (item.lan === "dk") {
                        document.getElementById("nav").innerHTML = "";
                        //document.getElementById("title").innerText = item.title;
                        document.getElementById("content").innerHTML = item.content;
                    }
                }
            }
        }
    }).catch(error => {
       console.log(error);
    });
}

getpage("index", "dk");

function getNav(lan) {
    fetch("sites.json").then(response => {
        return response.json()
    }).then(response => {

        //Her skal vi arbejde med json objektet

        let html ="<ul>";

        for (let key of response) {
            for (let item of key.content) {
                if (item.lan === lan) {
                    html += "<li><a onclick=\"getpage('" + key.pagename + "','" + item.lan + "')\">" + item.title + "</a></li>";

                }
            }

        }

        html += "</ul>";
        document.getElementById("nav").innerHTML = html;

    }).catch(error => {
        console.log(error);
    });
}

getNav("dk");
