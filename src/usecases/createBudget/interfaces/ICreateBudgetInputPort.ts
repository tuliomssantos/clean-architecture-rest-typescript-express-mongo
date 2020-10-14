import { CreateBudgetInputDTO } from "../dataStructures/CreateBudgetInputDTO";
import { CreateBudgetOutputDTO } from "../dataStructures/CreateBudgetOutputDTO";


export interface ICreateBudgetInputPort {
    create(budgetInput: CreateBudgetInputDTO): Promise<CreateBudgetOutputDTO>
}