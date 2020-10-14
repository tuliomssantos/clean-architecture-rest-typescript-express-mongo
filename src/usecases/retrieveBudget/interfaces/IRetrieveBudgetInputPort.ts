import { RetrieveBudgetInputDTO } from "../ds/RetrieveBudgetInputDTO";
import { RetrieveBudgetOutputDTO } from "../ds/RetrieveBudgetOutputDTO";

export interface IRetrieveBudgetInputPort {
retrieve(retrieveInput: RetrieveBudgetInputDTO): Promise<RetrieveBudgetOutputDTO>
}
