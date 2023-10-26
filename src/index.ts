const searchInput = document.querySelector(".search-input") as HTMLInputElement;
const searchBtn = document.querySelector(".search-button") as HTMLButtonElement;
const resultContainer = document.querySelector(
  ".result-container"
) as HTMLDivElement;

const baseURL: string = "https://api.github.com/users";

interface userData {
  login: string;
  avatar_url: string;
  url: string;
}

async function showUsers() {
  const fetchURL = await fetch(baseURL);
  const data = await fetchURL.json();
  await showResultObj<userData[]>(data);
}

async function showResultObj<T>(user: T): Promise<void> {
  const result = user as userData[];
  resultContainer.innerHTML = "";
  for (let i = 0; i < result.length; i++) {
    await showResultUI(result[i]);
  }
}

async function showResultUI(user: userData): Promise<void> {
  resultContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="result-item">
        <img class="user-avatar" src="${user.avatar_url}" alt="${user.login}" />
        <div class="user-info">
          <h3>${user.login}</h3>

        </div>
      </div>`
  );
}

showUsers();
