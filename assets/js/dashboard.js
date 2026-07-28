const nama = document.getElementById("nama");
const jabatan = document.getElementById("jabatan");
const shift = document.getElementById("shift");
const btnSimpan = document.getElementById("btnSimpan");
const tbodyKaryawan = document.getElementById("tbodyKaryawan");

btnSimpan.addEventListener("click", function () {

    const barisBaru = `
        <tr>
            <td>-</td>
            <td>${nama.value}</td>
            <td>${jabatan.value}</td>
            <td>${shift.value}</td>
            <td>
                <button class="btn btn-warning btn-sm">Edit</button>
                <button class="btn btn-danger btn-sm">Hapus</button>
            </td>
        </tr>
    `;

    tbodyKaryawan.innerHTML += barisBaru;

    nama.value = "";
    jabatan.selectedIndex = 0;
    shift.selectedIndex = 0;

});
