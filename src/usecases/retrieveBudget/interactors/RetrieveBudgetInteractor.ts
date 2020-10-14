import { Budget } from "../../../entities/Budget";
import { RetrieveBudgetInputDTO } from "../ds/RetrieveBudgetInputDTO";
import { RetrieveBudgetOutputDTO } from "../ds/RetrieveBudgetOutputDTO";
import { IRetrieveBudgetInputPort } from "../interfaces/IRetrieveBudgetInputPort";
import { IRetrieveBudgetOutputPort } from "../interfaces/IRetrieveBudgetOutputPort";
import { IRetrieveBudgetRepository } from "../interfaces/IRetrieveBudgetRepository";

export class RetrieveBudgetInteractor implements IRetrieveBudgetInputPort {
  constructor(
    private retrieveBudgetRepository: IRetrieveBudgetRepository,
    private retrieveBudgetPresenter: IRetrieveBudgetOutputPort
  ) {}

  async retrieve(
    retrieveInput: RetrieveBudgetInputDTO
  ): Promise<RetrieveBudgetOutputDTO> {
      const budgetData = await this.retrieveBudgetRepository.find(retrieveInput);

      const budget: Budget = {
        id: budgetData.id,
        date: budgetData.date,
        value: budgetData.value,
        createdAt: budgetData.createdAt,
        updatedAt: budgetData.updatedAt,
      };

      return this.retrieveBudgetPresenter.present(budget)
  }
}
