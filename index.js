const url = "http://universities.hipolabs.com/search?name=";
const btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    const country = document.querySelector("input").value.trim();
    if (country) {
        const colArr = await getColleges(country);
        show(colArr);
    } else {
        alert("Please enter a country name");
    }
});

async function getColleges(country) {
    try {
        const res = await axios.get(url + country);
        return res.data;
    } catch (e) {
        console.error("Error fetching data", e);
        return [];
    }
}

function show(colArr) {
    const list = document.querySelector("#list");
    list.innerHTML = "";
    if (colArr.length > 0) {
        colArr.forEach(col => {
            const li = document.createElement("li");
            li.textContent = col.name;
            list.appendChild(li);
        });
    } else {
        const li = document.createElement("li");
        li.textContent = "No universities found";
        list.appendChild(li);
    }
}
