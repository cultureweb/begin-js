console.log("exo-7");
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
    console.clear();
    let userInput = document.getElementById("user_input").value;
    var filter = [];
    console.log("Données saisies par l'utilisateur : " + userInput);

    for (var i = 0; i < jsonDatas.length; i++) {
        var jsonData = jsonDatas[i];
        //console.log(jsonData); 
        if (jsonData.type === userInput || jsonData.typeFr === userInput) {
            // console.log(jsonData.items);
            jsonData.items.forEach(function (item) {
                //console.log(item);
                // console.log(item.items);
                if (document.getElementById("myCheck").checked && item.quantity > 0) {
                    //console.log(item)
                    filter.push(item);
                }
                else if (!document.getElementById("myCheck").checked) {
                    //console.log(item);
                    filter.push(item);
                }
            });
        }
        else if (userInput === '') {
            for (let i = 0; i < jsonData.items.length; i++) {
                console.log(jsonData.items[i]);
            }
        }
    }
    //console.log(filter);
    sortBy(filter);
    for (let i = 0; i < filter.length; i++) {
        console.log(filter[i]);
    }
}

function sortBy(option) {
    var opt = document.getElementById("mySelect").value;
    console.log("Choix de l'utilisateur : " + opt);
    //conditions
    switch (opt) {
        case "ascNum":
            option.sort(function (a, b) {
                return a.price - b.price;
            });
            //console.log(option);
            break;

        case "descNum":
            option.sort(function (a, b) {
                return b.price - a.price;
            });
            //console.log(option);
            break;

        case "abc":
            option.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
            //console.log(option);
            break;

        case "zyx":
            option.sort(function (a, b) {
                return b.name.localeCompare(a.name);
            });
            //console.log(option);
            break;
    }
    //return option;
}
function addNewObject() {
    var objectName = document.getElementById("objectName").value;
    var objectType = document.getElementById("objectType").value;
    var objectDescription = document.getElementById("objectDescription").value;
    var objectPrice = document.getElementById("objectPrice").value;
    var objectQuantity = document.getElementById("objectQuantity").value;

    console.log(objectName);

    let newObject = { //créer un nouvel objet
        "name": objectName,
        "type": objectType,
        "description": objectDescription,
        "price": objectPrice,
        "quantity": objectQuantity
    }
    jsonDatas.push(newObject);

}//end function addNewObject
function viewAllContacts() {
    jsonDatas.forEach(function (data) {
        //console.log(data);
        //console.log(data.items);
        let items = data.items;
        items.forEach(function (item) {
            console.log(item.contact);
        })


    });
}//enf wiewContact()
addFrenchType();
viewAllContacts() // affiche les contacts

