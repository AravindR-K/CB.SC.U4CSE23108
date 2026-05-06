const axios = require("axios");

const validStacks = ["backend"];

const validLevels = ["debug", "info", "warn", "error", "fatal"];

const validPackages = ["controller", "cache", "cron_job", "db", "domain", "handler", "repository", "route", "service"];

async function log(stack, level, packageName, message) {
    try {
        if (!validStacks.includes(stack)) {
            throw new Error("Invalid stack");
        }
        if (!validLevels.includes(level)) {
            throw new Error("Invalid level");
        }
        if (!validPackages.includes(packageName)) {
            throw new Error("Invalid package");
        }
        const response = await axios.post(
            "http://20.207.122.201/evaluation-service/logs",
            {
                stack,
                level,
                package: packageName,
                message
            },
            {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJjYi5zYy51NGNzZTIzMTA4QGNiLnN0dWRlbnRzLmFtcml0YS5lZHUiLCJleHAiOjE3NzgwNjM5MzcsImlhdCI6MTc3ODA2MzAzNywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImI5YjUxOTRiLWQ5ZTctNGFiYy05ODEwLTJlZjUxY2JjZjdiNSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImFyYXZpbmQgcmsiLCJzdWIiOiI1ZjQyMmQ2Mi0xOTA4LTQ5NzAtYjYwYi04ZmU2N2FlMDk0NjEifSwiZW1haWwiOiJjYi5zYy51NGNzZTIzMTA4QGNiLnN0dWRlbnRzLmFtcml0YS5lZHUiLCJuYW1lIjoiYXJhdmluZCByayIsInJvbGxObyI6ImNiLnNjLnU0Y3NlMjMxMDgiLCJhY2Nlc3NDb2RlIjoiUFRCTW1RIiwiY2xpZW50SUQiOiI1ZjQyMmQ2Mi0xOTA4LTQ5NzAtYjYwYi04ZmU2N2FlMDk0NjEiLCJjbGllbnRTZWNyZXQiOiJ5Z1Vuemp4Y2FzZnF6R21tIn0.ZDcb4zkvqZv-gXI4iHPyjnr1TQYEdDt0Ty6wieeohp8`
                }
            }
        );
        console.log("LOG CREATED:", response.data);
    }
    catch (error) {

        console.error("Logging Failed:", error.message);

    }
}

module.exports = log;