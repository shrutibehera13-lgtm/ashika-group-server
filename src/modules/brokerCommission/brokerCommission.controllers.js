import {
  createBrokerCommissionService,
  getAllBrokerCommissionsService,
} from "./brokerCommission.services.js";

export const createBrokerCommission = async (req, res, next) => {
  try {
    const result = await createBrokerCommissionService(req.body);

    res.status(201).json({
      message: "Broker commission created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllBrokerCommissions = async (req, res, next) => {
  try {
    const data = await getAllBrokerCommissionsService();

    res.status(200).json({
      message: "Broker commission list fetched successfully",
      count: data.length,
      data,
    });
  } catch (error) {
    next(error);
  }
};
