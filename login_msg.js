const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    const username = loginForm.username.value;

    if (username === "김보라") {
        alert("환영합니다.");
        location.reload();
        window.location.href="page1.html";
    } else {
        alert("다시 입력해 주세요.")
        location.reload();
    }
});