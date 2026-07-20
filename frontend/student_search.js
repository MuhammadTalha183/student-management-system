const searchForm = document.getElementById('searchForm');
const searchQuery = document.getElementById('searchQuery');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = searchQuery.value.trim();


    try {
        const response = await fetch(
            `http://localhost:5000/api/students/getStudentById?query=${query}`
        );
        const students = await response.json();
        console.log(students);
    } catch (error) {
        console.error('Error searching students:', error);
    }
    
});