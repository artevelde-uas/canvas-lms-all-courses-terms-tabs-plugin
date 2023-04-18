import { router, dom } from '@artevelde-uas/canvas-lms-app';
import t from './i18n';


function fixCourseTable(el) {
    const rows = Array.from(el.querySelectorAll('tbody > tr'));
    const cells = Array.from(el.querySelectorAll('td.course-list-term-column'));
    const terms = cells.map(el => el.innerText.trim()).filter((value, index, self) => (self.indexOf(value) === index));
    const tabs = document.createElement('div');

    tabs.classList.add('ui-tabs-minimal', 'ui-tabs', 'ui-widget', 'ui-widget-content', 'ui-corner-all');
    tabs.innerHTML = `
        <ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist">
            <li class="ui-state-default ui-corner-top ui-tabs-active ui-state-active" role="tab">
                <a class="ui-tabs-anchor" role="presentation">${t('all_terms')}</a>
            </li>
            ${terms.map(term => `
                <li class="ui-state-default ui-corner-top" role="tab">
                    <a class="ui-tabs-anchor" role="presentation">${term}</a>
                </li>
            `).join('')}
        </ul>
    `;

    tabs.addEventListener('click', e => {
        const tab = e.target.closest('li');

        if (tab === null) return;

        tabs.querySelector('.ui-tabs-active').classList.remove('ui-tabs-active', 'ui-state-active');
        tab.classList.add('ui-tabs-active', 'ui-state-active');

        rows.forEach(row => {
            const cell = row.querySelector('td.course-list-term-column');

            if (cell === null) return;

            if (cell.innerText.trim() === tab.innerText || tab.innerText === t('all_terms')) {
                row.removeAttribute('hidden');
            } else {
                row.setAttribute('hidden', 'hidden');
            }
        });
    });

    el.parentNode.insertBefore(tabs, el);
}

export default function () {
    router.onRoute('courses', () => {
        dom.onElementAdded('#my_courses_table', fixCourseTable);
        dom.onElementAdded('#past_enrollments_table', fixCourseTable);
    });

    return {
        ...require('../package.json'),
        title: t('package.title'),
        description: t('package.description')
    };
}
