import { Request, Response } from "express";
import { IRetrieveBudgetInputPort } from "../interfaces/IRetrieveBudgetInputPort";

export class RetrieveBudgetController {
  constructor(private retrieveBudget: IRetrieveBudgetInputPort) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const interactorOutput = await this.retrieveBudget.retrieve({ id });

      return response.status(200).json(interactorOutput);
    } catch (error) {
      return response.status(400).json({
        error: error.message || "Unexpected error.",
      });
    }
  }
}
