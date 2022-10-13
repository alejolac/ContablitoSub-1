document.addEventListener("DOMContentLoaded", () => {
    if(productsArray.products == undefined){
        products = productsArray
    }else{
        products = productsArray.products
    }
    

    for(prod of products){
        const {id, name, description, stock, cost, currency} = prod
        showProducts(id, name, description, stock, cost, currency)
    }

});

function showProducts(id, name, description, stock, cost, currency){
    stockTable.innerHTML += `
    <tr>
        <th scope="row">${id}</th>
        <td>${name}</td>
        <td>${description}</td>
        <td>${stock}</td>
        <td class='text-center' style="width: 130px">${cost}</td>
        <td>${currency}</td>
    </tr>
    `
};

addStock.addEventListener('click', () => {
    prodToAdd = {};
    const prodFunc = {
        "id": prodToAdd['id'] = products.length + 1,
        "name": (value) => { prodToAdd['name'] =  value} ,
        "description": (value) => { prodToAdd['description'] =  value},
        "tags": (value) => { prodToAdd['tags'] =  value},
        'cost': (value) => { prodToAdd['cost'] =  value},
        'stock': (value) => { prodToAdd['stock'] =  value},
        'currency': (value) => { prodToAdd['currency'] =  value.toUpperCase()},
        'margin': (value) => { prodToAdd['margin'] =  value},
    };
    
    document.querySelectorAll('input,select').forEach(input => {
        prodFunc[input.id](input.value)
    });
    products.push(prodToAdd);

    localStorage.setItem('productsArray', JSON.stringify(products));
    stockTable.innerHTML = "";
    for(prod of products){
        const {id, name, description, stock, cost, currency} = prod
        showProducts(id, name, description, stock, cost, currency)
    };

    document.querySelectorAll('input').forEach(input => {
        input.value = ""
    });
})