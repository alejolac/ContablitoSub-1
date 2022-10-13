let iva$ = undefined
let total = undefined

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    ivaCalc(data);
    document.getElementById('article-container').innerHTML += `
            <tr bgcolor="white" height="30">
                <td>${data.descripcion}</td>
                <td>${data.transaccion}</td>
                <td>${data.subtotal}</td>
                <td>${iva$}</td>
                <td>${total}</td>
            </tr>
    `
    let tltV = 0
    let tltC = 0
    let table = Array.from(document.getElementsByTagName('tr'))
    for(let i = 0; i < table.length; i++){
        if(table[i].cells[1].innerText == 'Compra'){
            tltC += parseInt(table[i].cells[4].innerText)
        }else if(table[i].cells[1].innerText == 'Venta'){
            tltV += parseInt(table[i].cells[4].innerText)
        }        
    }
    document.getElementById('totalV').innerHTML = "$ " + tltV
    document.getElementById('totalC').innerHTML = "$ " + tltC

  });

function ivaCalc(data){
    if(data.iva == 'm'){
        iva$ = parseInt(data.subtotal) * 0.1
    }else if(data.iva == 'b'){
        iva$ = parseInt(data.subtotal) * 0.22
    }else{
        iva$ = 0
    }
    total = parseInt(data.subtotal) + iva$
}
