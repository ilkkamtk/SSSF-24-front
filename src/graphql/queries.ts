const login = `
mutation Login($credentials: Credentials!) {
    login(credentials: $credentials) {
      message
      token
      user {
        email
        id
        user_name
      }
    }
  }
  `;

const checkToken = `
query CheckToken {
    checkToken {
      message
      user {
        user_name
      }
    }
  }
`;

const getAllAnimals = `
query Animals {
  animals {
    animal_name
    birthdate
    image
    species {
      image
      species_name
      category {
        category_name
      }
    }
    location {
      type
      coordinates
    }
    owner {
      user_name
    }
  }
}
`;

const getAllSpecies = `
query Species {
    species {
      id
      species_name
      category {
        id
        category_name
      }
      location {
        type
        coordinates
      }
      image
    }
  }
`;

const getAllCategories = `
query Categories {
    categories {
      category_name
      id
    }
  }
`;

const addCategory = `
mutation AddCategory($categoryName: String!) {
    addCategory(category_name: $categoryName) {
      category_name
      id
    }
  }
`;

const addSpecies = `
mutation AddSpecies($species: SpeciesInput!) {
  addSpecies(species: $species) {
    species {
      species_name
    }
  }
}
`;

const addAnimal = `
mutation AddAnimal($animal: AnimalInput!) {
  addAnimal(animal: $animal) {
    animal {
      animal_name
    }
  }
}
`;

export {
  login,
  checkToken,
  getAllAnimals,
  getAllSpecies,
  getAllCategories,
  addCategory,
  addSpecies,
  addAnimal,
};
