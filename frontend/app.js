// NAVBAR CODE 
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-list');

    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

// STUDENT FORM CODE


const form = document.getElementById('admissionForm');

form.addEventListener('submit',async function(event) {
    event.preventDefault();

    const studentData = {
        fullname: document.getElementById('fullname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        course: document.getElementById('course').value,
        gender: document.getElementById('gender').value
    };

       try {

        const response = await fetch(
            "http://localhost:5000/api/students/add-student",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(studentData)
            }
        );
        const data = await response.json();
        alert(data.message);

        form.reset();

    } catch (error) {
        console.log(error);
    }

});


