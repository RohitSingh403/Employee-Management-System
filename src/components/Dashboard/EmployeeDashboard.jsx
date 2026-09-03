import { Header } from "../Sementic/Header"
import { TaskListNumber } from "../Sementic/TaskListNumber"
import { TaskList } from "../TaskList/TaskList"


export const EmployeeDashboard = function(){

    return(
        <div className="h-screen bg-[#1C1C1C]">
            <Header></Header>
            <TaskListNumber></TaskListNumber>
            <TaskList></TaskList>
        </div>
    )
}