import pool from "../config/db.js";

const getAllUsersServices = async () => {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
}

const getUserByIdServices = async (id) => {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
}

const createUserServices = async (userData) => {
    const { name, email } = userData;
    const result = await pool.query(
        "INSERT INTO users(name, email) VALUES($1, $2) RETURNING *",
        [name, email]
    );
    return result.rows[0];
}

const updateUserServices = async (id, userData) => {
    const { name, email } = userData;
    const result = await pool.query(
        "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
        [name, email, id]
    );
    return result.rows[0];
}

const deleteUserServices = async (id) => {
    const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
}

export {
    getAllUsersServices,
    getUserByIdServices,   
    createUserServices,
    updateUserServices,
    deleteUserServices
};