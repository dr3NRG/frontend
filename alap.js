fetch("http://admin.dszcbaross.tk:20001/termektipus")
.then(x => x.json())
.then(y => megjelenit(y));

function megjelenit(tomb){
    console.log(tomb)
    let sz=''
    for (let elem of tomb) {
        sz+='<option>'
        sz+=elem.termektipus_nev
        sz+='</option>'
    }
    document.getElementById("lenyilo").innerHTML=sz
}

fetch("http://admin.dszcbaross.tk:20001/termek")
.then(x => x.json())
.then(y => megjelenit_termek(y));

function megjelenit_termek(tomb){
    console.log(tomb)

    let sz=''
    for (let elem of tomb) {
        sz+='<div class="col-sm-4">'
        sz+='<div class="arnyekolt">'
        sz+=elem.termek_nev
        sz+='</div>'
       sz+='</div>'
    }
    document.getElementById("sorok").innerHTML=sz
}

fetch("http://admin.dszcbaross.tk:20001/kettabla")
.then(x => x.json())
.then(y => megjelenit_kettabla(y));

function megjelenit_kettabla(tomb){
    console.log(tomb)

    let sz=''
    for (let elem of tomb) {
        sz+='<tr>'
        sz+='<td>'+elem.termek_nev+'</td>'
        sz+='<td>'+elem.termek_ar+'</td>'
        sz+='<td>'+elem.termektipus_nev+'</td>'
        sz+='</tr>'
    }
    document.getElementById("torzs").innerHTML=sz
}