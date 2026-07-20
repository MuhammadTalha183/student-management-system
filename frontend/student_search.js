const searchForm = document.getElementById('searchForm');
const searchQuery = document.getElementById('searchQuery');
// 2. Select your newly created HTML display node
const resultsContainer = document.getElementById('resultsContainer'); 

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = searchQuery.value.trim();

    if (!query) return;

    // Clear previous search outputs and show a loading placeholder
    resultsContainer.innerHTML = '<p class="status-msg">Searching...</p>';

    try {
        const response = await fetch(
            `http://localhost:5000/api/students/search?query=${encodeURIComponent(query)}`
        );
        
        const students = await response.json();
        
        // Clear the loading message
        resultsContainer.innerHTML = '';

        // 3. Handle Backend Error Responses (like 404 or 500)
        if (response.status !== 200 || students.success === false) {
            resultsContainer.innerHTML = `<p class="error-msg">${students.message || 'No students found.'}</p>`;
            return;
        }

        // 4. Loop over the array and inject dynamic HTML structure
        students.forEach(student => {
            const studentCard = document.createElement('div');
            studentCard.className = 'student-card';
            
            // Adjust the property keys inside ${} to match your PostgreSQL column names precisely!
            studentCard.innerHTML = `
    <h3>${student.fullname}</h3> <!-- Changed name to student_name -->
    <p><strong>ID:</strong> ${student.id}</p>
    <p><strong>Email:</strong> ${student.email || 'N/A'}</p>
`;

            
            resultsContainer.appendChild(studentCard);
        });

    } catch (error) {
        console.error('Error searching students:', error);
        resultsContainer.innerHTML = '<p class="error-msg">Failed to connect to the server.</p>';
    }
});
