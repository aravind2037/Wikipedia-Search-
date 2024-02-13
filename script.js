let serchInputElement = document.getElementById("searchInput")

let searchREsultSet = document.getElementById("searchResults");

function CreateAndAppendREsult(resultItem) {

    //creating the Result item
    let divHed = document.createElement("div");
    divHed.classList.add("result-item");
    divHed.innerHTML = '';
    searchREsultSet.appendChild(divHed);

    //craeting title
    let {
        link,
        title,
        description
    } = resultItem;
    let anchr = document.createElement("a");
    anchr.href = link;
    anchr.target = "_blank";
    anchr.textContent = title;
    anchr.classList.add("result-title");
    divHed.appendChild(anchr);
    //creating break element
    let breakELe = document.createElement("br");
    divHed.appendChild(breakELe);
    //creating url element
    let urlEle = document.createElement("a");
    urlEle.classList.add("result-url");
    urlEle.href = link;
    urlEle.target = "_blank";
    urlEle.textContent = link;
    divHed.appendChild(urlEle)
    //creating br element
    let breakELe2 = document.createElement("br");
    divHed.appendChild(breakELe2);
    //creating description element
    let descriptionELe = document.createElement("p");
    descriptionELe.textContent = description;
    divHed.appendChild(descriptionELe);
}

function displaySearchResult(searchResult) {
    for (let i of searchResult) {
        CreateAndAppendREsult(i);
    }


}

function wikipediaSearch(event) {
    if (event.key === "Enter") {
        searchREsultSet.textContent = '';
        let searchInputValue = serchInputElement.value;

        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInputValue;

        let option = {
            method: "GET"
        }
        fetch(url, option)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                let {
                    search_results
                } = data;
                displaySearchResult(search_results);
                console.log(data);
            })

    }
}

serchInputElement.addEventListener("keydown", wikipediaSearch);