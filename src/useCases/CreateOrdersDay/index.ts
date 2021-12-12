import { IntegrationProviders } from "../../providers/implementations/IntegrationProviders";
import { MongoDBOrdersDayRepository } from "../../repositories/implementations/MongoDBOrdersDayRepository";
import { IntegrationUseCases } from "../Integration/IntegrationUseCases";
import { CreateOrdersDayController } from "./CreateOrdersDayController";
import { CreateOrdersDayUseCase } from "./CreateOrdersDayUseCase";

const IntegrationProvider = new IntegrationProviders();
const MongoDBOrderDayRepository = new MongoDBOrdersDayRepository();


const CreateOrdersDayUseCases = new CreateOrdersDayUseCase(
    MongoDBOrderDayRepository
);

const IntegrationUseCase = new IntegrationUseCases(
    IntegrationProvider
);

const CreateOrderDayController = new CreateOrdersDayController(
    CreateOrdersDayUseCases,
    IntegrationUseCase
);

export { CreateOrdersDayUseCases, CreateOrderDayController }
