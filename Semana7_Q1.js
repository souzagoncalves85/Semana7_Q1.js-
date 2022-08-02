function createlist(valor,key='text'){
    let itens=document.querySelector("#itens")
    for(let count=1;count<=valor;count+=1){
        let li=document.createElement("li")
        li.textContent=key+count
        itens.appendChild(li)
    }

}

createlist(10,'item')






