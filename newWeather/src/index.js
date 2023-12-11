function form(event) {
    event.preventDefault()
    let search = document.querySelector("#search-bar")
    let city = document.querySelector("#city")
    console.log(search.value)
    city.innerHTML = search.value
}

let searchInput = document.querySelector("#search-input")
searchInput.addEventListener("submit", form)