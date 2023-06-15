document.getElementById("isi").addEventListener('click', function(event) {
    sessionStorage.setItem("komik", "Si Juki");
    location.assign("/web/auth/detailKomik.html");
})