import { Budget } from "../../../entities/Budget";
import { CreateBudgetInputDTO } from "../dataStructures/CreateBudgetInputDTO";
import { CreateBudgetOutputDTO } from "../dataStructures/CreateBudgetOutputDTO";
import { ICreateBudgetRepository } from "../interfaces/ICreateBudgetRepository";
import { ICreateBudgetInputPort } from "../interfaces/ICreateBudgetInputPort";
import { ICreateBudgetOutputPort } from "../interfaces/ICreateBudgetOutputPort";

class CreateBudgetInteractor implements ICreateBudgetInputPort {
  constructor(
    private createBudgetRepository: ICreateBudgetRepository,
    private createBudgetPresenter: ICreateBudgetOutputPort
  ) {}


  async create(
    budgetInput: CreateBudgetInputDTO
  ): Promise<CreateBudgetOutputDTO> {
    
      const budgetData = await this.createBudgetRepository.save(budgetInput);
    

      const budget: Budget = {
        id: budgetData.id,
        date: budgetData.date,
        value: budgetData.value,
        createdAt: budgetData.createdAt,
        updatedAt: budgetData.updatedAt,
      };

      return this.createBudgetPresenter.present(budget);
  }
}

export { CreateBudgetInteractor };
