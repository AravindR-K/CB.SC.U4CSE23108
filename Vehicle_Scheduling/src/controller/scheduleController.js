const depotService = require("../service/depotService");
const vehicleService = require("../service/vehicleService");
const solveKnapsack = require("../utils/knapsack");

const log = require("../logger/logger");

async function getOptimalSchedule(req, res) {
    try {
        await log(
            "backend",
            "info",
            "controller",
            "Starting scheduling process"
        );
        const depots = await depotService.getDepots();

        const vehicles = await vehicleService.getVehicles();
        let finalResult = [];

        for (const depot of depots) {
            await log(
                "backend",
                "debug",
                "service",
                `Processing depot ${depot.ID}`
            );
            const result = solveKnapsack(
                vehicles,
                depot.MechanicHours
            );
            finalResult.push({
                depotID: depot.ID,
                MechanicHours: depot.MechanicHours,
                totalImpact: result.maxImpact,
                selectedVehicles: result.selectedVehicles
            });
        }
        await log(
            "backend",
            "info",
            "controller",
            "Scheduling completed successfully"
        );
        res.status(200).json({
            success: true,
            data: finalResult
        });
    } catch (error) {
        await log(
            "backend",
            "fatal",
            "controller",
            `Scheduling failed: ${error.message}`
        );
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
  getOptimalSchedule
};