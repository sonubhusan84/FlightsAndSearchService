// class Product{
   

//     constructor(n,p,d){
//         this.name = n,
//         this.price = p,
//         this.discount = d
//         return this   //even thought you don't write this line its the default one
//         //return {name:"geaorge",age:55}  ///this is manual returning this
//         //return 10  //it will return this i.e. a object not any integer
//     }

//     displayproduct(){
//         console.log(this.name);

//     }

//     sellproduct(){

//     }
// }

// let p1 = new Product("bhusan",15000,"10")

// console.log(p1)

// p1.displayproduct();



function Product(n,p,c){
    this.name = n;
    this.price = p
    category.call(this,c)
}

function category(c){
    this.categoryname = c;
    
}
category.prototype.getCategoryName = function(){
    console.log(this.categoryname);
}

Product.prototype = Object.create(category.prototype);



let p1 = new Product("bhu",100,"paper");
console.log(p1);
p1.getCategoryName();



