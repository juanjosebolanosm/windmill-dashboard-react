export async function saveUser(user) {
    localStorage.setItem('@user', JSON.stringify(user))
}

export async function clearUser() {
    localStorage.removeItem('@user')
}

export async function getUser() {
    const user = localStorage.getItem('@user')
    JSON.parse(user)
}
