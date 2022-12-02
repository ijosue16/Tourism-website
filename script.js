/* eslint-disable no-restricted-globals */
const hamburger = document.querySelector('.hamburger-icon');
const mobileNav = document.querySelector('.mobile-nav-state');
const overMobileNav = document.querySelector('.mobile-nav');
const logo = document.querySelector('.logo');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
  overMobileNav.classList.toggle('active');
  logo.classList.toggle('active');
});

document.querySelectorAll('.nav-list').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  mobileNav.classList.remove('active');
  overMobileNav.classList.remove('active');
  logo.classList.remove('active');
}));

const cardsinfo = [
  {
    picture: './assets/mobile/guides/Ernest Granqvist.jpg',
    names: 'Ernest Granqvist',
    otherDescr: 'Touring Guide President',
    description: 'Meet Ernesto a specialist in management with great capability of team reqruiting.',
    accesibilitytext: 'Ernest Granqvist',
  },
  {
    picture: './assets/mobile/guides/Monica de Asis.jpg',
    names: 'Monica De Asis',
    otherDescr: 'Touring guide asisantant President',
    description: 'Specialist in team cordination Monica is the best Employee that we have.',
    accesibilitytext: 'Monica De Asis',
  },
  {
    picture: './assets/mobile/guides/Emerson Plata.jpg',
    names: 'Emerson Plata',
    otherDescr: 'Road tracking Specialist',
    description: 'Emerson ability to drive in vast area to amerliorate your experience.',
    accesibilitytext: 'Isabella Belmontes',
  },
  {
    picture: './assets/mobile/guides/Lucas Apreciedo.jpg',
    names: 'Lucas Apreciedo',
    otherDescr: 'Volorfly Specialist',
    description: 'Specialist in Volorfly and wind tracking which is a new program we offer.',
    accesibilitytext: 'Isabella Belmontes',
  },
  {
    picture: './assets/mobile/guides/Alexa Kleberson.jpg',
    names: 'Alexa Kleberson',
    otherDescr: 'Diver specialist with own recruited team',
    description: 'A well trained diver who works with a team that offer help while surfing.',
    accesibilitytext: 'Isabella Belmontes',
  },
  {
    picture: './assets/mobile/guides/Isabella Belmontes.jpg',
    names: 'Isabella Belmontes',
    otherDescr: 'Hikking Specialist with effective team',
    description: 'A specialist in mountain trecking reliable also in medical first aid as you travel the Amzon.',
    accesibilitytext: 'Isabella Belmontes',
  },
];

// const speaker = document.querySelector('.speakers');
const speakerContainer = document.querySelector('.spks');
const speakersHolder = document.createElement('div');
speakersHolder.classList.add('text-center', 'container', 'd-flex', 'flex-column', 'align-items-center', 'pb-5', 'speakersholder');
speakersHolder.id = 'Guides';

const speakerTitle = document.createElement('h2');
speakerTitle.classList.add('speaker-title');
speakerTitle.innerHTML = 'Featured speakers';

const redBar = document.createElement('p');
redBar.classList.add('red-bar');
speakersHolder.append(speakerTitle, redBar);

const speakerGrid = document.createElement('div');
speakerGrid.classList.add('row', 'speaker-container', 'gy-0');
speakerContainer.append(speakersHolder, speakerGrid);

const speakersColumns = document.createElement('div');
speakersColumns.classList.add('col-12', 'col-md-6', 'px-2', 'py-0', 'speaker-columns');

for (let i = 0; i < cardsinfo.length; i += 1) {
  const speakersColumns = document.createElement('div');
  speakersColumns.classList.add('col-12', 'col-md-6', 'px-2', 'py-0', 'speaker-columns');

  const cardRegion = document.createElement('div');
  cardRegion.classList.add('card-region', 'mb-3', 'border-0');

  const cardRow = document.createElement('div');
  cardRow.classList.add('row', 'g-0');

  const GuidesCardImg = document.createElement('div');
  GuidesCardImg.classList.add('col-5', 'guides-card-img');

  const GuidesImg = document.createElement('img');
  GuidesImg.classList.add('card-img', 'img-fluid', 'guides-img');
  GuidesImg.alt = cardsinfo[i].accesibilitytext;
  GuidesImg.src = cardsinfo[i].picture;

  const cardBodyCol = document.createElement('div');
  cardBodyCol.classList.add('col-7');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body', 'p-0');

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title', 'description-title', 'mb-1');
  cardTitle.innerHTML = cardsinfo[i].names;

  const cardText = document.createElement('p');
  cardText.classList.add('card-text', 'pb-1', 'mb-1');
  cardText.innerHTML = cardsinfo[i].otherDescr;

  const grayBar = document.createElement('p');
  grayBar.classList.add('gray-bar', 'my-2', 'mb-md-3');

  const cardText2 = document.createElement('p');
  cardText2.classList.add('card-text', 'more-description', 'pb-2');
  cardText2.innerHTML = cardsinfo[i].description;

  cardRow.append(GuidesCardImg, cardBodyCol);

  cardBody.append(cardTitle, cardText, grayBar, cardText2);
  cardBodyCol.appendChild(cardBody);
  GuidesCardImg.appendChild(GuidesImg);
  cardRegion.appendChild(cardRow);
  speakersColumns.appendChild(cardRegion);
  if (screen.width < 768) {
    if (i < 2) {
      speakerGrid.appendChild(speakersColumns);
    } else {
      speakerGrid.appendChild(speakersColumns);
      speakersColumns.classList.add('d-none');
    }
  } else {
    speakerGrid.appendChild(speakersColumns);
  }
}

if (screen.width < 768) {
  const showMoreBtn = document.createElement('div');
  showMoreBtn.classList.add('container', 'more-button', 'd-md-none');

  const showMoreContent = document.createElement('p');
  showMoreContent.classList.add('p-3', 'text-center', 'show-more');
  showMoreContent.innerHTML = 'Show More';

  const chevronUp = document.createElement('i');
  chevronUp.classList.add('bi', 'bi-chevron-down');

  showMoreContent.appendChild(chevronUp);
  showMoreBtn.appendChild(showMoreContent);
  speakerContainer.appendChild(showMoreBtn);
  const showLessBtn = document.createElement('div');
  showLessBtn.classList.add('container', 'more-button', 'd-md-none');

  const showLessContent = document.createElement('p');
  showLessContent.classList.add('p-3', 'text-center', 'show-more');
  showLessContent.innerHTML = 'Show Less';

  const chevronDown = document.createElement('i');
  chevronDown.classList.add('bi', 'bi-chevron-up');

  showLessContent.appendChild(chevronDown);
  showLessBtn.appendChild(showLessContent);

  const speakers = document.querySelectorAll('.speaker-columns');
  showMoreBtn.addEventListener('click', () => {
    showMoreBtn.classList.add('d-none');
    speakers.forEach((s) => {
      if (s.classList.contains('d-none')) {
        s.classList.remove('d-none');
      }
      speakerContainer.appendChild(showLessBtn);
    });
  });
  showLessBtn.addEventListener('click', () => {
    for (let k = 0; k < speakers.length; k += 1) {
      if (k >= 2) {
        speakers[k].classList.add('d-none');
      }
    }
    speakerContainer.removeChild(showLessBtn);
    showMoreBtn.classList.remove('d-none');
  });
}
