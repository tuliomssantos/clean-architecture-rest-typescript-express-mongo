import { Router } from "express";
import { createBudgetWebController } from "./usecases/createBudget/createBudgetWebController";
import { RetrieveBudgetRepository } from "./usecases/retrieveBudget/repositories/RetrieveBudgetRepository";
import { retrieveBudgetWebController } from "./usecases/retrieveBudget/retrieveBudgetWebController";

const router = Router();

router.get("/", async (request, response) => {
  console.log(new Date())
  response.status(200).send("app is running");
});

router.post("/budget", async (request, response) => {

  await createBudgetWebController.handle(request, response);

});

router.get("/budget/:id", async (request, response) => {
  await retrieveBudgetWebController.handle(request, response);
  // const { id } = request.params;
  // const retrieveBudgetRepository = new RetrieveBudgetRepository();
  // const budget = await retrieveBudgetRepository.find({ id: id })
  // response.json(budget)
})

export { router };
