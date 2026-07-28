btnLogin.addEventListener("click", function () {

    if (username.value === "admin" && password.value === "12345") {

        Swal.fire({
            icon: "success",
            title: "Login Berhasil",
            text: "Selamat datang Admin!"
        }).then(() => {
            window.location.href = "pages/dashboard.html";
        });

    } else {

        Swal.fire({
            icon: "error",
            title: "Login Gagal",
            text: "Username atau Password salah!"
        });

    }

});
