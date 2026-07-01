const form = document.getElementById('studentForm');

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


const fetchStudents = async () => {
    try {
        const responce = await fetch("http://localhost:5000/api/students/getStudents");
        const data = await responce.json();
        console.log(data);

        for (let student of data ) {
            document.write(`studentName : ${student.fullname} <br> studentEmail : ${student.email} <br> studentPhone : ${student.phone} <br> studentCourse : ${student.course} <br> studentGender : ${student.gender} <br><br>`);
        }
    } catch (error) {
        console.log(error);
    }
}

fetchStudents();