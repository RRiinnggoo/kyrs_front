import { makeAutoObservable } from "mobx";
import axios from "axios";

class UserStore {
  username = "";
  email = "";
  password = "";
  confirmPassword = "";
  error = "";
  isAuthenticated = false;
  role = null; // Теперь храним роль как строку, а не массив
  currentUser = null;

  constructor() {
    makeAutoObservable(this);
    this.checkAuth();
  }

  // Сеттеры
  setUsername(username) {
    this.username = username;
  }

  setEmail(email) {
    this.email = email;
  }

  setPassword(password) {
    this.password = password;
  }

  setConfirmPassword(confirmPassword) {
    this.confirmPassword = confirmPassword;
  }

  setError(error) {
    this.error = error;
  }

  setIsAuthenticated(isAuthenticated) {
    this.isAuthenticated = isAuthenticated;
  }

  setRole(role) {
    this.role = role;
  }

  setCurrentUser(userData) {
    this.currentUser = userData;
  }

  // Проверяем, является ли пользователь администратором
  get isAdmin() {
    return this.role === "ADMIN";
  }

  // Проверка авторизации при загрузке приложения
  checkAuth() {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      try {
        const userData = JSON.parse(user);
        this.setIsAuthenticated(true);
        this.setCurrentUser(userData);
        this.setRole(userData.role);
        this.setUsername(userData.username);
      } catch (e) {
        console.error("Ошибка при разборе данных пользователя:", e);
        this.clearAuth();
      }
    }
  }

  // Авторизация
  async login(navigate) {
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        username: this.username,
        password: this.password,
      });

      const { token, username, role } = response.data;

      const userData = {
        username,
        role
      };

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));

      this.setIsAuthenticated(true);
      this.setCurrentUser(userData);
      this.setRole(role);
      this.setUsername(username);
      this.setError("");

      navigate("/");
      window.location.reload();
    } catch (err) {
      this.setError(err.response?.data?.message || "Неверный логин или пароль");
      console.error("Ошибка авторизации:", err);
    }
  }

  // Регистрация
  async register(navigate) {
    if (!this.validateForm()) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/auth/register", {
        username: this.username,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      });

      const { token, username, role } = response.data;

      const userData = {
        username,
        role
      };

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));

      this.setIsAuthenticated(true);
      this.setCurrentUser(userData);
      this.setRole(role);
      this.setUsername(username);
      this.setError("");

      navigate("/");
      window.location.reload();
    } catch (err) {
      this.setError(
        err.response?.data?.message || 
        "Ошибка регистрации. Пользователь с таким именем уже существует"
      );
      console.error("Ошибка регистрации:", err);
    }
  }

  // Валидация формы
  validateForm() {
    if (!this.username || !this.password || !this.confirmPassword || !this.email) {
      this.setError("Все поля обязательны для заполнения");
      return false;
    }
    if (this.password !== this.confirmPassword) {
      this.setError("Пароли не совпадают");
      return false;
    }
    if (this.password.length < 6) {
      this.setError("Пароль должен содержать минимум 6 символов");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(this.email)) {
      this.setError("Введите корректный email");
      return false;
    }
    return true;
  }

  // Выход из системы
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setIsAuthenticated(false);
    this.setRole(null);
    this.setCurrentUser(null);
    this.setUsername("");
    this.setPassword("");
    this.setError("");
  }

  // Очистка данных аутентификации
  clearAuth() {
    this.setIsAuthenticated(false);
    this.setRole(null);
    this.setCurrentUser(null);
  }
}

export const userStore = new UserStore();