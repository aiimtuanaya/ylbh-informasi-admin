
// script.js

// ===============================
// Fungsi untuk Menambahkan Anggota ke LocalStorage
// ===============================
function addMember(name, job) {
    let members = JSON.parse(localStorage.getItem("members") || "[]");
    members.push({ name: name, job: job });
    localStorage.setItem("members", JSON.stringify(members));
}

// ===============================
// Fungsi untuk Menampilkan Anggota dari LocalStorage
// ===============================
function displayMembers() {
    let members = JSON.parse(localStorage.getItem("members") || "[]");
    let membersList = document.getElementById("members-list");

    // Bersihkan daftar anggota yang ada
    membersList.innerHTML = '';

    // Menambahkan setiap anggota ke daftar
    members.forEach(member => {
        let listItem = document.createElement("li");
        listItem.textContent = `${member.name}: ${member.job}`;
        membersList.appendChild(listItem);
    });
}

// ===============================
// Panggil displayMembers untuk memuat data anggota secara otomatis saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    displayMembers();
});
