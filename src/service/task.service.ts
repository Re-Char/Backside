import { Provide } from "@midwayjs/core";

@Provide('/task')
export class TaskService {
    async getStudent(): Promise<{
            id: number,
            name: string,
            gender: string,
        }[]> {
        return [{
                id: 231870261,
                name: "Hu Ran",
                gender: 'male',
            }, {
                id: 231870262,
                name: "Zhang Yang",
                gender: 'male',
            }]
    }
}