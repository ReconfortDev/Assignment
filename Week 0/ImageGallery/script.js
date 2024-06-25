// basics.js

document.addEventListener('DOMContentLoaded', function() {
    const Images = [
        {
            image: 'https://images.unsplash.com/photo-1514548383638-cef9251a73ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: "Kivu",
            description: 'Visit Rwanda in Kivu'
        },
        {
            image: 'https://images.unsplash.com/photo-1603697237145-4a77a9ce810f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: "Amateras",
            description: 'Visit Rwanda in Amateras'
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1675367607180-4c6ad3c2adda?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: "Flag",
            description: 'Visit Rwanda in Flag'
        },
        {
            image: 'https://images.unsplash.com/photo-1565349479047-d6211d4efc90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: "Defender",
            description: 'Visit Rwanda in Defender'
        },
    ];

    const slideContainer = document.getElementById('slideContainer');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const closeModalButton = document.getElementById('closeModal');

    let currentIndex = 0;

    function openModal(index) {
        currentIndex = index;
        const { image, title, description } = Images[currentIndex];
        modalImage.src = image;
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modal.style.visibiliindexty = 'visible';
        modal.style.opacity = '1';
    }

    function closeModal() {
        modal.style.visibility = 'hidden';
        modal.style.opacity = '0';
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % Images.length;
        openModal(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + Images.length) % Images.length;
        openModal(currentIndex);
    }

    Images.forEach((img, index) => {
        const singleCard = document.createElement('div');
        singleCard.classList.add('singleCard');

        const imageElement = document.createElement('img');
        imageElement.src = img.image;
        imageElement.alt = img.title;

        const details = document.createElement('span');
        details.classList.add('details');

        const title = document.createElement('h1');
        title.textContent = img.title;

        const description = document.createElement('p');
        description.textContent = img.description;

        details.appendChild(title);
        details.appendChild(description);

        singleCard.appendChild(imageElement);
        singleCard.appendChild(details);

        singleCard.addEventListener('click', () => openModal(index));

        slideContainer.appendChild(singleCard);
    });

    prevButton.addEventListener('click', showPrev);
    nextButton.addEventListener('click', showNext);
    closeModalButton.addEventListener('click', closeModal);
});
