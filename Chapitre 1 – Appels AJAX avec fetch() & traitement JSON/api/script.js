fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        console.log('données recues:', data);
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
    });