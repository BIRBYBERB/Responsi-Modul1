# Responsi-Modul1

Proyek tersebut adalah Responsi Modul 1 yang fokus pada pembuatan API dengan JavaScript menggunakan Supabase sebagai database, Visual Studio Code sebagai alat operasional, dan Vercel sebagai API. Dalam proyek dapat beberapa fitur yaitu untuk menambahkan sepatu, supplier dan category seseorang kedalam database untuk mengetahui data sepatu dicuci. 

Tujuan utama proyek ini adalah untuk mempermudah proses pencatatan, pemantauan, dan pembaruan status cucian sepatu secara digital melalui REST API sederhana.

# Tujuan
1. Meggunakan format JSON melalui Supabase untuk sebagai alat penyimpanan sederhana.
2. Mengetahui bagaimana Visual Studio Code sebagai alat antar-komunikasi Supabase dan Vercel
3. Implementasi konsep CRUD pada REST API

# Struktur Data
Contoh data sepatu tersimpan:
'test123'

'{
  "brand": "Air Shoes",
  "name": "Greaves of Beowulf",
  "status": "Available",
  "category_id": "dd289cd3-69ac-4f5e-877d-327f413c91de",
  "supplier_id": "4805a67e-ae82-47ea-9ef9-dabb570b1c2e",
  "tanggal_masuk": "2025-10-08",
  "tanggal_selesai": null
}''
--
id → Nomor unik sepatu
brand → Brand sepatu
nama → Nama sepatu
status → Status cuci
category_id → ID category
supplier_id → ID supplier
tanggalMasuk → Tanggal sepatu diterima untuk dicuci
tanggalSelesai → Tanggal sepatu selesai dicuci

Contoh data Category tersimpan
{
  "brand": "Air shoes"
}

brand → Brand sepatu

Contoh data Supplier tersimpan
{
  "name": "Vergil Sparda",
  "phone": "2000-DEVIL-MAY-CRY",
  "email": "GilverBlueGrave@gmail.com"
}

nama → Nama orang
phone → Nomor orang
email → Email

# Alur Kerja API
1. Pengguna mengirimkan permintaan HTTP (GET, POST, PUT, DELETE) ke server.
2. Server memproses permintaan menggunakan Express.js.
3. Data sepatu disimpan atau diambil dari package.json atau Supabase
4. Server mengembalikan respons dalam format JSON.

# Contoh Request & Response

POST Sepatu
BODY:
{
  "brand": "Air Shoes",
  "name": "Greaves of Beowulf",
  "status": "Available",
  "category_id": "dd289cd3-69ac-4f5e-877d-327f413c91de",
  "supplier_id": "4805a67e-ae82-47ea-9ef9-dabb570b1c2e",
  "tanggal_masuk": "2025-10-08",
  "tanggal_selesai": null
}

RESPONSE:
{
    "message": "Data sepatu berhasil ditambahkan."
}

