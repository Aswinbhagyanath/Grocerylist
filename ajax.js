function ajax(){
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        document.querySelector("body").style.textAlign ="left";
        if(this.readyState==4&&this.status==200){
            
            var Jresponse = JSON.parse(this.response);
            var glist = Jresponse.grocery;
            var output = "";
            for(i=0;i<=glist.length;i++){
                output += "<li> Sl.no: "+glist[i].Serialnumber+" | "+"Name: "+glist[i].Name+" | "+"Quantity: "+glist[i].Quantity+" | "+"Units "+glist[i].Unit+" | "+"Department: "+glist[i].Department+" | "+"Notes:"+glist[i].Notes+"</li>";

                document.getElementById("Demo").innerHTML = output;
            }
           
    document.getElementById("click").style.visibility ="hidden";
   
        }        
    }    
    xhttp.open("GET","grocery.json",true);
    xhttp.send();
}
