

var names = document.getElementById('ProductName');
var price = document.getElementById('ProductPrice');
var des = document.getElementById('ProductDes');
var cat = document.getElementById('ProductCat');
var img = document.getElementById('ProductImg');
var search = document.getElementById('ProductSearch');

var productContainer;

if(localStorage.getItem("product")==null)
    {
        productContainer = [];
    }

    else{
        productContainer= JSON.parse(localStorage.getItem("product"));
        displayData(productContainer);
    }


function addproduct()
{
    var product={
        code:names.value,
        price:price.value,
        cat:des.value,
        des:cat.value,
        img:`images/${ProductImg.files[0].name}`
    };

    productContainer.push(product);

    localStorage.setItem("product" , JSON.stringify(productContainer));



    displayData(productContainer);
    clearform();
};

function clearform()
{
    names.value=null;
    price.value=null;
    des.value=null;
    cat.value=null;
    img.value=null;
}

function displayData(arr)
{

    

    var cont = '';
    for(var i = 0 ; i < arr.length ; i++)
        {
            cont += `<div class="col-md-3">
            <div class="card">
                <img src="${arr[i].img}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="fs-5">Product Name : <span class="fs-6">${arr[i].code}</span></h5>
                  <h5 class="fs-5">Product Price : <span class="fs-6">${arr[i].price}</span></h5>
                  <h5 class="fs-5">Product Category : <span class="fs-6">${arr[i].cat}</span></h5>
                  <h5 class="fs-5">Product Description : <span class="fs-6">${arr[i].des}</span></h5>
                  <button onclick="deleteproduct(${i})" class="delbutton">Delete</button>
                  <button class="upbutton">Update</button>
                </div>
            </div>
        </div>`
        };
        document.getElementById('demo').innerHTML=cont;
}

function deleteproduct(index)
{
    
    productContainer.splice(index,1);
    displayData(productContainer);
    localStorage.setItem("product" , JSON.stringify(productContainer));
}

function searchproduct()
{
    x = search.value;
    var searchContainer = []
    for( var i = 0 ; i <productContainer.length ; i++)
        {
            if(productContainer[i].code.toLowerCase().includes(x.toLowerCase())==true)
                {
                    searchContainer.push(productContainer[i]);
                    displayData(searchContainer);
                }
        }
        
}