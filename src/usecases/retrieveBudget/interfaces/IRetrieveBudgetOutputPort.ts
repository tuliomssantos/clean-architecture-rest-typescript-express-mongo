import { Budget } from "../../../entities/Budget";
import { RetrieveBudgetOutputDTO } from "../ds/RetrieveBudgetOutputDTO";

export interface IRetrieveBudgetOutputPort {
  present(budget: Budget): RetrieveBudgetOutputDTO
}