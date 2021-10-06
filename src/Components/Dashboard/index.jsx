import { Summary } from "../Summary"
import { TransacitonTable } from "../TransactionsTable"
import { createServer } from "miragejs"
import { Container } from "./styles"


export function Dashboard() {
    return (
        <>
        <Container>
            <Summary />   
            <TransacitonTable /> 
        </Container>
        </>
    )
}