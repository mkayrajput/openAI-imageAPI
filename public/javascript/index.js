document.getElementById('btn-submit').addEventListener("click", async (e) => {
    e.preventDefault();
    const userPrompt = document.getElementById("userPrompt").value;
    const warning = document.querySelector(".warning");
    if(userPrompt==="" || null){
        warning.textContent="Please provide an input before generating.";
        return false;
    }
    warning.textContent="";
    const imageContainer = document.getElementById("gird-container");
    document.getElementById("svg-container").style.display = "flex";
    imageContainer.style.display = "none";
    console.log(userPrompt)
    fetch("/", {
        method: "POST",
        credentials: "same-origin",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ userPrompt })
    }).then(response => response.json())
        .then(data => {
            let allImages = ""
            const images = data.data
            images.forEach(image => {
                let innerImages = `<div class="grid-item-img"><img src=${image.url} class="res-images" alt=""></div>`
                allImages += innerImages
            });
            document.getElementById("svg-container").style.display = "none";
            imageContainer.innerHTML = allImages;
            imageContainer.style.display = "grid";

        }).catch((err)=>{
            document.getElementById("svg-container").style.display = "none";
            warning.textContent="OOPs Something went wrong"
        })
});

(() => {
    let date = new Date()
    const year = date.getFullYear()
    console.log(year)
    document.querySelector("#getYear").innerText = year
})();


