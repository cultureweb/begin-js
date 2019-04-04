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
    let userInput = document.getElementById("user_input").value;
    var filter = [];  
    // console.log(userInput);

    for (var i = 0; i < jsonDatas.length; i++) {
        var jsonData = jsonDatas[i];
        //  console.log(jsonData); 
        if (jsonData.type === userInput || jsonData.typeFr === userInput) {
            if (document.getElementById("myCheck").checked && jsonData.quantity > 0) {
                //onsole.log(jsonData);
                filter.push(jsonData);
            }
            else if (!document.getElementById("myCheck").checked) {
                filter.push(jsonData);
            }
        }
    }
     // return filter;
    return sortBy(filter);
}

function sortBy(option) {
    var opt = document.getElementById("mySelect").value;
    console.log(opt);
    //conditions
    switch(opt){
        case "ascNum" : 
        option.sort(function (a, b) {
            return a.price - b.price;
        });
        console.log(option);
        break;

        case "descNum" : 
        option.sort(function (a, b) {
            return b.price - a.price;
        });
        console.log(option);
        break;

        case "abc" : 
        option.sort(function(a,b){
            return a.name.localeCompare(b.name) ;
        });
        console.log(option);
        break;

        case "zyx" : 
        option.sort(function(a,b){
            return b.name.localeCompare(a.name) ;
        });
        console.log(option);
        break;
    }
}
function addNewObject() {
    var objectName = document.getElementById("objectName").value;
    var objectType = document.getElementById("objectType").value;
    var objectDescription = document.getElementById("objectDescription").value;
    var objectPrice = document.getElementById("objectPrice").value;
    var objectQuantity = document.getElementById("objectQuantity").value;

    console.log(objectName);

    let newObject = { //créer un nouvel objet
       "name" : objectName,
		"type" : objectType,
		"description" : objectDescription,
		"price" : objectPrice,
		"quantity" : objectQuantity
    }
    jsonDatas.push(newObject);

}//end function addNewObject
addFrenchType();


//sortBy();
//console.log(jsonDatas);

