user / santri / auth :

- santri transaksi
- maksimal transaksi
  - jajan: harian : 10.000
    mingguan 20
    bulanan 25
- transaksi kebutuhan/kebersihan 20.000
- kartu tidak bisa diakses user/santri lain
- maksimal jajan diperkecil sebelum beli kebersihan-kebutuhan
- tipe transaksi : jajan, kebersihan-kebutuhan, darurat potong tabungan
- tabungan belum masuk tidak bisa transaksi
- data santri :

admin

- ada data transaksi harian mingguan bulanan
- data transaksi santri difilter by :
  - nama
  - transaksi tertinggi/ terendah
- data uang masuk, uang keluar, transaksi, total masuk all-time, total transaksi all-time
- REKAP DATA EXPORT AS EXCEL

# kisi2 dari mas ai untuk fungsi edit:
- FRONT END (CardEditSantri.jsx): halaman edit menjalankan fungsi ambil data sesuai dengan "id yg dikirim dari FE CardTable.jsx ke FE CardEditSantri.jsx"
- BACK END (getsant-api.js) : backend menerima request ambil data ke server berdasarkan "id yg dimiliki FE CardEditSantri.jsx, yg id tsb dikirim ke BE getsant-api.js"
                        - ngirimnya ini aku masih bingung gimana apakah dng syntax fetch( url, "data yg dikirim") tapi menurut sy seharusnya ya pake ini sih 
- SERVER (getsant-lib.jsx) : server menjalankan query select from database dengan id yg dikirim, server mengolah data menjadi subjek dikirim balik ke FE lewat BE
- FRONT END (CardEditSantri.jsx): halaman edit mengambil nilai satu object yg diambil dari server/database, objectnya dimasukkan ke input sebagai value yang dapat diganti
                        - sudah pernah berhasil tp cuma lewat state tanpa lewat backend-server, dan inputnya diisi value={id.value} tapi gabisa diubah
- BACK END (getsant-api.js) : backend menerima update data sesuai index yg ada
- SERVER (getsant-lib.jsx) : server menjalankan query post dan data dimasukkan ke server berdasarkan id id id id id id 
