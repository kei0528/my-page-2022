const liveInDESince = new Date().getFullYear() - 2007;

const plot = [
  { message: 'Ein wilder Keisuke ist erscheint!', option: null },
  {
    message: '',
    option: [
      { label: 'Ansprechen', handler: '' },
      { label: 'Blog lesen', handler: '' },
      { label: 'Kontaktieren', handler: '' },
      { label: 'Angreifen', handler: '' }
    ]
  }
];

const introduction = ['Hej! Ich bin Keisuke, der Frontend Developer aus Japan!', `Ich wohne seit ${liveInDESince} Jahren.`, 'Ich liebe Programmieren, Pilze sammeln und Kaffee!'];

export const useCompState = () => {
  return {};
};
