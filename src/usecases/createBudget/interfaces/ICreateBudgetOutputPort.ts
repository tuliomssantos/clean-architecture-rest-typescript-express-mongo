import { Budget } from "../../../entities/Budget";
import { CreateBudgetOutputDTO } from "../dataStructures/CreateBudgetOutputDTO";

export interface ICreateBudgetOutputPort {
    present(budget: Budget): CreateBudgetOutputDTO
}