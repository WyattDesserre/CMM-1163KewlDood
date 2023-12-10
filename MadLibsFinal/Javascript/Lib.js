console.log("werk")



document.getElementById('output').innerHTML = "<p>" + rad + "</p>"


function write() {



    if (document.querySelector('input[name="radioBut"]:checked') != null) {
        rad = document.querySelector('input[name="radioBut"]:checked').value;
    } else {
        rad = "nada";
    } +console.log("it werk") + console.log(rad) + console.log(item)

}

    var item = document.getElementById('ite').value;
    var item = document.getElementById('part').value;
    var item = document.getElementById('activity1').value;
    var item = document.getElementById('crime').value;
    var item = document.getElementById('skill').value;
    var item = document.getElementById('club').value;
    var item = document.getElementById('adjective').value;
    var item = document.getElementById('describe').value;
    var item = document.getElementById('god').value;

    if(rad=="enemy"){
        document.getElementById('output').innerHTML = "<img class='img-fluid' src='images/enemy.jpg' alt='An Enemy'>"
    }else if(rad=="so"){
        document.getElementById('output').innerHTML = "<img class='img-fluid' src='images/friend.jpg' alt='More than a friend'>"
    }else if(rad=="mom"){
        document.getElementById('output').innerHTML = "<img class='img-fluid' src='images/moter.jpg' alt='Motherly figure'>"
    }else if(rad=="dad"){
        document.getElementById('output').innerHTML = "<img class='img-fluid' src='images/vader.jpg' alt='Father figure'>"
    }
document.getElementById('output').innerHTML += "<p>Hello " + rad + item + "</p>";