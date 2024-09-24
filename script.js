const models = [
    { src: '../models/AugA3/AugA3Teste.glb', alt: 'Aug A3 Teste' },
    { src: 'model2.glb', alt: 'Modelo 2' },
    { src: 'model3.glb', alt: 'Modelo 3' },
    { src: 'model4.glb', alt: 'Modelo 4' },
    { src: 'model5.glb', alt: 'Modelo 5' },
    { src: 'model6.glb', alt: 'Modelo 6' },
    { src: 'model7.glb', alt: 'Modelo 7' },
    { src: 'model8.glb', alt: 'Modelo 8' },
    { src: 'model9.glb', alt: 'Modelo 9' },
    { src: 'model10.glb', alt: 'Modelo 10' },
    { src: 'model11.glb', alt: 'Modelo 11' },
    { src: 'model12.glb', alt: 'Modelo 12' }
];

const modelsPerPage = 9;
let currentPage = 1;

function displayModels() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    const startIndex = (currentPage - 1) * modelsPerPage;
    const endIndex = startIndex + modelsPerPage;
    const paginatedModels = models.slice(startIndex, endIndex);

    paginatedModels.forEach(model => {
        const modelCard = document.createElement('div');
        modelCard.className = 'model-card';
        modelCard.innerHTML = `
            <model-viewer src="${model.src}" alt="${model.alt}" camera-controls></model-viewer>
            <p>${model.alt}</p>
        `;
        gallery.appendChild(modelCard);
    });

    displayPagination();
}

function displayPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(models.length / modelsPerPage);
    
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = 'page-button';
        pageButton.textContent = i;
        pageButton.onclick = () => {
            currentPage = i;
            displayModels();
        };
        pagination.appendChild(pageButton);
    }
}

// Inicializa a galeria na primeira página
displayModels();
