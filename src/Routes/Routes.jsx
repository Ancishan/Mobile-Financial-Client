import { createBrowserRouter } from 'react-router-dom';
import Registration from '../Pages/Authentication/Registration';
import Login from '../Pages/Authentication/Login';
import HomePage from '../Pages/HomePage/HomePage';


export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path:'/',
        element:<HomePage></HomePage>
      },
      {
        path: '/reg',
        element: <Registration />,
      },
      {
        path: '/login',
        element: <Login />,
      }
      
    ],
  },
  // {
  //   path: '/dashboard',
  //   element: <Dashboard />,
  //   // element: <PrivateRoute><Dashboard /></PrivateRoute>,
  //   children: [
  //     {
  //       path: 'workerHome',
  //       element: <WorkerHome />,
  //     },
  //     {
  //       path: 'taskList',
  //       element: <TaskList />,
  //       loader: () => fetch('https://micro-task-earnning-pf-server.vercel.app/tasks'),
  //     },
  //     {
  //       path: 'view/:id',
  //       element: <TaskDetails />,
  //     },
   
    
  //     {
  //       path: 'mySubmission',
  //       element: <MySubmission />,
  //     },
  //     {
  //       path: 'taskCreatorHome',
  //       element: <TaskCreatorHome />,
  //     },
  //     {
  //       path: 'addtask',
  //       element: <AddTask />,
  //     },
  //     {
  //       path: 'myTask',
  //       element: <MyTask />,
  //     },
  //     {
  //       path:'reviewTask',
  //       element:<TaskToReview></TaskToReview>
  //     },
  //     {
  //       path:'approveList',
  //       element:<ApprovalList></ApprovalList>
  //     },
  //     {
  //       path: 'payment',
  //       element: <Payment/>,
  //     },
  //     {
  //       path: 'pay',
  //       element: <Pay/>,
  //     },
  //     {
  //       path: 'adminHome',
  //       element: <AdminHome />
  //     }
      
  //   ],
  // },
  // {
  //   path: '/payment',
  //   element: <Payment />,
  // },
]);
