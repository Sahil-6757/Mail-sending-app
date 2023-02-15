let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let html = document.getElementById("html");
let forum = document.getElementById("forum");
// let sale_submit_btn = document.getElementById('sale_submit_btn');
let Totalcard = document.getElementById("Totalcard");
let Forumtotal = document.getElementById("Forum-total");
let salename = document.getElementById('salename');
let saledate = document.getElementById('saledate');
let salerate = document.getElementById('salerate');
let salequantity = document.getElementById('salequantity');




card1.addEventListener("click", () => {
  forum.innerHTML = `
    <h1 class="text-center">Welcome to Sales Record</h1>
    <button type="button" class="btn-close ml-4" onClick="Closesaleform()" aria-label="Close"></button>

    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input type="text" autocomplete="off" class="form-control" id="Entersalename" aria-describedby="emailHelp" placeholder="Enter Name">
        
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Date</label>
        <input type="date" autocomplete="off" class="form-control" id="saledate">
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Rate</label>
        <input type="number" autocomplete="off" class="form-control" id="salerate" aria-describedby="emailHelp" placeholder="Enter Rate"> 
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Quantity</label>
        <input type="number" autocomplete="off" class="form-control" id="salequantity" aria-describedby="emailHelp" placeholder="Enter Quantity"> 
      </div>

      <button type="button" onclick="Forumtotalfun()" class="my-2 btn btn-primary">Submit</button>
      
    </div>
    </form>
    `;
});

card2.addEventListener("click", () => {
  forum.innerHTML = `
    <h1 class="text-center">Welcome to Cash Record</h1>
    <button type="button" class="btn-close ml-4" onClick="Closesaleform()" aria-label="Close"></button>

    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name">
        
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Date</label>
        <input type="date" class="form-control" id="exampleInputPassword1">
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Paid</label>
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Paid Amount"> 
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Pending</label>
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Remaining Amount"> 
      </div>

      <button type="button" onclick="Forumtotalfun2()" class="my-2 btn btn-primary">Submit</button>
      
    </div>
    </form>
    `;
});

card3.addEventListener("click", () => {
  location.href ="/allRecord.html"
});

function Closesaleform() {
  forum.innerHTML = ``;
}

function Forumtotalfun() {
  alert("You clicked on submit btn")
  
}
function Forumtotalfun2() {
  Forumtotal.innerHTML = `<h1> This is Cash </h1>`;
}