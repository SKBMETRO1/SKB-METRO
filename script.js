const data = [
  { nama: "ABDUH HAFIZH", tgl: "13/08/2006", nisn: "3063153279", nilai: "80,99", ket: "LULUS" },
  { nama: "ABDURROHMAN NAUFAL WASAMY", tgl: "30/07/2006", nisn: "0069992066", nilai: "79,03", ket: "LULUS" },
  { nama: "AISYAH NAJWAN FADILAH", tgl: "13/08/2007", nisn: "0078468043", nilai: "77,79", ket: "LULUS" },
  { nama: "ANASTASYA ERLIANA PUTRI", tgl: "07/03/2007", nisn: "0073500369", nilai: "81,11", ket: "LULUS" },
  { nama: "ANGGUN SAPUTRI", tgl: "04/01/2007", nisn: "0075183616", nilai: "77,04", ket: "LULUS" },
  { nama: "ASYA KARIMA", tgl: "07/05/2007", nisn: "3079757102", nilai: "79,01", ket: "LULUS" },
  { nama: "AURELL SYAVA CHANTIKA", tgl: "04/08/2005", nisn: "0057765638", nilai: "79,55", ket: "LULUS" },
  { nama: "BIMA LANGGA SAPUTRA", tgl: "17/11/2005", nisn: "0057662337", nilai: "73,11", ket: "LULUS" },
  { nama: "DIYANA", tgl: "22/12/2006", nisn: "0064926990", nilai: "77,75", ket: "LULUS" },
  { nama: "DWI ROMADAYANTI", tgl: "20/10/2006", nisn: "0064117355", nilai: "77,57", ket: "LULUS" },
  { nama: "ELLEN NOVITA SARI", tgl: "30/01/2007", nisn: "0073068415", nilai: "77,48", ket: "LULUS" },
  { nama: "EQI FARANDITHA EFFENDI", tgl: "05/06/2003", nisn: "0031591236", nilai: "73,64", ket: "LULUS" },
  { nama: "Hafidz Ibrohim An-Nakho'i", tgl: "07/07/2007", nisn: "0074411814", nilai: "80,00", ket: "LULUS" },
  { nama: "HANIFAH AHFAZHANI MU'AFI", tgl: "16/04/2007", nisn: "0075182928", nilai: "77,84", ket: "LULUS" },
  { nama: "HENDI AMAR", tgl: "18/04/2007", nisn: "0132487947", nilai: "78,04", ket: "LULUS" },
  { nama: "HISYAM ABDULLAH", tgl: "14/04/2007", nisn: "0079080022", nilai: "79,33", ket: "LULUS" },
  { nama: "JONATAN RAFI KUSUMA", tgl: "07/11/2005", nisn: "0057003653", nilai: "72,76", ket: "LULUS" },
  { nama: "LUBNA BELA SHOLIHAH", tgl: "02/02/2007", nisn: "3072267834", nilai: "73,19", ket: "LULUS" },
  { nama: "M Iqbal Najib", tgl: "12/09/2006", nisn: "0065263809", nilai: "76,67", ket: "LULUS" },
  { nama: "M. DAFFA ALFAREZA. S", tgl: "04/08/2005", nisn: "0055674569", nilai: "78,83", ket: "LULUS" },
  { nama: "MAYLIA", tgl: "20/05/2006", nisn: "0062007982", nilai: "77,65", ket: "LULUS" },
  { nama: "MUHAMMAD DAFFA AIRLANGGA", tgl: "03/08/2007", nisn: "3079232650", nilai: "77,27", ket: "LULUS" },
  { nama: "NABILA HAMIDAH", tgl: "29/07/2006", nisn: "0066010991", nilai: "77,21", ket: "LULUS" },
  { nama: "Nikmatul Khoiriyah", tgl: "14/12/2006", nisn: "0063769913", nilai: "77,79", ket: "LULUS" },
  { nama: "PANCA RAHAYU", tgl: "21/06/1994", nisn: "3948825999", nilai: "72,57", ket: "LULUS" },
  { nama: "RAFIF ZUHDI", tgl: "01/05/2007", nisn: "0076265874", nilai: "80,49", ket: "LULUS" },
  { nama: "Reza Aditya Irawan", tgl: "05/05/2007", nisn: "0055503080", nilai: "74,57", ket: "LULUS" },
  { nama: "SAUSAN SALSABILA", tgl: "23/01/2007", nisn: "0076380951", nilai: "0,00", ket: "TIDAK LULUS" },
  { nama: "SAVLIDA ABEL", tgl: "01/05/2003", nisn: "0030631189", nilai: "73,91", ket: "LULUS" },
  { nama: "VERY SETIAWAN", tgl: "02/10/2005", nisn: "0058001582", nilai: "77,55", ket: "LULUS" },
  { nama: "ADAM JAYA KUSUMA", tgl: "16/06/2005", nisn: "0052236718", nilai: "73,57", ket: "LULUS" },
  { nama: "ALMUHZAINI JEFRIANSYAH", tgl: "15/01/2007", nisn: "0072573323", nilai: "75,13", ket: "LULUS" },
  { nama: "DIVA REVALINDA", tgl: "12/01/2006", nisn: "0018168806", nilai: "80,32", ket: "LULUS" },
  { nama: "DUWI RAHMAWATI", tgl: "30/10/2003", nisn: "0032467626", nilai: "0,00", ket: "TIDAK LULUS" },
  { nama: "FAJAR KURNIAWAN", tgl: "31/01/2005", nisn: "0055006391", nilai: "73,09", ket: "LULUS" },
  { nama: "Ferry Samsaleh", tgl: "18/10/2005", nisn: "0067446695", nilai: "73,97", ket: "LULUS" },
  { nama: "Hanifah", tgl: "12/09/2007", nisn: "3078739957", nilai: "77,36", ket: "LULUS" },
  { nama: "HERMAWAN", tgl: "05/08/1982", nisn: "3824635181", nilai: "71,01", ket: "LULUS" },
  { nama: "HUDZAIFAH", tgl: "16/06/2004", nisn: "3047410397", nilai: "75,05", ket: "LULUS" },
  { nama: "JORDAN REVANDO", tgl: "04/01/2007", nisn: "0075398408", nilai: "71,70", ket: "LULUS" },
  { nama: "KHALIFAH TUTTOYIBAH", tgl: "28/11/2004", nisn: "0041880539", nilai: "75,20", ket: "LULUS" },
  { nama: "MARLINA", tgl: "10/08/2005", nisn: "0059917178", nilai: "71,97", ket: "LULUS" },
  { nama: "NOVIA ANJANI", tgl: "27/11/2006", nisn: "0062890488", nilai: "80,45", ket: "LULUS" },
  { nama: "NURAINI MAIDA SALMA", tgl: "26/05/2007", nisn: "0073674584", nilai: "75,16", ket: "LULUS" },
  { nama: "NURFADILA", tgl: "22/05/1993", nisn: "3931742566", nilai: "73,47", ket: "LULUS" },
  { nama: "PUSPITA PUTRI PANGESTI", tgl: "24/06/2005", nisn: "0068804331", nilai: "77,89", ket: "LULUS" },
  { nama: "Rahma Febriyani", tgl: "14/02/2006", nisn: "0065872506", nilai: "80,04", ket: "LULUS" },
  { nama: "Rahmanda Setiawan", tgl: "07/09/2006", nisn: "0065073487", nilai: "72,61", ket: "LULUS" },
  { nama: "REISHA FEBI TRIANITA", tgl: "24/02/2005", nisn: "0059991502", nilai: "75,25", ket: "LULUS" },
  { nama: "RENDIKA LESMANA", tgl: "24/08/2006", nisn: "0064378582", nilai: "77,20", ket: "LULUS" },
  { nama: "Rika Ananda", tgl: "15/11/2006", nisn: "0062048528", nilai: "0,00", ket: "TIDAK LULUS" },
  { nama: "RONALDO", tgl: "08/10/2006", nisn: "0065801748", nilai: "73,65", ket: "LULUS" },
  { nama: "TEGUH WIYONO", tgl: "08/02/1991", nisn: "3913195133", nilai: "71,81", ket: "LULUS" },
  { nama: "UMAR BILAL", tgl: "03/10/2004", nisn: "0044065879", nilai: "73,56", ket: "LULUS" },
  { nama: "WAHYU ARDIANTO", tgl: "19/09/2005", nisn: "0051629147", nilai: "77,56", ket: "LULUS" },
  { nama: "WAHYU EDI SANTOSO", tgl: "17/07/1976", nisn: "3744402180", nilai: "70,37", ket: "LULUS" },
  { nama: "WISNU EKA PRASETYO", tgl: "02/07/2006", nisn: "0063964919", nilai: "74,60", ket: "LULUS" },
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
    item.tgl === input // ini kamu typo sebelumnya "dob", harus "tgl"
  );

  if (found) {
    resultBody.innerHTML = `
      <tr><td class="font-medium">Nama</td><td class="pl-2">${found.nama}</td></tr>
      <tr><td class="font-medium">Tanggal Lahir</td><td class="pl-2">${found.tgl}</td></tr>
      <tr><td class="font-medium">NISN</td><td class="pl-2">${found.nisn}</td></tr>
      <tr><td class="font-medium">Nilai Akhir</td><td class="pl-2">${found.nilai}</td></tr>
      <tr><td class="font-medium">Keterangan</td><td class="pl-2 font-bold ${found.ket === 'LULUS' ? 'text-green-600' : 'text-red-600'}">${found.ket}</td></tr>
    `;
    resultDiv.classList.remove('hidden');
  } else {
    notFoundMsg.classList.remove('hidden');
  }
}
