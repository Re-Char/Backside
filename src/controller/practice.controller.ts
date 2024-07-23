import { Body, Controller, Get, Param, Post, Query } from "@midwayjs/core";

@Controller('/practice')
export class PracticeController {
    @Get("/:practiceid/summary")
    async practicesummary(@Param("practiceid") practideid: string) {
        return practideid
    }
    @Get('/summary')
    async summary(@Query("state") state: string) {
        return state
    }
    @Post('/create')
    async create(@Body() form: {
        name: string
        id: number
    }) {
        return form
    }
}