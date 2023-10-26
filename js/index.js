"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-button");
const resultContainer = document.querySelector(".result-container");
const baseURL = "https://api.github.com/users";
function showUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const fetchURL = yield fetch(baseURL);
        const data = yield fetchURL.json();
        yield showResultObj(data);
    });
}
function showResultObj(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = user;
        resultContainer.innerHTML = "";
        for (let i = 0; i < result.length; i++) {
            yield showResultUI(result[i]);
        }
    });
}
function showResultUI(user) {
    return __awaiter(this, void 0, void 0, function* () {
        resultContainer.insertAdjacentHTML("beforeend", `<div class="result-item">
        <img class="user-avatar" src="${user.avatar_url}" alt="${user.login}" />
        <div class="user-info">
          <h3>${user.login}</h3>

        </div>
      </div>`);
    });
}
showUsers();
