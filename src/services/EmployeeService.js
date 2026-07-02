import axios from "axios";

const API =
    "http://localhost:8080/api/employees";

const token =
    localStorage.getItem("token");

const config = {
    headers:{
        Authorization:
            `Bearer ${token}`
    }
};

const getAll = () =>
    axios.get(API, config);

const search = (keyword) =>
    axios.get(
        `${API}/search?keyword=${keyword}`,
        config
    );

const department = (dept) =>
    axios.get(
        `${API}/department/${dept}`,
        config
    );

const deleteEmployee = (id) =>
    axios.delete(
        `${API}/${id}`,
        config
    );

const pagination =
    (page,size,sort) =>
        axios.get(
            `${API}/page?page=${page}&size=${size}&sort=${sort}`,
            config
        );

        const getById = (id) =>
    axios.get(
        `${API}/${id}`,
        config
    );

const save = (employee) =>
    axios.post(
        API,
        employee,
        config
    );

const update = (id,employee) =>
    axios.put(
        `${API}/${id}`,
        employee,
        config
    );

export default {

    getAll,
    search,
    department,
    deleteEmployee,
    pagination,

    getById,
    save,
    update
};