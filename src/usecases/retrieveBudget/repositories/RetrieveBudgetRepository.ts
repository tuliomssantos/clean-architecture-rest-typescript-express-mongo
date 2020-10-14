import { budgetModel } from "../../../database/BudgetsModel";
import { CreateBudgetDatabaseOutputDTO } from "../../createBudget/dataStructures/CreateBudgetDatabaseOutputDTO";
import { RetrieveBudgetDatabaseOutputDTO } from "../ds/RetrieveBudgetDatabaseOutputDTO";
import { RetrieveBudgetInputDTO } from "../ds/RetrieveBudgetInputDTO";
import { IRetrieveBudgetRepository } from "../interfaces/IRetrieveBudgetRepository";

export class RetrieveBudgetRepository implements IRetrieveBudgetRepository {
  async find(
    retrieveInput: RetrieveBudgetInputDTO
  ): Promise<RetrieveBudgetDatabaseOutputDTO> {
     const budgetData = await budgetModel.findById(retrieveInput.id);
    const budgetOutputDatabase: CreateBudgetDatabaseOutputDTO = {
      id: String(budgetData._id),
      date: budgetData.date,
      value: budgetData.value,
      createdAt: budgetData.createdAt,
      updatedAt: budgetData.updatedAt,
    };
    return budgetOutputDatabase;
  }
}
