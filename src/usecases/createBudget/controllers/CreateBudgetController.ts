import { Request, Response } from "express";
import { ICreateBudgetInputPort } from "../interfaces/ICreateBudgetInputPort";

class CreateBudgetController {
  constructor(private createBudget: ICreateBudgetInputPort) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { date, value } = request.body;
    try {
      const interactorOutput = await this.createBudget.create({ date, value });

      return response.status(201).json(interactorOutput);
    } catch (error) {
      return response.status(400).json({
        error: error.message || "Unexpected error.",
      });
    }
  }
}

export { CreateBudgetController };
