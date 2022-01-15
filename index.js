let myLeads= [];
const inputBtn= document.getElementById("input-btn");
let inputEl= document.getElementById("input-el");
let ulEl= document.getElementById("ul-el")




inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
    renderLeads()
    inputEl.value=""
})

function renderLeads() {

    let listItems ="" ;
for(i=0; i<myLeads.length; i++){
   
    listItems += `<li>
                     <a target='_blank'  href ='${myLeads[i]}'> 
                     ${myLeads[i]}
                        </a>
                  </li>`

}

ulEl.innerHTML= listItems
}