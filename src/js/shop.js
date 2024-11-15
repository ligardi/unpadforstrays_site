let link = document.getElementById("link");

//Order ID generator
function generateRandomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let result = ""
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      result += characters[randomIndex]
    }
    return result
};

function clearForm() {
    document.getElementById("myForm").reset();
    document.getElementById("myForm2").reset();
    link.classList.add("hidden");
}

function store() {
    // Get all checkboxes with the name "shop"
    let checkboxes = document.querySelectorAll('input[name="shop"]:checked');
    // Extract the value of each checked checkbox
    let checkedItems = Array.from(checkboxes).map(checkbox => checkbox.value);   
    //Read input nama & alamat
    let nama = document.getElementById("nama").value;
    let alamat = document.getElementById("alamat").value;
    //Order ID
    let IDpesanan = generateRandomString(6);
    // Log the checked items to the console
    console.log(checkedItems);
    let message = `Order ID: ${IDpesanan}, Name: ${nama}, Alamat: ${alamat}, Order: ${checkedItems}`
    console.log(message);
    //Input di Order Summary Box
    document.getElementById("orderku").value = message;
    //remove class tailwind hidden agar tombol kontak WhatsApp keluar
    link.classList.remove("hidden");  
}
