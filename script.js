function addContact() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const vehicle = document.getElementById("vehicle").value;
    const observations = document.getElementById("observations").value;

    if (name && email && phone) {
        const table = document.getElementById("contacts-table").getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        newRow.insertCell(0).innerText = name;
        newRow.insertCell(1).innerText = email;
        newRow.insertCell(2).innerText = phone;
        newRow.insertCell(3).innerText = vehicle;
        newRow.insertCell(4).innerText = observations;

        document.getElementById("contact-form").reset();
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
    }
}

function exportPDF() {
    const { jsPDF } = window.jspdf;
    const form = document.getElementById("contact-form");

    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text("Ficha de Contato Nissan", 10, 10);
    doc.text(`Nome: ${form.name.value}`, 10, 20);
    doc.text(`Email: ${form.email.value}`, 10, 30);
    doc.text(`Telefone: ${form.phone.value}`, 10, 40);
    doc.text(`Veículo: ${form.vehicle.value}`, 10, 50);
    doc.text(`Observações: ${form.observations.value}`, 10, 60);

    doc.save(`${form.name.value}_contact.pdf`);
}

function exportExcel() {
    const table = document.getElementById("contacts-table");
    const workbook = XLSX.utils.table_to_book(table, { sheet: "Contatos" });
    XLSX.writeFile(workbook, "lista_contatos_nissan.xlsx");
}

function printPage() {
    window.print();
}
