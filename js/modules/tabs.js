function tabs(tabsSelector, tabsParentSelector, tabsContentSelector, activeClass) {
    // Tabs

    const tabsParent = document.querySelector(tabsParentSelector),
        tabs = tabsParent.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector);
        
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide')
            item.classList.remove('show', 'fade')
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass)
        })
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.remove('hide')
        tabsContent[i].classList.add('show', 'fade')
        tabs[i].classList.add(activeClass)
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', item => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (item == target) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })
}

export default tabs;