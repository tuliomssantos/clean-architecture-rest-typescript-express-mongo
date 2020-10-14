import { RetrieveBudgetController } from "./controllers/RetrieveBudgetController";
import { RetrieveBudgetInteractor } from "./interactors/RetrieveBudgetInteractor";
import { RetrieveBudgetWebPresenter } from "./presenters/RetrieveBudgetWebPresenter";
import { RetrieveBudgetRepository } from "./repositories/RetrieveBudgetRepository";

const retrieveBudgetRepository = new RetrieveBudgetRepository();

const retrieveBudgetPresenter = new RetrieveBudgetWebPresenter();

const retrieveBudgetInteractor = new RetrieveBudgetInteractor(retrieveBudgetRepository, retrieveBudgetPresenter);

const retrieveBudgetWebController = new RetrieveBudgetController(retrieveBudgetInteractor);

export { retrieveBudgetWebController }