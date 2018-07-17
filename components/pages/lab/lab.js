/* globals $, introJs */

export default () => {
  if ($('#lab').length > 0) {
    const startIntro = () => {
      const intro = introJs();
      intro.setOptions({
        buttonClass: 'btn btn-secondary btn-sm mt-4',
        tooltipPosition: 'auto',
        positionPrecedence: ['bottom', 'top', 'right', 'left'],
        scrollTo: 'tooltip',
        steps: [
          {
            intro:
              "This is the laboratory's homepage. <b>It serves to guide the visitors to the different sub-contents</b>. The main contents are projects and publications. Here is the hierarchical order that we are proposing.",
          },
          {
            element: '#step1',
            intro:
              'Define the <b>laboratory title</b> and a <b>cover image</b> using the <a href="/#/components/hero" target="_blank">hero</a> component or only <b>a title</b>, if there is no cover, using the following step structure.',
          },
          {
            element: '#step2',
            intro:
              'Type a <b>succinct introduction paragraph</b> wrapped inside a <code>.container-grid</code> (the title can also be added here)',
          },
          {
            element: '#step3',
            intro: `
            <p>
              This section is intended to <b>provide the context of the laboratory</b>. It is possible for a laboratory to belong to several institutes and/or faculties. If this is the case, we advise you to use a teaser that brings the visitor to a listing page, rather than putting them all on the lab’s homepage. Laboratories can have themes that categorize them. It is recommended to use component “tag” to list them.
            </p>
            <p>
              For this part, you can use some of the <a href="/#/components/teaser-mission" target="_blank">Teaser mission</a> components : <b>Faculty</b> and <b>Institute</b>. The themes are based on the <a href="/#/content/tag" target="_blank">tag</a> component.
            </p>
            `,
          },
          {
            element: '#step4',
            intro: `
              The main objective of a laboratory is to show the projects that are carried out there. In this section, you can use the <a href="/#/components/teaser-mission" target="_blank">Teaser mission</a>  component (<b>Research project</b>) to show them. We advise you to put a <b>maximum of 3 projects</b> on the lab’s homepage and then put a link to the page that lists all the projects.
            `,
          },
          {
            element: '#step5',
            intro: `
              Laboratories also produce publications. You can list <b>up to 5</b> here with the <a href="/#/components/publication" target="_blank">Publication</a> component and add a link to the page that lists all the publications.
            `,
          },
          {
            element: '#step6',
            intro: `
              If you have some news about your laboratory, you can list the latest at this location. We advise you not to list too much (maximum 2) and use the component <a href="/#/components/news" target="_blank">Teaser mission</a>  component (<b>Basic teaser</b>) and add a link to all news page.
            `,
          },
          {
            element: '#step7',
            intro: `
              <b>Several people may want to contact</b> the laboratory: press, potential collaborators, people interested in your work or simply people who want to know where you are located. That’s why we recommend using the <a href="/#/components/contact" target="_blank">Contact</a> component (<b>Banner</b>) that gives all this information.
            `,
          },
          {
            element: '#step8',
            intro: `
              Some visitors may want to ask you questions or <b>see who composes the laboratory's team</b>. It is possible to link to the team page using the <a href="/#/components/teaser-basic-page" target="_blank">Teaser basic page</a> component.
            `,
          },
          {
            element: '#step9',
            intro: `
              It is possible that you have sponsors. On a second column, you can list them thanks to the <a href="/#/components/media" target="_blank">Media</a> component (<b>Sponsor</b>).
            `,
          },
        ],
      });
      intro.start();
    };

    $('#start').click(() => startIntro());
  }
};
