const wrap = document.querySelector(".wrapper");
const register = document.querySelector(".register-link");
const login = document.querySelector(".login-link");

register.onclick = () => {
  wrap.classList.add("active");
};
login.onclick = () => {
  wrap.classList.remove("active");
};
