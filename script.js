function cariData() {
  const input = document.getElementById("searchInput").value.trim();
  const hasilDiv = document.getElementById("hasil");
  const hasil = dataLulusan.find(siswa =>
    siswa.nisn === input || siswa.tgl === input
  );

  if (hasil) {
    hasilDiv.innerHTML = `
      <h3>Data Ditemukan:</h3>
      <p><strong>Nama:</strong> ${hasil.nama}</p>
      <p><strong>Tanggal Lahir:</strong> ${hasil.tgl}</p>
      <p><strong>NISN:</strong> ${hasil.nisn}</p>
      <p><strong>Nilai Akhir:</strong> ${hasil.nilai}</p>
      <p><strong>Keterangan:</strong> ${hasil.ket}</p>
    `;
  } else {
    hasilDiv.innerHTML = "<p>Data tidak ditemukan. Periksa kembali input Anda.</p>";
  }
}
