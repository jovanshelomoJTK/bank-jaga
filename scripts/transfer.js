const namaInput = document.getElementById('penerima');
const bankInput = document.getElementById('bank');
const noRekInput = document.getElementById('rekening');

namaInput.addEventListener('input', function() {
  if (namaInput.value === '') {
    bankInput.disabled = true;
    bankInput.value = '';
    noRekInput.disabled = true;
    noRekInput.value = '';
  } else if (namaInput.value.includes('Tambah Penerima Baru')) {
    namaInput.value = '';
    bankInput.disabled = false;
    bankInput.value = '';
    noRekInput.disabled = false;
    noRekInput.value = '';
    window.location.href = "aini_transfer_name_fill.html";
  } else {
    bankInput.disabled = false;
    bankInput.value = 'Bank BRI';
    noRekInput.disabled = false;
    noRekInput.value = "0111-01-058436-50-7"    
  }

});
