import { budgetModel } from "../../../database/BudgetsModel";
import { CreateBudgetDatabaseOutputDTO } from "../dataStructures/CreateBudgetDatabaseOutputDTO";
import { CreateBudgetInputDTO } from "../dataStructures/CreateBudgetInputDTO";
import { IBudgetDocument } from "../interfaces/IBudgetDocument";
import { ICreateBudgetRepository } from "../interfaces/ICreateBudgetRepository";

export class CreateBudgetRepository implements ICreateBudgetRepository {
  
  async save(budgetInput: CreateBudgetInputDTO): Promise<CreateBudgetDatabaseOutputDTO> {
    const budgetDocument = new budgetModel(budgetInput);

    const budgetData: IBudgetDocument = await budgetDocument.save();

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
