import fs from "fs";

const FILE_PATH = "./storage/user.json";

export function saveUser(user) {
    fs.writeFileSync(FILE_PATH, JSON.stringify(user, null, 2));
}

export function getUser() {
    if (!fs.existsSync(FILE_PATH)) {
        return null;
    }

    const data = fs.readFileSync(FILE_PATH, "utf-8");

    return JSON.parse(data);
}