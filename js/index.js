

var names = document.getElementById('ProductName');
var price = document.getElementById('ProductPrice');
var des = document.getElementById('ProductDes');
var cat = document.getElementById('ProductCat');
var img = document.getElementById('ProductImg');
var search = document.getElementById('ProductSearch');
var addBtn = document.getElementById('addBtn')
var updateBtn = document.getElementById('updateBtn')

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
        img:`images/${ProductImg.files[0]?.name}`
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
                  <button onclick="setFormForUpdate(${i})" class="upbutton">Update</button>
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


var upindex; //global variable for setFormForUpdate & updateProduct
function setFormForUpdate(updatedindex)
{
    upindex = updatedindex
    addBtn.classList.add('d-none');
    updateBtn.classList.remove('d-none');
    names.value = productContainer[updatedindex].code;
    price.value = productContainer[updatedindex].price;
    cat.value = productContainer[updatedindex].cat;
    des.value = productContainer[updatedindex].des;
}


function updateProduct()
{
    productContainer[upindex].code = names.value;
    productContainer[upindex].price = price.value;
    productContainer[upindex].cat = cat.value;
    productContainer[upindex].des = des.value;
    productContainer[upindex].img = `images/${ProductImg.files[0]?.name}`;

    displayData(productContainer);
    addBtn.classList.remove('d-none');
    updateBtn.classList.add('d-none');
    clearform();
    localStorage.setItem("product" , JSON.stringify(productContainer));
}



function validationProduct(element)
{

    var regex = {
        //خلي اسماء الاوبجكتس نفس اسماء الايدي

        ProductName:/[A-Z][a-z]{3,8}$/ ,

        ProductPrice:/[1-9][0-9][0-9]/,

        ProductDes:/.{3,9}/,

        ProductCat: /(Tv|Ios|Android|Laptop)/
    };


    if(regex[element.id].test(element.value))
        {
            console.log('Matched');
            element.classList.add('is-valid');
            element.classList.remove('is-invalid');
            element.nextElementSibling.classList.replace('d-block','d-none');
        }
        else
        {
            console.log('Not Matched');
            element.classList.add('is-invalid');
            element.classList.remove('is-valid');

            element.nextElementSibling.classList.replace('d-none','d-block');
        }

}