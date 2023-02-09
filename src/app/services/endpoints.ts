import { environment } from "src/environments/environment";

export const Endpoints = {
    GET_BOOKS: `${environment.apiUrl}books`,
    GET_BOOK_BY_ID: `${environment.apiUrl}books/`,
    REGISTER_BOOKS: `${environment.apiUrl}books`,
    UPDATE_BOOKS: `${environment.apiUrl}books/`,
    DELETE_BOOKS: `${environment.apiUrl}books/`,

    GET_DASHBOARD: `${environment.apiUrl}dashboard`,
}
