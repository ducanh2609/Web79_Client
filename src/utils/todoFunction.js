export const putTodo = async (data, token) => {
    try {
        const res = await fetch(`http://localhost:8080/todos/${data._id}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (res.status) {
            return true
        }
    } catch (error) {
        alert(error.message);
        return false
    }
}

export const postTodo = async (data, token) => {
    try {
        const res = await fetch(`http://localhost:8080/todos`, {
            method: "POST",
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (res.status) {
            return true
        }
    } catch (error) {
        alert(error.message);
        return false
    }
}

export const deleteTodo = async (id, token) => {
    try {
        const res = await fetch(`http://localhost:8080/todos/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
        if (res.status) {
            return true
        }
    } catch (error) {
        alert(error.message);
        return false
    }
}

