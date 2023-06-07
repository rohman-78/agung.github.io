function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "agung" && password === "220256") {
    alert("Login berhasil!");
    window.location.href = "agung.html";
  } else {
    alert("Username atau password salah!");
  }
}
