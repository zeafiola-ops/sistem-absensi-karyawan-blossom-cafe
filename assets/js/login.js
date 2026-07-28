const username = document.getElementById("username");
const password = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", function () {

    if (username.value === "admin" && password.value === "12345") {

        Swal.fire({
            icon: "success",
            title: "Login Berhasil",
            text: "Selamat Datang Admin!"
        }).then(() => {
            window.location.href = "pages/dashboard.html";
        });

    } else {

        Swal.fire({
            icon: "error",
            title: "Login Gagal",
            text: "Username atau Password Salah!"
        });

    }

});
