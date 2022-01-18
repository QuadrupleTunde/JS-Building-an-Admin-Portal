
let ul = document.createElement("ul")
root.append(ul)
const year = new Date().getFullYear();
console.log(typeof(year))

async function admin(){

    let response = await fetch('http://localhost:3001/listBooks');

    let listBooks  = await response.json();
    console.log(typeof(listBooks.length))

         listBooks.forEach (function(book){
        let list = document.createElement('li')
        list.textContent = book.title

        let input = document.createElement("input")
        input.type = "text"
        input.value = book.quantity

        let saveButton = document.createElement("button")
        saveButton.textContent = "Save"
        saveButton.addEventListener("click", async function(){

            await fetch('http://localhost:3001/listBooks',{
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "id": book.id,
                    "quantity": input.value
                })
   

            });
        })
})   
}
admin()
