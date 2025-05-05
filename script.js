const data = [
  { nama: "ABDUH HAFIZH", dob: "13/08/2006", nisn: "3063153279", nilai: "80,99", status: "LULUS" },
  { nama: "ABDURROHMAN NAUFAL WASAMY", dob: "30/07/2006", nisn: "0069992066", nilai: "79,03", status: "LULUS" },
  { nama: "AISYAH NAJWAN FADILAH", dob: "13/08/2007", nisn: "0078468043", nilai: "77,79", status: "LULUS" },
  { nama: "WISNU EKA PRASETYO", dob: "02/07/2006", nisn: "0063964919", nilai: "74,60", status: "LULUS" }
];

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
