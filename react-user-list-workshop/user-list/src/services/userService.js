const baseUrl = 'http://localhost:3005/api/users';

export async function getAll() {
    const response = await fetch(baseUrl);
    const responseAsObject = await response.json();
    return responseAsObject.users;
}

export async function getById(userId) {
    const response = await fetch(`${baseUrl}/${userId}`);
    const responseAsObject = await response.json();
    return responseAsObject.user;
}

export async function create(userData) {
    const user = {
        ...userData, address: {
            country: userData.country,
            city: userData.city,
            street: userData.street,
            streetNumber: userData.streetNumber,
        }
    }

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    });

    const responseAsObject = await response.json();
    return responseAsObject.user;
}

export async function edit(userId, userData) {
    const user = {
        ...userData, address: {
            country: userData.country,
            city: userData.city,
            street: userData.street,
            streetNumber: userData.streetNumber,
        }
    }

    const response = await fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    });

    const responseAsObject = await response.json();
    return responseAsObject.user;
}


export async function remove(userId) {
    const response = await fetch(`${baseUrl}/${userId}`, { method: 'DELETE' });
    return await response.json();
}