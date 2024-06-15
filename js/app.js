document.getElementById('elsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        volatility: document.getElementById('volatility').value,
        interestRate: document.getElementById('interestRate').value,
        redemptionDates: [
            document.getElementById('redemptionDate1').value,
            document.getElementById('redemptionDate2').value,
            document.getElementById('redemptionDate3').value,
            document.getElementById('redemptionDate4').value,
            document.getElementById('redemptionDate5').value,
            document.getElementById('redemptionDate6').value
        ]
    };

    fetch('http://127.0.0.1:8080/evaluation/get-price/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        document.getElementById('result').textContent = String(Math.round(Number(JSON.stringify(data['answer'])))) + "원";
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('오류가 발생했습니다. 다시 시도해주세요.');
    });

    console.log(formData['volatility']);
    console.log(formData['interestRate']);
    console.log(formData['redemptionDates']);
});
