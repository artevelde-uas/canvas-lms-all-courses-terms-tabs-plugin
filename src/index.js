import translations from './i18n.json';


export default function ({ router, dom, i18n, i18n: { translate: __ } }) {

    function fixCourseTable(el) {
        let rows = Array.from(el.querySelectorAll('tbody > tr'));
        let cells = Array.from(el.querySelectorAll('td.course-list-term-column'));
        let terms = cells.map(el => el.innerText.trim()).filter((value, index, self) => (self.indexOf(value) === index));
        let tabs = document.createElement('div');

        tabs.classList.add('ui-tabs-minimal', 'ui-tabs', 'ui-widget', 'ui-widget-content', 'ui-corner-all');
        tabs.innerHTML = `
            <ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist">
                <li class="ui-state-default ui-corner-top ui-tabs-active ui-state-active" role="tab">
                    <a class="ui-tabs-anchor" role="presentation">${__('all_terms')}</a>
                </li>
                ${terms.map(term => `
                    <li class="ui-state-default ui-corner-top" role="tab">
                        <a class="ui-tabs-anchor" role="presentation">${term}</a>
                    </li>
                `).join('')}
            </ul>
        `;

        tabs.addEventListener('click', e => {
            let tab = e.target.closest('li');

            if (tab === null) return;

            tabs.querySelector('.ui-tabs-active').classList.remove('ui-tabs-active', 'ui-state-active');
            tab.classList.add('ui-tabs-active', 'ui-state-active');

            rows.forEach(row => {
                let cell = row.querySelector('td.course-list-term-column');

                if (cell === null) return;

                if (cell.innerText.trim() === tab.innerText || tab.innerText === __('all_terms')) {
                    row.removeAttribute('hidden');
                } else {
                    row.setAttribute('hidden', 'hidden');
                }
            });
        });

        el.parentNode.insertBefore(tabs, el);
    }

    i18n.setTranslations(translations);

    router.onRoute('courses', () => {
        dom.onElementAdded('#my_courses_table', fixCourseTable);
        dom.onElementAdded('#past_enrollments_table', fixCourseTable);
    });
}
