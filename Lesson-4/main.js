
const peoples = document.querySelector('.peoples')
    const request = new XMLHttpRequest()
    request.open("GET", "data.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()

    request.addEventListener("load", () => {
        const data = JSON.parse(request.response)
        data.forEach((person) => {
            const personCard = document.createElement('div')
            personCard.classList.add('card')
            personCard.innerHTML = `
                <img src="${person.image}" alt="">
                <h3>Name: ${person.name}</h3>
                <span>Age ${person.age}</span>
            `

            peoples.append(personCard)
        });
    })

//2-дз

const car = new XMLHttpRequest()
car.open("GET", "data2.json")
car.setRequestHeader("Content-type", "application/json")
car.send()

car.addEventListener("load", () => {
    const data2 = JSON.parse(car.response)
    console.log(data2);
})
