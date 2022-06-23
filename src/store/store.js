import { createStore } from "vuex";

const store = createStore ({
    state() {
        return {
            firstName: "unknown first name",
            lastName: "unknown last name",
            password: "unknown password",
            confirmPassword: "unknown confirmPassword",
            email: "unknown email",
            date: "unknown date",
            checkboxAgree: null,
            sex: "unknown sex",
            rememberPassword: false,
            logined: false,

            words : new Map([
                ["Encourage", "Поощрять"],
                ["Advise", "Советовать"],
                ["Internship", "Стажировка"],
                ["Obvious", "Очевидный"],
                ["Railway", "Железная дорога"]
            ]),
            putWord_1_1 : "empty",
            putWord_1_2 : "empty",
            putWord_2_1 : "empty",
            putWord_2_2 : "empty",
            putWord_3_1 : "empty",
            putWord_3_2 : "empty",
            putWord_4_1 : "empty",
            putWord_4_2 : "empty",
            putWord_5_1 : "empty",
            putWord_5_2 : "empty",

            controlWord_1: null,
            controlWord_2: null,
            controlWord_3: null,
            controlWord_4: null,
            controlWord_5: null
        }
    },
    mutations: {
    }
});

export default store;
