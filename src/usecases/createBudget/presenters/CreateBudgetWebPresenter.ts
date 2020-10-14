import { Budget } from "../../../entities/Budget";
import { CreateBudgetOutputDTO } from "../dataStructures/CreateBudgetOutputDTO";
import { ICreateBudgetOutputPort } from "../interfaces/ICreateBudgetOutputPort";

export class CreateBudgetWebPresenter implements ICreateBudgetOutputPort {

  private formatDate(date: Date){
    let day = date.getDate().toString();
    day = (day.length === 1) ? '0'+day : day;
    let month = (date.getMonth()+1).toString();
    month =  (month.length == 1) ? '0'+month : month;
    let year = date.getFullYear();
    return `${day}/${month}/${year}`
  }

  present(budget: Budget): CreateBudgetOutputDTO {
    return {
      id: budget.id,
      date: this.formatDate(budget.date),
      value: budget.value,
      createdAt: this.formatDate(budget.createdAt),
      updatedAt: this.formatDate(budget.updatedAt),
    };
  }
}