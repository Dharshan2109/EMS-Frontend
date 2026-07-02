import axios from "axios";

const API =
    "http://localhost:8080/api/departments";

class DepartmentService {

    getAll() {

        return axios.get(API);
    }

    getById(id) {

        return axios.get(
            `${API}/${id}`
        );
    }

    save(data) {

        return axios.post(
            API,
            data
        );
    }

    update(id,data) {

        return axios.put(
            `${API}/${id}`,
            data
        );
    }

    delete(id) {

        return axios.delete(
            `${API}/${id}`
        );
    }
}

export default
new DepartmentService();