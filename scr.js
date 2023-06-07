function register() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "" || email === "") {
    alert("Harap isi semua field!");
  } else {
    alert("Registrasi berhasil!");
    window.location.href = "index.html";
  }
}
