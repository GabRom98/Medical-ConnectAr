const { Atenciones, Doctor } = require("../../db");
const { Op } = require("sequelize");

const getAttentionByIdController = async ({ atencionId }) => {
  try {
    const atencion = await Atenciones.findOne({
      where: { id: atencionId },
      include: [Doctor],
    });
    if (!atencion) {
      throw new Error("No existe la atencion");
    }
    return atencion;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAttentionByIdController,
};
