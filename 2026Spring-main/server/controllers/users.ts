

import { Router, Request, Response } from "express"

const app = Router()

app.get("/", (_req: Request, res: Response) => {
    res.send([
        { id: 1, name: "John Doe", email: "john.doe@example.com" },
        { id: 2, name: "Jane Doe", email: "jane.doe@example.com" },
    ])
})
    .get("/:id", (req: Request, res: Response) => {
        const { id } = req.params
        res.send({ id, name: "John Doe", email: "john.doe@example.com" })
    })
    .post("/", (req: Request, res: Response) => {
        const { name, email } = req.body
        // In a real application, you would save the user to the database here
        res.send({ id: 3, name, email })
    })
    .patch("/:id", (req: Request, res: Response) => {
        const { id } = req.params
        const { name, email } = req.body
        // In a real application, you would update the user in the database here
        res.send({ id, name, email })
    })
    .delete("/:id", (req: Request, res: Response) => {
        const { id } = req.params
        // In a real application, you would delete the user from the database here
        res.send({ id })
    })

export default app
