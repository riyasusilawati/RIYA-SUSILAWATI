// Mendapatkan elemen display
let display = document.getElementById('display');

// Fungsi untuk menambahkan angka atau operator ke layar kalkulator
function appendToDisplay(value) {
    display.value += value;
}

// Fungsi untuk menghitung hasil ekspresi di layar
function calculateResult() {
    try {
        // Mengevaluasi ekspresi matematika yang ada di layar
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error'; // Jika terjadi kesalahan dalam evaluasi
    }
}

// Fungsi untuk membersihkan layar kalkulator
function clearDisplay() {
    display.value = '';
}
