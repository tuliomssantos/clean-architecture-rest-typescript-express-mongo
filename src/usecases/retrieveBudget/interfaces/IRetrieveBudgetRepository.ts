import { RetrieveBudgetDatabaseOutputDTO } from "../ds/RetrieveBudgetDatabaseOutputDTO";
import { RetrieveBudgetInputDTO } from "../ds/RetrieveBudgetInputDTO";

export interface IRetrieveBudgetRepository {
find(retrieveInput: RetrieveBudgetInputDTO): Promise<RetrieveBudgetDatabaseOutputDTO>
}

// <Interface>
// IRetrieveBudgetRepository

