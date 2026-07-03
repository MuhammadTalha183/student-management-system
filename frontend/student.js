const fetchStudents = async () => {
    try {
        const responce = await fetch("http://localhost:5000/api/students/getStudents");
        const data = await responce.json();
        console.log(data);

        for (const student of data) {
           document.getElementById('studentsList').innerHTML += `
           <tr>
                <td> ${student.fullname} </td> <br>
                <td>${student.email}</td> <br>
                <td>${student.phone}</td><br>
                <td>${student.course}</td><br>
                <td>${student.gender}</td><br>
           </tr>
           `
        }
    } catch (error) {
        console.log(error);
    }
}

fetchStudents();