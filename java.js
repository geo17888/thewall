fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall').then(response => response.json()).then(response => wallDisplay(response))
function wallDisplay(n)
{
    let list1 = document.getElementById("list");
    n.forEach(items => {
        let submitItem = document.createElement("div");
        submitItem.classList.add("myStyle");
        submitItem.innerHTML += items;
        list1.appendChild(submitItem);
    });
}


function inputFunction(name){
   fetch("https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall",{
       method:'POST',
       body: JSON.stringify({message:name.value})
}).then(function (response) {
    if (response.status == 200){
        console.log(response)
    }else{console.log("Oh No!")}
    })
}

   
