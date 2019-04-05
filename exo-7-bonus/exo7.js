//console.log("exo-7");

//console.log(jsonDatas);
function addFrenchType() {
    var frenchType;
    jsonDatas.forEach(function (data) {
        for (let type in jsonDatasTypeTranslate) {
            if (type === data.type) {
                frenchType = jsonDatasTypeTranslate[type];
                data.typeFr = frenchType;//crée la propriété typeFr et assigne la variable frenchType
            }
        }
        //console.log(frenchType);    
    });
}//end function addFrenchType

function showProductsInput() {
    var tbl = document.getElementById('table');
    var tbodys = tbl.getElementsByTagName('tbody');
    var tbody = tbodys[0];
    console.log(tbody);
    //console.log(jsonDatas.type);
    jsonDatas.forEach(function (curentObject) {
        //console.log(curentObject);     
        var tr = document.createElement('tr');

        var td = document.createElement('td');
        var txt = document.createTextNode(curentObject.type);
        td.appendChild(txt);
        tr.appendChild(td);
        curentObject.items.forEach(function (item) {
            for (var info in item) {
                if (info != 'contact') {
                    //console.log(info);
                    var td = document.createElement('td');
                    var txt = document.createTextNode(item[info]);
                    td.appendChild(txt);
                    tr.appendChild(td);
                }
            }
            for (var infos in item.contact) {//récupere mes clef
                //console.log(infos);
                var td = document.createElement('td');
                var txt = document.createTextNode(item.contact[infos]);// je vais chercher les valeurs de ma clé.
                td.appendChild(txt);
                tr.appendChild(td);
            }
        });
        tbody.appendChild(tr);
    });
}


addFrenchType();
showProductsInput();