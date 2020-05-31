fetch("https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall").then(response => response.json()).then(response => listOfItems(response))
function walldisplay(n){
    let list1 = document.getElementById("list");
    n.forEach(items => {
        let submititem=document.createElement("div");
        submititem.innerText= items;
        submititem.classList.add("mystyle");
        list1.appendChild(submititem);
    })
}

function inputFunction(name){
   fetch("https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall",{
       method:'POST',
       body: JSON.stringify(message:name.value})
}).then(function (response) {
    if (response.status == 200){
        console.log(response)
    }else{console.log("Oh No!")}
    })
    return false;
}

   
