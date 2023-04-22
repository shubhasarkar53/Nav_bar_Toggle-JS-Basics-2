
alert("Don't Judge By CSS it's just a  JS Practice Project #2")

const toggleBtn = document.querySelector(".toggle-btn");
const listContainer = document.querySelector(".list-container")

toggleBtn.addEventListener("click",function(){

    if(listContainer.classList.contains("active")){
        hidelist();
    }
    else{
        showlist();
    }
})

function showlist(){
    listContainer.classList.add("active");
}
function hidelist(){
    listContainer.classList.remove("active");
}