document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');

  // Hide the modal initially
  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const studentNameInput = document.getElementById('studentName');
    const personalMessageInput = document.getElementById('personalMessage');
    const courseNameInput = document.getElementById('courseName');

    const studentName = studentNameInput.value.trim();
    const personalMessage = personalMessageInput.value.trim();
    const courseName = courseNameInput.value.trim() !== '' ? courseNameInput.value : "a course"; // Fallback to "a course" if no input

    // Check if all required fields are filled
    if (studentName === '' || personalMessage === '') {
      alert('Please fill in all fields');
      return;
    }

    // Generate certificate content dynamically
    certificateContent.innerHTML = `
      <h2 style="font-weight: bold;">Certificate of Achievement</h2>
      <p>This is to certify that</p>
      <h3>${studentName}</h3>
      <p>Almost completed the course:</p>
      <h4>${courseName}</h4>
      <img id="certificateLogo" src="logo.png" alt="Logo">
      <h5 style="margin-top: 20px;">${personalMessage}</h5>
      <button id="closeCertificate" style="position: absolute; top: 40px; left: 50%; transform: translateX(-50%);">X</button>
    `;

    // Adjust the size of the logo
    const logoElement = document.getElementById('certificateLogo');
    logoElement.style.maxWidth = '180px'; // Adjust width as needed
    logoElement.style.maxHeight = 'auto'; // Adjust height as needed

    // Display the modal
    modal.style.display = 'block';

    // Clear the form inputs
    studentNameInput.value = '';
    personalMessageInput.value = '';
    courseNameInput.value = '';

    // Add event listener to close certificate button
    const closeCertificateButton = document.getElementById('closeCertificate');
    closeCertificateButton.addEventListener('click', function () {
      certificateContent.innerHTML = ''; // Clear certificate content
      modal.style.display = 'none'; // Hide the modal
    });
  });

  // Close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });
});
