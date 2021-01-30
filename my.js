// ticket quantity event handler function. This function set index.html by onclick 
function handleTicketChange(ticketClass, isIncrease) {
    const ticketClassInput = document.getElementById(ticketClass + "-input ").value;

    let ticketClassInputTotal = ticketClassInput;
    if (isIncrease == true) {
        ticketClassInputTotal = +ticketClassInput + 1;
    }
    if (isIncrease == false && ticketClassInput > 0) {
        ticketClassInputTotal = +ticketClassInput - 1;
    }
    document.getElementById(ticketClass + "-input ").value = ticketClassInputTotal;
    let totalFare = 0;
    if (ticketClass == 'first-class') {
        totalFare = ticketClassInputTotal * 150;
    }
    if (ticketClass == 'economy') {
        totalFare = ticketClassInputTotal * 100;
    }
    totalCalculator();
}
// subtotal-total event handler function
function totalCalculator() {
    const firstClassInput = document.getElementById("first-class-input ").value;
    const economyInput = document.getElementById("economy-input ").value;
    const subtotal = (+firstClassInput) * 150 + (+economyInput) * 100;
    document.getElementById("subtotal-amount ").innerText = subtotal;
    const totalVat = +subtotal * 0.1;
    document.getElementById("vat-amount ").innerText = totalVat;
    const total = subtotal + totalVat;
    document.getElementById("total-amount ").innerText = total;

}

// Booking confirm message event handler
document.getElementById("book-button ").addEventListener('click', function() {
    document.getElementById('booking-area').style.display = 'none';
    document.getElementById('message').style.display = 'block';
});