import { Inject, Controller, Get } from "@midwayjs/core";
import { TaskService } from "../service/task.service";

@Controller("/task")
export class taskController {
    @Inject()
    service: TaskService
    @Get("/student-list")
        async studentList() {
        const studentData = await this.service.getStudent()
        const result = {
            studentlist: studentData,
            message: "Welcome to the student-list!!!",
        }
        return result
    }
}