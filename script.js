function checkGraduation() {
  const input = document.getElementById('search').value.trim().toUpperCase();
  const resultDiv = document.getElementById('result');
  const notFoundMsg = document.getElementById('not-found');
  const resultBody = document.getElementById('result-body');

  resultBody.innerHTML = "";
  resultDiv.classList.add('hidden');
  notFoundMsg.classList.add('hidden');

  const found = data.find(item =>
    item.nama.toUpperCase() === input ||
    item.nisn === input ||
    item.dob === input
  );

  if (found) {
    resultBody.innerHTML = `
      <tr><td class="font-medium">Nama</td><td class="pl-2">${found.nama}</td></tr>
      <tr><td class="font-medium">Tanggal Lahir</td><td class="pl-2">${found.dob}</td></tr>
      <tr><td class="font-medium">NISN</td><td class="pl-2">${found.nisn}</td></tr>
      <tr><td class="font-medium">Nilai Akhir</td><td class="pl-2">${found.nilai}</td></tr>
      <tr><td class="font-medium">Keterangan</td><td class="pl-2 font-bold text-green-600">${found.status}</td></tr>
    `;
    resultDiv.classList.remove('hidden');
  } else {
    notFoundMsg.classList.remove('hidden');
  }
}
