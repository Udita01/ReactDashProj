import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../components/PageNotFound";
import MainDashBoardComp from "../components/MainDashboardComp";
import EmpMod from "../components/EmpMod";
import AddEmpMod from '../components/AddEmpMod';
import EditEmpMod from '../components/EditEmpMod';
import ProtectedRoute from './ProtectedRoute';
import Users from "../components/Users";
import BranchesComp from "../components/BranchesComp";
import AddBranchesComp from "../components/AddBranchesComp";
import EditBranchesComp from "../components/EditBranchesComp";
import CourseDashboardComp from "../components/CourseDashboardComp";
import CourseEditComp from "../components/CourseEditComp";
import CourseAddComp from "../components/CourseAddComp"
import StudMod from "../components/StudMod";
import AddStudMod from "../components/AddStudMod";
import EditStudMod from "../components/EditStudMod";
import UsersAdd from "../components/UsersAdd";
import UsersEdit from "../components/UsersEdit";
import Dash from "../components/Dash";
import LoginComp from "../components/LoginComp";
import CarouselComp from "../components/CarouselComp";


const router = createBrowserRouter([
    {path:'', element:<LoginComp />},
        {path:'/main', element:<Dash />,children:[
            {path:'', element:<ProtectedRoute RoutingComponent={CarouselComp} />},
            {path:'empmod', element:<ProtectedRoute RoutingComponent={EmpMod} />},
            {path:'empmodadd', element:<ProtectedRoute RoutingComponent={AddEmpMod}/>},
            {path:'empmodedit/:id', element:<ProtectedRoute RoutingComponent={EditEmpMod}/>},
            {path:'users', element:<ProtectedRoute RoutingComponent={Users}/>},
            {path:'usersadd', element:<ProtectedRoute RoutingComponent={UsersAdd}/>},
            { path: "usersedit/:id", element: <ProtectedRoute RoutingComponent={UsersEdit} /> }, 
            { path: "branches", element: <ProtectedRoute RoutingComponent={BranchesComp}/> }, 
            { path: "addbr", element: <ProtectedRoute RoutingComponent={AddBranchesComp} /> }, 
            { path: "editbran/:id", element: <ProtectedRoute RoutingComponent={EditBranchesComp} /> }, 
            {path:"courses",element:<ProtectedRoute RoutingComponent={CourseDashboardComp} />},
            {path:"addcourse",element:<ProtectedRoute RoutingComponent={CourseAddComp} />},
            {path:"editcourse/:id",element:<ProtectedRoute RoutingComponent={CourseEditComp}/>},
            {path:'studmod', element:<ProtectedRoute RoutingComponent={StudMod} />},
            {path:'StudModadd', element:<ProtectedRoute RoutingComponent={AddStudMod} />},
            {path:'StudModedit/:id', element:<ProtectedRoute RoutingComponent={EditStudMod} />},]},
            {path:'*',element:<PageNotFound />},
])

export default router