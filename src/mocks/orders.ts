import { OrderItemType } from "types/OrderItemType";

export const orders: OrderItemType[] = [
  {
		product: {
			id:          '354da843-18cb-4467-8c8f-45e0f594befd',
			name:        'Paris',
			description: 'Perfume Feminino 30ml',
			image:       'https://drive.google.com/file/d/1Wk_5xvGOglewj0m0Cv-t8m6epwCkyn0v/view?usp=sharing',
			price:       299.99,
		},
		quantity: 1,
		observation: '',
	},
	{
		product: {
			id:          '69b772ce-815f-4d59-a7e8-fc3ae949338e',
			name:        'Ferragamo',
			description: 'Perfume masculino',
			image:       'https://drive.google.com/file/d/1W_CRSXAQEjLMjFE7LomtcgZRjtdPadsz/view?usp=sharing',
			price:       537.00,
		},
		quantity: 3,
		observation: '',
	},
	{
		product: {
			id:          '9706e438-56ee-4ad5-b140-48fc2abcad81',
			name:        'Narciso Rodrigues',
			description: 'Perfume Masculino',
			image:       'https://drive.google.com/file/d/1TYisiXVRj31HsJoy7jaBTt-A14tBkp1d/view?usp=sharing',
			price:       478.00,
		},
		quantity: 2,
		observation: '',
	},
];