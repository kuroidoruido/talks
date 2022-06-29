import { randomString } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";
import http from 'k6/http';

export function createTodolistClient(baseUrl, userPrefix) {
    const username = `${userPrefix}-${randomString(30)}`;
    function url(path) {
        return `${baseUrl}${path}`;
    }
    function params() {
        return { headers: { 'Authentication': username, 'Content-Type': 'application/json' } };
    }
    return {
        health() {
            return http.get(url('/api/probe'));
        },
        getAllTodoItems() {
            const res = http.get(url('/api/v1/todo'), params());
            if (res.status === 200) {
                return JSON.parse(res.body);
            } else {
                return res.status;
            }
        },
        createOneTodoItem(item) {
            const res = http.post(url('/api/v1/todo'), JSON.stringify(item), params());
            if (res.status === 200) {
                return JSON.parse(res.body);
            } else {
                return res.status;
            }
        },
        editOneTodoItem(itemPatch) {
            const res = http.patch(url('/api/v1/todo'), JSON.stringify(itemPatch), params());
            if (res.status === 200) {
                return JSON.parse(res.body);
            } else {
                return res.status;
            }
        },
        deleteOneTodoItem(itemId) {
            const res = http.del(url(`/api/v1/todo/${itemId}`), params());
            if (res.status === 200) {
                return JSON.parse(res.body);
            } else {
                return res.status;
            }
        },
    }
}