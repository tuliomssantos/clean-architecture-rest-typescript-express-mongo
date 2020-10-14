import { Budget } from "../../../entities/Budget";
import { RetrieveBudgetOutputDTO } from "../ds/RetrieveBudgetOutputDTO";
import { IRetrieveBudgetOutputPort } from "../interfaces/IRetrieveBudgetOutputPort";


export class RetrieveBudgetPrinterPresenter implements IRetrieveBudgetOutputPort {
    present(budget: Budget): RetrieveBudgetOutputDTO {
        return {
            id: budget.id,
            date: budget.date,
            value: budget.value,
            createdAt: budget.createdAt,
            updatedAt: budget.updatedAt,
          };
    }
}
