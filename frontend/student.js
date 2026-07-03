const fetchStudents = async () => {

    try {

        const response = await fetch(
            "http://localhost:5000/api/students/getStudents"
        );

        const students = await response.json();

        const studentsList = document.getElementById("studentsList");

        studentsList.innerHTML = "";

        students.forEach((student,index)=>{

            studentsList.innerHTML += `

            <tr>

                <td>${index+1}</td>

                <td>${student.fullname}</td>

                <td>${student.email}</td>

                <td>${student.phone}</td>

                <td>${student.course}</td>

                <td>${student.gender}</td>

            </tr>

            `;

        });

    } catch (error) {

        console.log(error);

    }

}

fetchStudents();