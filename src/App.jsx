import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { PagenotFound } from "./pages";
import {
  Dashboard,
  Appointment,
  AppointmentEdit,
  Enquiry,
  Feedback,
  Specialities,
  SpecialitiesNew,
  Doctors,
  HealthCheckUp,
  Application,
  Vacancies,
  Home,
  AboutUs,
  NewsUpdates,
  Insurence,
  Testimonials,
  Gallery,
  General,
  Users,
  Branches,
  UserRole,
  Seo,
} from "./pages/Admin";



const Layout = () => {
  return (
    <div className="app">
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <div className="h-screen flex justify-center items-center flex-col">
              <h1>Home Page</h1>
              <a href="/dashboard" className="text-blue-500">
                Go to Admin
              </a>
            </div>
          </>
        ),
      },
      {
        path: "*",
        element: <PagenotFound />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/appointments",
        element: < Appointment/>,
      },
      {
        path: "/admin/appointment-edit/:id",
        element: < AppointmentEdit/>,
      },
      {
        path: "/admin/enquiry",
        element: <Enquiry />,
      },
      {
        path: "/admin/feedback",
        element: <Feedback />,
      },
      {
        path: "/admin/specialities",
        element: <Specialities />,
      },
      {
        path: "/admin/specialities-new",
        element: <SpecialitiesNew />,
      },
      {
        path: "/admin/doctors",
        element: <Doctors />,
      },
      {
        path: "/admin/health-checkup",
        element: <HealthCheckUp />,
      },
      {
        path: "/admin/applications",
        element: <Application />,
      },
      {
        path: "/admin/vacancies",
        element: <Vacancies />,
      },
      {
        path: "/admin/home",
        element: <Home />,
      },
      {
        path: "/admin/about-us",
        element: <AboutUs />,
      },
      {
        path: "/admin/news-updates",
        element: <NewsUpdates/>,
      },
      {
        path: "/admin/insurance-partners",
        element: <Insurence />,
      },
      {
        path: "/admin/testimonials",
        element: <Testimonials />,
      },
      {
        path: "/admin/gallery",
        element: <Gallery />,
      },
      {
        path: "/admin/general",
        element: <General />,
      },
      {
        path: "/admin/users",
        element: <Users />,
      },
      {
        path: "/admin/branches",
        element: <Branches />,
      },
      {
        path: "/admin/user-role",
        element: <UserRole />,
      },
      {
        path: "/admin/seo",
        element: <Seo />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
