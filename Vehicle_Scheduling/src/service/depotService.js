const axios = require("axios");
const log = require("../logger/logger");

async function getDepots() {
    try {
        await log(
            "backend",
            "info",
            "service",
            "Fetching depots"
        );
        const response = await axios.get(
            "http://20.207.122.201/evaluation-service/depots",
            {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJjYi5zYy51NGNzZTIzMTA4QGNiLnN0dWRlbnRzLmFtcml0YS5lZHUiLCJleHAiOjE3NzgwNjM5MzcsImlhdCI6MTc3ODA2MzAzNywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImI5YjUxOTRiLWQ5ZTctNGFiYy05ODEwLTJlZjUxY2JjZjdiNSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImFyYXZpbmQgcmsiLCJzdWIiOiI1ZjQyMmQ2Mi0xOTA4LTQ5NzAtYjYwYi04ZmU2N2FlMDk0NjEifSwiZW1haWwiOiJjYi5zYy51NGNzZTIzMTA4QGNiLnN0dWRlbnRzLmFtcml0YS5lZHUiLCJuYW1lIjoiYXJhdmluZCByayIsInJvbGxObyI6ImNiLnNjLnU0Y3NlMjMxMDgiLCJhY2Nlc3NDb2RlIjoiUFRCTW1RIiwiY2xpZW50SUQiOiI1ZjQyMmQ2Mi0xOTA4LTQ5NzAtYjYwYi04ZmU2N2FlMDk0NjEiLCJjbGllbnRTZWNyZXQiOiJ5Z1Vuemp4Y2FzZnF6R21tIn0.ZDcb4zkvqZv-gXI4iHPyjnr1TQYEdDt0Ty6wieeohp8`
                }
            }
        );
        await log(
            "backend",
            "info",
            "service",
            "Depots fetched successfully"
        );

        return response.data.depots;
    } catch (error) {
        await log(
            "backend",
            "error",
            "service",
            `Depot API failed: ${error.message}`
        );
        throw error;
    }
}

module.exports = {
    getDepots
};
