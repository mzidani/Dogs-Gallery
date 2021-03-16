export interface Dog {
  id: number,
  name: string,
  bred_for: string,
  breed_group: string,
  life_span: string,
  temperament: string,
  origin: string,
  reference_image_id: string,
  image: Image,
  weight: Weight,
  height: Height
}

export interface Image {
  id: string,
  width: number,
  height: number,
  url: string,
  breeds: Breed[]
}

export interface Weight {
  imperial: string,
  metric: string
}

export interface Height {
  imperial: string,
  metric: string
}

export interface Breed {
  weight: Weight,
  height: Height
  id: number,
  name: string,
  country_code: string,
  bred_for: string,
  breed_group: string,
  life_span: string,
  temperament: string,
  origin: string,
  reference_image_id: string
}

export interface DogsList {
  breed: string,
  dogs: Dog[]
}

export interface Adopter {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  number: string,
  dogId: number
}
