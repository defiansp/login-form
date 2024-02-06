// Mengambil semua elemen input
var inputs = document.querySelectorAll('.otp input');

// Menambahkan event listener untuk setiap input
inputs.forEach(function(input, index) {
    input.addEventListener('input', function() {
        // Jika panjang karakter di input saat ini adalah 1
        if (this.value.length === 1) {
            // Pindahkan fokus ke input berikutnya jika tersedia
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    });

    // Menangani penggunaan tombol kembali untuk kembali ke input sebelumnya
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Backspace') {
            // Cek jika input kosong
            if (this.value === '') {
                // Pindahkan fokus ke input sebelumnya jika tersedia
                if (index > 0) {
                    inputs[index - 1].focus();
                }
            }
        }
    });
});