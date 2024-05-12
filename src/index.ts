import { ItemPresenter } from './components/TodoPresenter';
import { TodoModel } from './components/TodoModel';
import "./styles/styles.css"
import {Form} from "./components/Form"
import {Item} from "./components/Item"
import {todos} from "./utils/constants";
import {Page} from "./components/Page";
import {Popup} from './components/Popup';

const contentElement = document.querySelector('.content') as HTMLElement;

const popupElement = document.querySelector('.popup') as HTMLElement;

const itemContainer = new Page(contentElement)

const todoArray = new TodoModel()
todoArray.items = todos;

const modal = new Popup(popupElement)

const itemPresenter = new ItemPresenter(todoArray, Form, itemContainer, Item, modal);

itemPresenter.init()
itemPresenter.renderView()


// console.log(todoArray.items.map(item => item))
// console.log(todoArray.addItem('Создать класс с данными'))
// console.log(todoArray.items)
// todoArray.removeItem('2')
// console.log(todoArray.items)