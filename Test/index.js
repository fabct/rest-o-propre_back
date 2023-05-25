/*

// GET

fetch("/clients", {
    method: "get"
}).then(res => res.json())

// POST

// Valide

fetch("/clients", {
    method: "post",
    headers: {
        "Content-Type": "application/json",
        "Content-Security-Policy": "connect-src/self"

    },
    body: JSON.stringify({
        first: "Jean",
        last: "Bombheur",
        pseudo: "JB",
        age: "35",
        email: "jean.bombheur@cochonou.fr",
        password: "XXX-pssd-172"
    })
})

// Invalide

fetch("/users", {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        last: "Bombheur",
        country: "France",
        company: "Cochonou",
        email: "jean.bombheur@cochonou.fr"
    })
})

// PUT

// Valide

fetch("/users", {
    method: "put",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        id: 1,
        to_edit: {
            last: "Bombeur",
            email: "jean.bombeur@cochonou.fr"
        }
    })
})

// Invalide

fetch("/users", {
    method: "put",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        id: 1,
        to_edit: {
            sex_appeal: 42069
        }
    })
})

//DELETE

fetch("/users", {
    method: "delete",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        id: 1
    })
})

fetch("/users", {
    method: "delete",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        id: 69
    })
})
*/

require("../Presentation/api").start(5050);
