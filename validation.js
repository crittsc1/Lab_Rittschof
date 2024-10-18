function validateForm() {
    
    var lname = document.getElementById("lname").value;
    
    if (lname === "") {
        alert("Please enter a Last name.")
        return false
    }
    else {
        return true
    }
}