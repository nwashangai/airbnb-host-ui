import { HOME_SCREEN } from 'constantValues';

export const initialState: any = {
  screen: HOME_SCREEN,
  showToast: false,
  success: false,
  toastMessage: '',
  hostData: {
    typeOfRoom: 'Entire place',
    numberOfGuests: '1 guest',
    location: '',
    numberOfBedrooms: 'Studio',
    guests: 0,
    beds: 1,
    arrangements: {
      'Sofa bed': 0,
      Couch: 0,
      'Floor mattrass': 0
    },
    country: 'Afghanistan',
    address: '',
    typeOfHouse: '',
    city: '',
    state: '',
    zipCode: '',
    essentials: false,
    wifi: false,
    tv: false,
    heat: false,
    ac: false,
    iron: false
  },
  isLoading: false
};
