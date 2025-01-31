function convertToPDF() {
    const fileInput = document.getElementById("imageUpload");
    if (!fileInput.files.length) {
        alert("Please select an image.");
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const img = new Image();
        img.src = e.target.result;

        img.onload = function () {
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF();
            pdf.addImage(img, "JPEG", 10, 10, 180, 160);
            pdf.save("converted.pdf");
        };
    };

    reader.readAsDataURL(file);
}
