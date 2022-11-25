import { url } from './ApiConfig';

const urlUser = url + '/usuarios/';
const urlRestaurant = url + '/restaurantes/';
const urlProduct = url + '/productos/';



export const getUser = async (id) => {
    return fetch(urlUser + 'get/' + id + '/')
        .then(res => res.json())
        .then(
            (result) => {
                return result;
            }
        )
}

export const getUsers = async () => {
    return fetch(urlUser)
        .then(res => res.json())
        .then(
            (result) => {
                return result;
            }
        )
}

export const getRestaurants = async () => {
    return fetch(urlRestaurant)
        .then(res => res.json())
        .then(
            (result) => {
                return result;
            }
        )
}

export const getDomiciliarios = async () => {
    return fetch(urlUser)
        .then(res => res.json())
        .then(
            (result) => {
                return result;
            }
        )
}

export const getProducts = async () => {
    return fetch(urlProduct)
        .then(res => res.json())
        .then(
            (result) => {
                return result;
            }
        )
}

export const createRestaurant = async (data) => {
    console.log(urlRestaurant + "create/", data)
    const res = await fetch(urlRestaurant + "create/", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
    return res.json()
}

export const createProduct = async (data) => {
    return fetch(urlProduct + "create/", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                return result;
            }
        )
}

export const createDomiciliary = async (data) => {
    // console.log(data)
    return fetch(urlUser + "domiciliario/", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                return result;
            }
        )
}

export const createManager = async (data) => {
    // console.log(data)
    return fetch(urlUser + "restaurante/", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                return result;
            }
        )
    // .catch(error => 
    //     console.error(error)
    // )
}

export const removeUser = async (idUser) => {
    // console.log(".-----", urlUser + "remove/" + idUser + '/')
    return fetch(urlUser + "remove/" + idUser + '/', {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                return result;
            }
        )
}

export const removeRestaurant = async (idRest) => {
    // console.log(".-----", urlRestaurant + "remove/" + idRest + '/')
    return fetch(urlRestaurant + "remove/" + idRest + '/', {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                return result;
            }
        )
}

export const removeProduct = async (idprod) => {
    // console.log(".-----", urlRestaurant + "remove/" + idprod + '/')
    return fetch(urlProduct + "remove/" + idprod + '/', {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                return result;
            }
        )
}

export const updateRestaurant = async (idRest, data) => {
    // console.log(urlRestaurant + "update/" + idRest + '/')
    // console.log(data)
    const res = await fetch(urlRestaurant + "update/" + idRest + '/', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
    return res.json()
}

export const updateProduct = async (idProd, data) => {
    console.log(urlProduct + "update/" + idProd + '/')
    console.log(data)
    const res = await fetch(urlProduct + "update/" + idProd + '/', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
    return res.json()
}

export const updateUser = async (idUser, data) => {
    console.log(urlUser + "update/" + idUser + '/')
    console.log(data)
    const res = await fetch(urlUser + "update/" + idUser + '/', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
    return res.json()
}