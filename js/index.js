

var names = document.getElementById('ProductName');
var price = document.getElementById('ProductPrice');
var des = document.getElementById('ProductDes');
var cat = document.getElementById('ProductCat');
var img = document.getElementById('ProductImg');

var productContainer=[];




function addproduct()
{
    var product={
        code:names.value,
        price:price.value,
        cat:des.value,
        des:cat.value,
        img:img.value
    };

    productContainer.push(product);
    displayData()
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

function displayData()
{

    console.log(productContainer[0]);

    var cont = '';
    for(var i = 0 ; i < productContainer.length ; i++)
        {
            cont += `<div class="col-md-3">
            <div class="card">
                <img src="images/WhatsApp Image 2023-04-07 at 14.32.29.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="fs-5">Product Name : <span class="fs-6">${productContainer[i].code}</span></h5>
                  <h5 class="fs-5">Product Price : <span class="fs-6">${productContainer[i].price}</span></h5>
                  <h5 class="fs-5">Product Category : <span class="fs-6">${productContainer[i].cat}</span></h5>
                  <h5 class="fs-5">Product Description : <span class="fs-6">${productContainer[i].des}</span></h5>
                </div>
            </div>
        </div>`
        }
        document.getElementById('demo').innerHTML=cont;
}