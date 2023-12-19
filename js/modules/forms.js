import {closeModal, openModal } from "./modal";
import {postData} from "../services/services";

function forms(modalTimer) {
    // Forms

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Данные успешно отправлены!',
        failure: 'Что-то пошло не так :('
    };

    forms.forEach(item => bindPostData(item));



    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img')
            statusMessage.classList.add('loading')
            statusMessage.src = message.loading
            form.insertAdjacentElement('afterend', statusMessage)

            const formData = new FormData(form);

            // let object = {}

            // formData.forEach((key, item) => {
            //     object[key] = item
            // })

            const json = JSON.stringify(Object.fromEntries(formData.entries()))

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data)
                showThanksModal(message.success)
                statusMessage.remove()
            }).catch(() => {
                showThanksModal(message.failure)
            }).finally(() => {
                form.reset()
            })
        })
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog')
        prevModalDialog.classList.add('hide')
        openModal('.modal', modalTimer)

        const thanksModal = document.createElement('div')
        thanksModal.classList.add('modal__dialog')
        thanksModal.innerHTML = 
        `   <div class="modal__content">
                <div data-close class="modal__close">x</div>
                <div class="modal__title">${message}</div>
            </div>`
        
        document.querySelector('.modal').append(thanksModal)
        setTimeout(() => {
            thanksModal.remove()
            prevModalDialog.classList.add('show')
            prevModalDialog.classList.remove('hide')
            closeModal('.modal')
        }, 4000)
    };
}

export default forms;