// array of items
var menu=[



    {
        id:1,
        name:"Buttermilk pancake",
        price:"$15.99",
        category:"Breakfast",
        image:"diner-double.jpg",
        content:"I am baby woke milkshake wolf bitter live edge"+
        "blue water hamcake freegen water mug"+
        "whatever cold pressure",


        id:2,
        name1:"Diner double",
        price1:"$ 51399",
        category1:"Lunch",
        image1:"godzilla-milkshake.jpg",
        content1:"I am baby woke milkshake wolf bitter live edge"+
        "blue water hamcake freegen water mug"+
        "whatever cold pressure"
    },

    {
        id:3,
        name:"godzilla milkshake",
        price:"$10.99",
        category:"Lunch",
        image:"country-delight.jpg",
        content:"jgjg ijgjg rtt door ooi wpppw iigig"+
        "gjgj 0jrfoj tirk8jbg jgjgjjd ejejje"+
       "whatever cold pressure",


       id:4,
        name1:"Country delight",
        price1:"$7.99",
        category1:"Lunch",
        image1:"diner-double.jpg",
        content1:"I am baby woke milkshake wolf bitter live edge"+
        "blue water hamcake freegen water mug"+
        "whatever cold pressure"
    },


    {
        id:5,
        name:"Kong butter",
        price:"$18.99",
        category:"Shakes",
        image:"kong-butter.jpg",
        content:"I am baby woke milkshake wolf bitter live edge"+
        "blue water hamcake freegen water mug"+
        "whatever cold pressure",


        id:6,
        name1:"Hulk shake",
        price1:"$19.99",
        category1:"Dinner",
        image1:"buttermilk-pancake.jpg",
        content1:"I am baby woke milkshake wolf bitter live edge"+
        "blue water hamcake freegen water mug"+
        "whatever cold pressure"
    }

];

var filter;


// select box class
var con=document.getElementsByClassName("box")[0];

// container of buttons
var op=document.getElementsByClassName("options")[0];


window.addEventListener("DOMContentLoaded",function(){
    // calling display item function 
     displayItems(menu);

     // call reduce method
   var cate=menu.reduce(function(values,item){
   if(!values.includes(item.categoty)){
       values.push(item.category);
   }
   return values
},["all"]);

// iterate over buttons and display in html file
var butt=cate.map(function(bCat){
    return `<button class="btn"  data-id="${bCat}" >${bCat}</button>`;
    });
    
    butt=butt.join("");
    op.innerHTML=butt;

    // filter btn
filter=document.querySelectorAll(".btn");
console.log(filter);


// for each loop for filter button
filter.forEach(function(bt){

    bt.addEventListener("click",function(e){
    var obj=e.currentTarget.dataset.id;
    console.log(obj);
    var menuItems=menu.filter(function(items){
    if(items.category==obj||items.category1==obj){
        return items;
    }
    });
    
    console.log(menuItems);
    if(obj=="all"){
        displayItems(menu);
    }
    else{
        displayItems(menuItems);
    }
    });
    
    });

    

});








// called displayitems functions
function displayItems(m){

    var displayItem=m.map(function(item){
        return  `<!-- row-1 start -->
        <div class="row  row1-start">
        
        
         <!-- row1-col1 start -->
        <div class="col-md-6">
        
        <!-- image of buttermilk pancake -->
        <div class="buttermilk-pancake">
        <img src=${item.image} alt="buttermilk-pancake" >
        </div>
        
        <div class="content">
        
        <!-- heading -->
        <div class="nameing">
        <scan>${item.name}</scan>
        </div>
        
        <!-- price -->
        <div class="price">
        <scan>${item.price}</scan>
        </div>
        
        <!-- description -->
        <div class="description">
        <p>${item.content}</p>
        </div>
        
        <!-- row1-col1-content end -->
        </div>
        
        <!-- row1-col1- end -->
        </div>
        
        
        
        <!-- row1-col2 start -->
        <div class="col-md-6 dinner-double">
        
        <!-- image of buttermilk pancake -->
        <div class="buttermilk-pancake">
         <img src=${item.image1} alt="buttermilk-pancake" >
         </div>
         
         <div class="content">
         
         <!-- heading -->
         <div class="nameing">
         <scan>${item.name1}</scan>
         </div>
         
         <!-- price -->
         <div class="price">
         <scan>${item.price1}</scan>
         </div>
         
         <!-- description -->
         <div class="description">
         <p>${item.content1}</p>
         </scan>
         </div>
         
         <!-- row1-col2 content end -->
         </div>
        
        <!-- row1-col2 end -->
        </div>
        
        
        <!-- row1 end -->
        </div> ;`
        
        });
        
        displayItem=displayItem.join("");
        con.innerHTML=displayItem;


}

