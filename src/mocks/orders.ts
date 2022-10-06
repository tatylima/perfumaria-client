import { OrderItemType } from "types/OrderItemType";

export const orders: OrderItemType[] = [
  {
		product: {
			id:          '354da843-18cb-4467-8c8f-45e0f594befd',
			name:        'Paris',
			description: 'Perfume Feminino 30ml',
			image:       'https://i.imgur.com/VKbt3ib.png',
			price:       299.99,
		},
		quantity: 1,
		observation: 'Teste',
	},
	{
		product: {
			id:          '354da843-18cb-4467-8c8f-45e0f594befd',
			name:        'Ferragamo',
			description: 'Perfume masculino',
			image:       'https://i.imgur.com/fagW9Hh.png',
			price:       537.00,
		},
		quantity: 3,
		observation: '',
	},
	{
		product: {
			id:          '354da843-18cb-4467-8c8f-45e0f594befd',
			name:        'Narciso Rodrigues',
			description: 'Perfume Masculino',
			image:       'https://i.imgur.com/nvM1qGL.jpg',
			price:       478.00,
		},
		quantity: 2,
		observation: '',
	},
];