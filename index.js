import { List } from "./src/components/list/List.js"
import { cars, phoneBook, people } from "./src/api/data.js"
import { api_phoneBook } from './src/api/api_phoneBook.js'
import { api_cars } from './src/api/api_cars.js'
import { api_people } from './src/api/api_people.js'

new List ('#phonebook', phoneBook, api_phoneBook)
new List ('#cars', cars, api_cars)
new List ('#people', people, api_people)