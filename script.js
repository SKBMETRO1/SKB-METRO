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
  {
    "nama": "ABDUL HALIM",
    "tgl": "28/04/2012",
    "nisn": "3129302066",
    "nilai": "0.00",
    "ket": "TIDAK LULUS"
  },
  {
    "nama": "AHMAD AL-MUBAROK",
    "tgl": "16/08/2012",
    "nisn": "2124683683",
    "nilai": "79.49",
    "ket": "LULUS"
  },
  {
    "nama": "AZA IBNUWAHID",
    "tgl": "01/08/1995",
    "nisn": "3954108423",
    "nilai": "0.00",
    "ket": "TIDAK LULUS"
  },
  {
    "nama": "Khusnul Khotimah",
    "tgl": "06/09/2012",
    "nisn": "0129572118",
    "nilai": "80.31",
    "ket": "LULUS"
  },
  {
    "nama": "MUHAMAD FAZA",
    "tgl": "21/10/2011",
    "nisn": "3115295305",
    "nilai": "78.80",
    "ket": "LULUS"
  },
  {
    "nama": "MUHAMMAD FAQIH AL KIROM",
    "tgl": "01/08/2010",
    "nisn": "0103007537",
    "nilai": "77.16",
    "ket": "LULUS"
  },
  {
    "nama": "MUHAMMAD HANIF",
    "tgl": "30/08/1997",
    "nisn": "3974813542",
    "nilai": "0.00",
    "ket": "TIDAK LULUS"
  },
  {
    "nama": "Muhammad Ikhsan Sabri",
    "tgl": "05/07/2013",
    "nisn": "3135837961",
    "nilai": "78.09",
    "ket": "LULUS"
  },
  {
    "nama": "MUKLIS",
    "tgl": "12/03/1998",
    "nisn": "3982386225",
    "nilai": "73.87",
    "ket": "LULUS"
  },
  {
    "nama": "RAFAEL YUDISTIRA",
    "tgl": "23/10/2012",
    "nisn": "3134883625",
    "nilai": "78.71",
    "ket": "LULUS"
  },
  {
    "nama": "RAHMAN AGUSTIAN",
    "tgl": "08/04/1999",
    "nisn": "3993925993",
    "nilai": "71.64",
    "ket": "LULUS"
  },
  {
    "nama": "UBAI DURRAHMAN",
    "tgl": "03/09/2011",
    "nisn": "3119502413",
    "nilai": "81.22",
    "ket": "LULUS"
  },
  {
    "nama": "WILDAN AZIZ FATHONI",
    "tgl": "03/04/2006",
    "nisn": "0064119063",
    "nilai": "0.00",
    "ket": "TIDAK LULUS"
  },
  {
    "nama": "AISAR MUHAMMAD ZAKI",
    "tgl": "21/07/2009",
    "nisn": "0096450471",
    "nilai": "77.13",
    "ket": "LULUS"
  },
  {
    "nama": "ANDREAS SYAMS GOOGLE",
    "tgl": "12/04/2010",
    "nisn": "3103078149",
    "nilai": "79.43",
    "ket": "LULUS"
  },
  {
    "nama": "ANGGI HERLAMBANG",
    "tgl": "19/03/2009",
    "nisn": "0094199995",
    "nilai": "76.47",
    "ket": "LULUS"
  },
  {
    "nama": "Aria Nico Saputra",
    "tgl": "19/10/2007",
    "nisn": "0079683687",
    "nilai": "76.98",
    "ket": "LULUS"
  },
  {
    "nama": "AZIZ NUR FATHURRAHMAN",
    "tgl": "23/02/2010",
    "nisn": "0104853126",
    "nilai": "81.78",
    "ket": "LULUS"
  },
  {
    "nama": "Benjamin Tangguh Setiawan",
    "tgl": "26/06/2009",
    "nisn": "0092357412",
    "nilai": "80.48",
    "ket": "LULUS"
  },
  {
    "nama": "DENRICKO LANANG",
    "tgl": "01/11/2008",
    "nisn": "0082405519",
    "nilai": "76.97",
    "ket": "LULUS"
  },
  {
    "nama": "DIKA RAMADAN",
    "tgl": "18/11/2003",
    "nisn": "0034938836",
    "nilai": "72.13",
    "ket": "LULUS"
  },
  {
    "nama": "FAITH ZAIDAN APTANTA",
    "tgl": "17/08/2009",
    "nisn": "0096759756",
    "nilai": "80.63",
    "ket": "LULUS"
  },
  {
    "nama": "Falen Abdullah Dwiyadi",
    "tgl": "30/01/2010",
    "nisn": "0102066258",
    "nilai": "81.92",
    "ket": "LULUS"
  },
  {
    "nama": "FERDY DHIKI PRATAMA PUTRA",
    "tgl": "28/07/2005",
    "nisn": "0058792302",
    "nilai": "77.37",
    "ket": "LULUS"
  },
  {
    "nama": "FERLY DHIKA PRATAMA PUTRA",
    "tgl": "28/07/2005",
    "nisn": "0053420805",
    "nilai": "75.85",
    "ket": "LULUS"
  },
  {
    "nama": "IBRAHIM",
    "tgl": "14/09/2009",
    "nisn": "0091741719",
    "nilai": "79.57",
    "ket": "LULUS"
  },
  {
    "nama": "IBRAHIM AHMAD AZ",
    "tgl": "16/02/2010",
    "nisn": "0102187715",
    "nilai": "78.54",
    "ket": "LULUS"
  },
  {
    "nama": "IMAM ALKHAIRI MUSLIM",
    "tgl": "19/08/2009",
    "nisn": "0098990098",
    "nilai": "75.41",
    "ket": "LULUS"
  },
  {
    "nama": "JIBRAN AHMAD RAFSANJANI",
    "tgl": "28/12/2009",
    "nisn": "3090447339",
    "nilai": "78.60",
    "ket": "LULUS"
  },
  {
    "nama": "KENAN ATHAYA CHELIO WIJAYA",
    "tgl": "18/01/2010",
    "nisn": "0105884693",
    "nilai": "80.37",
    "ket": "LULUS"
  },
  {
    "nama": "Leano Akbar Rangga.P",
    "tgl": "18/11/2009",
    "nisn": "0095597928",
    "nilai": "80.09",
    "ket": "LULUS"
  },
  {
    "nama": "M. Alief Saefulloh",
    "tgl": "14/06/2009",
    "nisn": "3095385736",
    "nilai": "78.66",
    "ket": "LULUS"
  },
  {
    "nama": "M. FAHRI MICO PRAYATA",
    "tgl": "15/11/2009",
    "nisn": "0099268065",
    "nilai": "83.28",
    "ket": "LULUS"
  },
  {
    "nama": "MUAMMAR YASIR ALHAQ",
    "tgl": "25/12/2009",
    "nisn": "0099288246",
    "nilai": "78.75",
    "ket": "LULUS"
  },
  {
    "nama": "MUHAMAD ABDUH MAARIF SURANTO",
    "tgl": "31/07/2010",
    "nisn": "0107278533",
    "nilai": "77.10",
    "ket": "LULUS"
  },
  {
    "nama": "MUHAMAD DEDI AYUB RAHMAT",
    "tgl": "16/06/2009",
    "nisn": "0091772896",
    "nilai": "78.54",
    "ket": "LULUS"
  },
  {
    "nama": "MUHAMAD ZAHABIL AZMY",
    "tgl": "15/07/2010",
    "nisn": "3078451134",
    "nilai": "79.58",
    "ket": "LULUS"
  },
  {
    "nama": "MUHAMMAD AKHSAN AL-FARZAN",
    "tgl": "08/05/2010",
    "nisn": "3103591289",
    "nilai": "82.01",
    "ket": "LULUS"
  },
  {
    "nama": "MUHAMMAD ARKAAN NOUFAL",
    "tgl": "24/11/2009",
    "nisn": "3095015540",
    "nilai": "80.63",
    "ket": "LULUS"
  },
  {
    "nama": "Muhammad Fachri Al Faruqi",
    "tgl": "30/11/2009",
    "nisn": "0095791827",
    "nilai": "79.91",
    "ket": "LULUS"
  },
  {
    "nama": "MUHAMMAD GALARA GATANG MULIA",
    "tgl": "10/11/2009",
    "nisn": "0094180469",
    "nilai": "80.58",
    "ket": "LULUS"
  },
  {
    "nama": "MUHAMMAD SAJDAH ATTHORIQ",
    "tgl": "06/12/2009",
    "nisn": "3095751293",
    "nilai": "82.63",
    "ket": "LULUS"
  },
  {
    "nama": "NABIGH AFIF AL MANAN",
    "tgl": "22/07/2011",
    "nisn": "3098424001",
    "nilai": "80.54",
    "ket": "LULUS"
  },
  {
    "nama": "NABIL ATHA HIBATULLAH",
    "tgl": "31/03/2010",
    "nisn": "0102565010",
    "nilai": "78.32",
    "ket": "LULUS"
  },
  {
    "nama": "RIZKI FADILAH",
    "tgl": "09/10/2009",
    "nisn": "0103576732",
    "nilai": "74.74",
    "ket": "LULUS"
  },
  {
    "nama": "SYAFIQ AL MUKAYYIS HAMID",
    "tgl": "27/07/2009",
    "nisn": "0096082742",
    "nilai": "77.15",
    "ket": "LULUS"
  },
  {
    "nama": "WILDAN SATRIA",
    "tgl": "27/01/2001",
    "nisn": "0010292450",
    "nilai": "71.89",
    "ket": "LULUS"
  },
  {
    "nama": "Zaidan Richansyah",
    "tgl": "15/03/2010",
    "nisn": "0109948495",
    "nilai": "79.87",
    "ket": "LULUS"
  },
  {
    "nama": "AHMAD AL GHIFARI",
    "tgl": "18/09/2010",
    "nisn": "0107179443",
    "nilai": "75.88",
    "ket": "LULUS"
  },
  {
    "nama": "Aisyah",
    "tgl": "10/01/2011",
    "nisn": "0117197882",
    "nilai": "78.26",
    "ket": "LULUS"
  },
  {
    "nama": "ALBY LERINO",
    "tgl": "07/01/2009",
    "nisn": "0091333794",
    "nilai": "77.13",
    "ket": "LULUS"
  },
  {
    "nama": "CYNTHIA FEBRIANA",
    "tgl": "19/02/2010",
    "nisn": "0109869614",
    "nilai": "79.60",
    "ket": "LULUS"
  },
  {
    "nama": "FAREZA DESTA MAHARDIKA",
    "tgl": "13/12/2008",
    "nisn": "0088886433",
    "nilai": "72.01",
    "ket": "LULUS"
  },
  {
    "nama": "FAZLI RIZKY SANEVIN",
    "tgl": "15/07/2009",
    "nisn": "3099285480",
    "nilai": "80.28",
    "ket": "LULUS"
  },
  {
    "nama": "HUMAID",
    "tgl": "04/02/2010",
    "nisn": "0105984781",
    "nilai": "82.72",
    "ket": "LULUS"
  },
  {
    "nama": "Husnul Khotimah",
    "tgl": "13/11/2008",
    "nisn": "0085010784",
    "nilai": "78.73",
    "ket": "LULUS"
  },
  {
    "nama": "IMAM SYAFI'I",
    "tgl": "19/05/2006",
    "nisn": "0064119098",
    "nilai": "74.04",
    "ket": "LULUS"
  },
  {
    "nama": "M Miftahuddin Pratama",
    "tgl": "25/11/2009",
    "nisn": "0095940195",
    "nilai": "75.46",
    "ket": "LULUS"
  },
  {
    "nama": "M. AMARUDIN",
    "tgl": "18/08/2010",
    "nisn": "0105541046",
    "nilai": "79.01",
    "ket": "LULUS"
  },
  {
    "nama": "M.ALFATH GHAFARI",
    "tgl": "28/08/2011",
    "nisn": "3110562772",
    "nilai": "79.42",
    "ket": "LULUS"
  },
  {
    "nama": "MAULANA YUSUF AL-FAJRI",
    "tgl": "24/03/2010",
    "nisn": "0103442412",
    "nilai": "79.14",
    "ket": "LULUS"
  },
  {
    "nama": "MOHAMMAD FAREL KURNIAWAN",
    "tgl": "18/12/2009",
    "nisn": "0103982069",
    "nilai": "77.48",
    "ket": "LULUS"
  },
  {
    "nama": "MUHAMAD RADIT",
    "tgl": "14/07/2009",
    "nisn": "0099544746",
    "nilai": "80.63",
    "ket": "LULUS"
  },
  {
    "nama": "MUHAMMAD ADITYA",
    "tgl": "02/01/2010",
    "nisn": "0108346789",
    "nilai": "81.21",
    "ket": "LULUS"
  },
  {
    "nama": "Muhammad Akbar Rino Putra",
    "tgl": "13/04/2010",
    "nisn": "0104810027",
    "nilai": "80.98",
    "ket": "LULUS"
  },
  {
    "nama": "MUHAMMAD AL HAFIZ ABDILLAH",
    "tgl": "18/06/2009",
    "nisn": "3091947195",
    "nilai": "78.09",
    "ket": "LULUS"
  },
  {
    "nama": "MUHAMMAD IBRAHIM KHOLID",
    "tgl": "17/10/2009",
    "nisn": "3094730505",
    "nilai": "75.50",
    "ket": "LULUS"
  },
  {
    "nama": "Muhammad Idavi Pratama",
    "tgl": "19/06/2009",
    "nisn": "0098217799",
    "nilai": "75.36",
    "ket": "LULUS"
  },
  {
    "nama": "MUHAMMAD IQBAL",
    "tgl": "30/10/2009",
    "nisn": "3096049512",
    "nilai": "78.95",
    "ket": "LULUS"
  },
  {
    "nama": "MUHAMMAD KHASAN EL HUDA",
    "tgl": "18/07/2009",
    "nisn": "0092029921",
    "nilai": "79.27",
    "ket": "LULUS"
  },
  {
    "nama": "MUHAMMAD KHUSAIN EL HUDA",
    "tgl": "18/07/2009",
    "nisn": "0098513709",
    "nilai": "79.03",
    "ket": "LULUS"
  },
  {
    "nama": "Muhammad Nauval Rusydan",
    "tgl": "15/03/2010",
    "nisn": "3100954244",
    "nilai": "79.93",
    "ket": "LULUS"
  },
  {
    "nama": "MUHAMMAD RAFI AR'RIFAI",
    "tgl": "15/02/2010",
    "nisn": "3109908354",
    "nilai": "76.28",
    "ket": "LULUS"
  },
  {
    "nama": "MUHAMMAD TRYO AL-FATH",
    "tgl": "30/01/2009",
    "nisn": "0098221236",
    "nilai": "75.88",
    "ket": "LULUS"
  },
  {
    "nama": "MUHAMMAD WAHYU ALEXANDER",
    "tgl": "06/03/2011",
    "nisn": "0118045036",
    "nilai": "77.06",
    "ket": "LULUS"
  },
  {
    "nama": "MUHAMMAD WILDAN NAFA",
    "tgl": "09/09/2008",
    "nisn": "0089682845",
    "nilai": "79.48",
    "ket": "LULUS"
  },
  {
    "nama": "RAHMAH RAIHANAH",
    "tgl": "26/02/2010",
    "nisn": "3102169986",
    "nilai": "79.13",
    "ket": "LULUS"
  },
  {
    "nama": "Reno Enza Arfian",
    "tgl": "17/10/2009",
    "nisn": "0095149773",
    "nilai": "80.68",
    "ket": "LULUS"
  },
  {
    "nama": "Rizal Al Fajar",
    "tgl": "15/10/2009",
    "nisn": "0099395707",
    "nilai": "79.63",
    "ket": "LULUS"
  },
  {
    "nama": "RIZKY AKMAL",
    "tgl": "30/06/2010",
    "nisn": "3102568100",
    "nilai": "79.50",
    "ket": "LULUS"
  },
  {
    "nama": "RIZKY MAULANA AKBAR",
    "tgl": "16/06/2009",
    "nisn": "0094080649",
    "nilai": "77.01",
    "ket": "LULUS"
  },
  {
    "nama": "Sandy Andrean",
    "tgl": "13/12/2007",
    "nisn": "0075105372",
    "nilai": "72.16",
    "ket": "LULUS"
  },
  {
    "nama": "SUWARNO",
    "tgl": "02/07/1980",
    "nisn": "3808930825",
    "nilai": "70.78",
    "ket": "LULUS"
  },
  {
    "nama": "ZAID ABDILLAH",
    "tgl": "27/07/2009",
    "nisn": "0093761042",
    "nilai": "79.96",
    "ket": "LULUS"
  },
  {
    "nama": "ZULFA KAMALUNNISA",
    "tgl": "11/12/2007",
    "nisn": "0073170347",
    "nilai": "79.12",
    "ket": "LULUS"
  }
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
