import BrokerCommission from "../../schemas/brokerage.schema.js";
import { AppError } from "../../lib/errors.js";

export const createBrokerCommissionService = async (data) => {
  const { code, clientName, clientId } = data;

  if (!code || !clientName || !clientId) {
    throw new AppError("Required fields missing", 400);
  }

  const exists = await BrokerCommission.findOne({
    $or: [{ code }, { clientId }],
  });

  if (exists) {
    throw new AppError("Broker commission already exists", 409);
  }

  return await BrokerCommission.create(data);
};

// GET ALL
export const getAllBrokerCommissionsService = async () => {
  return await BrokerCommission.find().sort({ createdAt: -1 });
};
