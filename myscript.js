// object literal

const salon = {
    name:"The Fashion Pets",
    phone:"5567893",
    address:{
        street:"Av. University",
        number:"262-G"
    },
    workingHours:{
        days:"Mon-Fri",
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[],
    count: function () {
        //alert("We have : " + salon.pets.length + " pets registered.");
    }
}

// object destructuring

let {name,phone,address:{street,number},workingHours:{days,open,close}}=salon;

document.querySelector(".info").innerHTML=`<p class="bold"> ${name} <br> ${street}, ${number} <br> ${days} from ${open} to ${close} <br> ${phone} </p>`;

document.querySelector("footer .info").innerHTML=`<p> ${name} <br> ${street}, ${number} <br> ${days} from ${open} to ${close} <br> ${phone} </p>`;


 

// object constructor

var petc=0;

class Pet{
    constructor(name,age,breed,gender,service,ownerName,phoneContact){
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownerName=ownerName;
        this.phoneContact=phoneContact;
        this.id="pet" + petc;
        petc+=1;
        this.hunger=10;
        this.happiness=5;
    }
    ownerInfo = function () {
        console.log("Owner name: "+ this.ownerName + "\n" + "Contact phone: " + this.phoneContact);
      
    }
    feed = function () {
        this.hunger-=10;
        this.happiness+=10;
        console.log("Feeding ... ");
        
    }
    status = function () {
        console.log("Hunger: " + this.hunger + "\n" + "Happiness: " + this.happiness);
        
    }
    
}

const pet1 = new Pet("Shaggy",2,"Boxer","Male","Shower","Samantha","80679");

const pet2 = new Pet("Lily",1.5,"Boxer","Female","Cut","George","96504");

const pet3 = new Pet("Tom",0.5,"Boxer","Male","Shower","Joe","58309");

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);
displayPet(pet1);
displayPet(pet2);
displayPet(pet3);


 var textname = document.getElementById('petName');
 var textage = document.getElementById('petAge');
 var textbreed = document.getElementById('petBreed');
 var textgender = document.getElementById('petGender');
 var textservice = document.getElementById('petService');
 var textowner = document.getElementById('ownerName');
 var textphone = document.getElementById('contactPhone');

 function register(){

    const thePet = new Pet(textname.value,textage.value,textbreed.value,textgender.value,textservice.value,textowner.value,textphone.value);
    salon.pets.push(thePet);
    alert("You have registered a pet!");
    clean();
    displayPet(thePet);
 }

function clean(){
    textname.value="";
    textage.value="";
    textbreed.value="";
    textgender.value="";
    textservice.value="";
    textowner.value="";
    textphone.value="";
}

function displayPet(aPet){
    var tBody = document.getElementById("rowPet");
    var row = `<tr id="${aPet.id}"> 
                    <td>${aPet.name} </td>
                    <td> ${aPet.age}</td>
                    <td> ${aPet.breed}</td>
                    <td> ${aPet.gender}</td>
                    <td> ${aPet.service}</td>
                    <td> ${aPet.ownerName}</td>
                    <td> ${aPet.phoneContact}</td>
                    <td> 
                        <button class="btn btn-outline-danger" onclick='remove("${aPet.id}");'> Delete </button>
                    </td>`;
                    


     tBody.innerHTML+=row;               
}

function remove(petId){
    var tr = document.getElementById(petId);
    var indexDelete;
    // searching the pet using the id
    for(var i=0;i<salon.pets.length;i++){

        var selectedPet = salon.pets[i];
        if(selectedPet.id == petId){
            indexDelete=i;
        }
    }
    // delete in the array
    salon.pets.splice(indexDelete,1);
    // delete in the HTML
    tr.remove();
}

function Search(){
// deleting the style (css)

for (var j=0;j<salon.pets.length;j++){
    //document.getElementById('pet'+j).setAttribute('class','x');
    $('#pets'+j).show();
}
    var ss = document.getElementById('petSearch').value;
    var searchString = ss.toLowerCase();
// searching the pet
    var flag = false;
    console.log(searchString);
    for(var i=0;i<salon.pets.length;i++){

        var theFoundedPet = salon.pets[i];
        if((theFoundedPet.id.toLowerCase() == searchString) || (theFoundedPet.name.toLowerCase() == searchString)){
        
            flag = true;
            var index=i;
            //document.getElementById('pet'+index).setAttribute('class','found');
            //document.getElementById("result").innerHTML="<h3>I found the pet  </h3>" + salon.pets[i].name;
            $('#pet'+index).show();
        }
        else{
            $('#pet'+i).hide();
        }
        
    }
// other situation
    if(flag == false){
        document.getElementById("result").innerHTML="<h3>It does not exist ... </h3>";

    }
// deleting the text in the input search
    document.getElementById("petSearch").value="";

}

