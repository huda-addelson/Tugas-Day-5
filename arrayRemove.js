// Buatlah script yang dapat menghilangkan "Jambu" yang terdapat pada array berikut

const fruits = ["Jeruk", "Pepaya", "Jambu", "Anggur", "Melon"];

// Menghapus array berdasarkan index dengan menggunakan method splice
fruits.splice(2, 1); // (start, deleteCount);

console.log(fruits);
