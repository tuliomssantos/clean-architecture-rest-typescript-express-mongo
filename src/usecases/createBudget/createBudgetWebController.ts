import { CreateBudgetController } from "./controllers/CreateBudgetController";
import { CreateBudgetRepository } from "./repositories/CreateBudgetRepository";
import { CreateBudgetInteractor } from "./interactors/CreateBudgetInteractor";
import { CreateBudgetWebPresenter } from "./presenters/CreateBudgetWebPresenter";



const createBudgetRepository = new CreateBudgetRepository();

const createBudgetWebPresenter = new CreateBudgetWebPresenter();

const createBudgetInteractor = new CreateBudgetInteractor(createBudgetRepository, createBudgetWebPresenter);

const createBudgetWebController = new CreateBudgetController(createBudgetInteractor);

export { createBudgetWebController }