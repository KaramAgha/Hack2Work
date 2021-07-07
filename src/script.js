function updateTextInput(val) {
    document.getElementById('miles').innerText=val+" miles";
}

function displaySuggestions() {
    const postcode = document.getElementById('postcode').value;
    let distance = document.getElementById('distance').value;
    if (postcode === "M4 4AQ" && distance < 10) {
        document.getElementById('outcome').innerText = "In your area, there are 1,500 jobs in marketing.";
    } else if (postcode === "M4 4AQ" && distance >= 10) {
        document.getElementById('outcome').innerText = "In your area, there are 4,500 jobs in marketing.";
    }
    
}