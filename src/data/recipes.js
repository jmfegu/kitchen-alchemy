export const recipesStore = [
  {
    id: 1,
    title: 'In dolor mollit',
    description: 'Una receta francesa super wapa',
    category: ['Vegetariana', 'Francesa', 'Postre'],
    tags: ['ligero', 'delicioso', 'cuchareo', 'sabroso', 'copioso', 'rápido', 'sobremesa'],
    creationDate: 1678375313,
    averageRating: 5,
    promotionalImage: 'https://source.unsplash.com/random/?food',
  },
  {
    id: 2,
    title: 'Ea irure reprehenderit',
    description: 'Pos se pelan las papas y bla bla',
    category: ['Española', 'Vegetariana'],
    tags: ['clasico', 'concebollista'],
    creationDate: 1678287893,
    averageRating: 3,
    promotionalImage: 'https://source.unsplash.com/random/?food',
  },
  {
    id: 3,
    title: 'Et pariatur non sit',
    description: 'Culpa adipisicing nisi fugiat reprehenderit ipsum in.',
    category: ['Árabe', 'Vegetariana'],
    tags: ['Exótico', 'diferente', 'Nuevos sabores'],
    promotionalImage: 'https://source.unsplash.com/random/?food',
    creationDate: 1677855893,
    averageRating: 4,
    reviews: []
  },
  {
    id: 4,
    title: 'Consequat magna mollit',
    description: 'Culpa adipisicing nisi fugiat reprehenderit ipsum in.',
    category: ['Vegana'],
    promotionalImage: 'https://source.unsplash.com/random/?food',
    creationDate: 1675436693,
    averageRating: 4.5,
    reviews: []
  },
  {
    id: 5,
    title: 'Tempor sit excepteur',
    description: 'Culpa adipisicing nisi fugiat reprehenderit ipsum in.',
    category: ['Carnivoro'],
    averageRating: 2.5,
    promotionalImage: 'https://source.unsplash.com/random/?food',
    creationDate: 1643900693,
    reviews: []
  },

]


export const recipeData = {
  id: 1, // Number
  uid: 23, // Number
  title: 'Título de la receta', // String
  description: 'Descripción de la receta', // String
  originallyFrom: [''], // Array
  servings: 1, // Number - numero de comensales
  difficulty: 'Fácil', // Facil || Intermedia || Dificil || Avanzado
  category: ['Vegetariana', 'Francesa', 'Postre', 'Sin gluten'], // Array
  tags: ['ligero', 'delicioso', 'cuchareo', 'sabroso', 'copioso', 'rápido', 'sobremesa'], // Array
  ingredients: [
    {
      name: 'tomate',
      quantity: '1' // Number or String - Dependerá de si quiero modificar esto con un state en función de los comensales
    }
  ], // Array
  totalTime: 300, // Number in minutes
  creationDate: 234242, // Number TIMESTAMP
  lastModified: 143251, // Number TIMESTAMP
  averageRating: 4, // Number
  promotionalImage: 'https://unsplash.com/es/fotos/-YHSwy6uqvk', // String
  imageGallery: [ // Array - string
    'https://unsplash.com/es/fotos/HlNcigvUi4Q',
    'https://unsplash.com/es/fotos/4_jhDO54BYg',
    'https://unsplash.com/es/fotos/12eHC6FxPyg'
  ],
  reviews: [ // Array - objects
    {
      id: new Date().getTime() * Math.floor(Math.random() * 11),
      // uid: null,
      title: 'Espectacular',
      body: 'Está to weno, compadre',
      rating: 4.8
    }
  ]
}