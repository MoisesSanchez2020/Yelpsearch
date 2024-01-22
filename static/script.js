document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const term = document.getElementById('term').value;
    const location = document.getElementById('location').value;

    fetch('http://localhost:5000/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ term, location }),
    })
    .then(response => response.json())
    .then(data => {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = ''; // Clear previous results

        const businesses = data.businesses;

        if (businesses.length === 0) {
            resultsDiv.innerHTML = '<p>No results found.</p>';
            return;
        }

        // Display the business data
        businesses.forEach(business => {
            const fullAddress = `${business.location.address1}, ${business.location.city}, ${business.location.zip_code}`;
            resultsDiv.innerHTML += `
                <div class="business">
                    <h2>${business.name}</h2>
                    <p class="address">Address: ${fullAddress}</p>
                    <p class="phone">Phone: ${business.display_phone}</p>
                    <a class="yelp-link" href="${business.url}" target="_blank">Visit on Yelp</a>
                </div>
            `;
        });

        // Enable the export button
        document.getElementById('exportButton').disabled = false;

        // Create and trigger the export to CSV functionality when the export button is clicked
        document.getElementById('exportButton').addEventListener('click', function() {
            const csvData = businesses.map(business => ({
                Name: business.name,
                Address: `${business.location.address1}, ${business.location.city}, ${business.location.zip_code}`,
                Phone: business.display_phone,
                Yelp_Link: business.url,
            }));

            exportToCSV(csvData);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Function to export data to CSV
function exportToCSV(data) {
    const csvContent = 'data:text/csv;charset=utf-8,' + 
        data.map(row => Object.values(row).join(',')).join('\n');
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'yelp_data.csv');
    document.body.appendChild(link); // Append the link to the page
    link.click(); // Trigger the download
}
