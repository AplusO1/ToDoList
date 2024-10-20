import { EventEmitter } from './EventEmitter';
import {IItem} from "../types/index"
import { IEvents } from "./EventEmitter";

export interface IViewItem extends IEvents{
  id: string;
  name: string;
  render(item: IItem): HTMLElement;
}

export interface IViewItemConstructor {
  new (template: HTMLTemplateElement): IViewItem
}


 export class Item extends EventEmitter implements IViewItem {
  protected itemElement: HTMLElement;
  protected title: HTMLElement;
  protected _id: string;
  protected copyButton: HTMLButtonElement;
  protected deleteButton: HTMLButtonElement;
  protected editButton: HTMLButtonElement;


  constructor(template: HTMLTemplateElement) {
    super()
    this.itemElement = template.content.querySelector('.todo-item').cloneNode(true) as HTMLElement;
    this.title = this.itemElement.querySelector('.todo-item__text');
    this.copyButton = this.itemElement.querySelector('.todo-item__copy') 
    this.deleteButton = this.itemElement.querySelector('.todo-item__del')
    this.editButton = this.itemElement.querySelector('.todo-item__edit')

    this.deleteButton.addEventListener('click', () => this.emit('delete', {id: this.id}));
    this.copyButton.addEventListener('click', () => this.emit('copy', {id: this.id}));
    this.editButton.addEventListener('click', () => this.emit('edit', {id: this.id}));
  }

  set id(value: string) {
    this._id = value;
  }

  get id(): string {
    return this._id || '';
  }

  set name(value: string) {
    this.title.textContent = value;
  }

  get name(): string {
    return this.title.textContent || '';
  }

  render(item: IItem) {
    this.name = item.name;
    this.id = item.id;
    return this.itemElement;
  }
 }