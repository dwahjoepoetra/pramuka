const form = document.getElementById('evaluationForm');
const penilaianKegiatanSlider = document.getElementById('penilaianKegiatan');
const nilaiKegiatanSpan = document.getElementById('nilaiKegiatan');

penilaianKegiatanSlider.addEventListener('input', () => {
    nilaiKegiatanSpan.textContent = penilaianKegiatanSlider.value;
});

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Mencegah formulir terkirim secara default

    // Kumpulkan data dari formulir
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Lakukan sesuatu dengan data, misalnya:
    // - Kirim data ke server menggunakan AJAX
    // - Simpan data ke local storage
    // - Tampilkan data di console

    console.log(data); // Menampilkan data di console

    // Berikan pesan sukses kepada pengguna
    alert('Terima kasih telah mengisi formulir evaluasi!');
    form.reset(); // Reset formulir
});