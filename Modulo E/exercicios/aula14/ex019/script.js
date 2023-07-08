function calcular(){
    let num = window.document.getElementById('tabuada');
    let tab = window.document.getElementById('seltab');

    for(cont = num; cont <= num; cont++){
        let item = document.createElement('option');
        item.text = `${num} x ${con} = ${num*cont}`;
        tab.appendChild(item);
        // res.innerHTML += `${Number(tab.value)} x ${Number(cont.value)} = ${r}`;
    }
}