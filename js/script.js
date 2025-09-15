// COSTANTE PER ENDPOINT API
const endPointApi = "https://flynn.boolean.careers/exercises/api/random/mail";

// INPUT
const myButton = document.getElementById("my-button");

// OUTPUT
const emailList = document.getElementById("email-list");

// FUNZIONE PER GENERARE 10 EMAIL
const randomEmail = () => {
    for (let index = 0; index < 10; index++) {
        axios.get(endPointApi).then((response) => {
            emailList.innerHTML += `<li>${response.data.response}</li>`
        })
    }
}

randomEmail();

// FUNZIONE PER REFRESH SUL CLICK
myButton.addEventListener("click", () => {
    emailList.innerHTML = "";
    randomEmail();
});
