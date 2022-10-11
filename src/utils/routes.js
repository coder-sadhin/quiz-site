import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "./../components/Home";
import ErrorPage from "../components/ErrorPage";
import Quizzes from "../components/Quizzes";
import Overview from "../components/Overview";
import Blogs from "../components/Blogs";
import Quiz from "../components/Quiz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/quizzes",
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Quizzes />
      },
      {
        path: "/quizzes/:quizId",
        loader: async ({ params }) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        },
        element: <Quiz></Quiz>
      },
      {
        path: "/overview",
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Overview />
      },
      {
        path: "/blogs",
        element: <Blogs />
      }
    ],
  },
]);

export default router;
