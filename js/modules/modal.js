function openModal(modalSelector, modalTimer) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'

    if (modalTimer) {
        clearInterval(modalTimer)
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}

function modal(openSelector, modalSelector, modalTimer) {
    // Modal

    const modalOpenBtn = document.querySelectorAll(openSelector),
    // modalCloseBtn = document.querySelector('[data-close]'),
    modal = document.querySelector(modalSelector);

    modalOpenBtn.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimer))
    })

    // modalCloseBtn.addEventListener('click', closeModal)

    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.getAttribute('data-close') == '') {
            closeModal(modalSelector)
        }
    })

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector)
        }
    })

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 0.5) {
            openModal(modalSelector, modalTimer);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {openModal, closeModal};