import { CreateBudgetDatabaseOutputDTO } from "../dataStructures/CreateBudgetDatabaseOutputDTO";
import { CreateBudgetInputDTO } from "../dataStructures/CreateBudgetInputDTO";

export interface ICreateBudgetRepository {
  save(
    budgetInput: CreateBudgetInputDTO
  ): Promise<CreateBudgetDatabaseOutputDTO>;
}
