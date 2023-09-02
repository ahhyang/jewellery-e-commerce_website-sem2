function display(obj,num)
{
    var price = "Price" + num;
    var qty = "Quantity" + num;
   var amount = "Amount" + num;  
   
    if(obj.selectedIndex != 0)
    {    

             document.getElementById(price).value=obj.value;
              document.getElementById(qty).disabled = false;
            document.getElementById(qty).value = "0";
            document.getElementById(amount).value = "0.00";
            document.getElementById(qty).focus();
            calculate();
    }
   
}


function quantity(){
    for(num=0; num<=20 ; num++)
    {
        document.write("<option>" + num + "</option>");
    }
}

function sub(obj,num)
{
    var amount = "Amount" + num;
    var price = "Price" + num;
   
 
    var qty = obj.selectedIndex;
   if (qty>0){
    var subtotal = parseFloat(document.getElementById(price).value)*qty;
        document.getElementById(amount).value = subtotal.toFixed(2);
      calculate();
   }
   else {
      var subtotal =parseFloat(0);
        document.getElementById(amount).value = subtotal.toFixed(3);
      calculate();
   
   }

}


function calculate(){
   
    var amt1, amt2, amt3, total;    
    amt1 = parseFloat(document.getElementById('Amount1').value);
    amt2 = parseFloat(document.getElementById('Amount2').value);
     amt3 = parseFloat(document.getElementById('Amount3').value);

    total = amt1 + amt2 + amt3;

    document.getElementById('totalAmount').value=total.toFixed(2);
}





function cancelorder(){
if (confirm("Are you sure you want to cancel this order?") == 1){
    document.book.reset();
    window.location.reload();

}
}

var name;

window.onload = init;

function init() {

       var Today=new Date();
       document.getElementById('date').value= Today.getDate()+"/"+ (Today.getMonth()+1) + "/" +Today.getFullYear();
       document.getElementById('customerName').value=name;
              

document.forms[0].onsubmit = function() {
    if (this.checkValidity()) {
       
            if(document.getElementById('totalAmount').value>0 ) {
            
                    if (confirm("Are sure that you would like to submit the book order?") == 1){
                    //name1= document.getElementById('customerName').value;
                    alert( name + "Your order has been successfully submitted. You will receive your order items wihtin 10 days ")
               
                         window.print();
                         return true;
                         //document.book.submit();
                         //location.href = "success.html";
                         //window.location = "success.html" public name;                                
                    }else{
                        return false;  
                    }
                    
            
            } else { 
                    alert("Total Amount is invalid");   
                    return false;      
           }     

     }
    }
}