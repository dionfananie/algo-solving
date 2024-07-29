import "./styles/style.css";

const signUp = document.getElementById("signup");
const signIn = document.getElementById("signin");

function signInFunc() {
  console.log("signup clicked");

  fetch("http://localhost:8080/signup", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      username: "user one",
      password:
        "eoghidljajfiofaiojiojdsioildaisjsidiodjsaiodsaiodjsaiodjhsaocnmsaklcs",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function post() {
  console.log("signin clicked");
  fetch("http://localhost:8080/post", { credentials: "include" });
}

function exposeData() {
  console.log("cookies: ", document.cookie);
}

const exposeButton = document.createElement("button");
exposeButton.className = "btn";
exposeButton.innerText = "Expose";

const container = document.getElementsByClassName("container");
container[0].appendChild(exposeButton);

exposeButton?.addEventListener("click", exposeData);

signUp?.addEventListener("click", signInFunc);
signIn?.addEventListener("click", post);
