document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const amount = document.getElementById('add-amount');
    const pin = document.getElementById('pin');
    const account = document.getElementById('account').value;

    if (account.length === 11) {
        if (pin === 1234) {

        }
        else {
            alert("Invalid Pin");
        }
    }
    else {
        alert("Invalid Account Number");
    }
});