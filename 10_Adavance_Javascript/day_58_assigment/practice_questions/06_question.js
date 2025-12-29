

// SECTION 6: call Method Practice
// 	19.	Create a function showBrand that prints this.brand.
// 	20.	Create two different objects with brand values.
// 	21.	Use call to execute showBrand for both objects.
// 	22.	Explain what problem call is solving here.


let brand1 = {
    brand : "H&M"
}
let brand2 = {
    brand: "US POLO"
}


function showBrand(){

     console.log(this.brand);
     
}
// showBrand() if we normlly call the funtion here then it will give the value undefined
showBrand.call(brand1) // here call will take the value from the object and give the value 
showBrand.call(brand2);