import { ReactComponent as HomeIcon } from "../assets/sidebar/home.svg";
import { ReactComponent as ProjectsIcon } from "../assets/sidebar/projects.svg";
import { ReactComponent as AnalyticsIcon } from "../assets/sidebar/analytics.svg";
import { ReactComponent as DashboardIcon } from "../assets/sidebar/dashboard.svg";
import { ReactComponent as UsersIcon } from "../assets/sidebar/users.svg";

// links object
export const Links = [
  {
    id: 1,
    icon: <HomeIcon />,
    name: "Home",
    route: "/",
  },
  {
    id: 2,
    icon: <DashboardIcon />,
    name: "Dashboard",
    route: "/dashboard",
  },
  {
    id: 3,
    icon: <ProjectsIcon />,
    name: "Projects",
    route: "/project",
  },
  {
    id: 4,
    name: "Web design",
    route: "/webdesign",
  },
  {
    id: 5,
    name: "Branding",
    route: "/branding",
  },
  {
    id: 6,
    name: "Marketing",
    route: "/marketing",
  },
  {
    id: 7,
    name: "Sales",
    route: "/sales",
  },
  {
    id: 8,
    icon: <AnalyticsIcon />,
    name: "Analytics",
    route: "/analytics",
  },
  {
    id: 9,
    icon: <UsersIcon />,
    name: "Users",
    route: "/users",
  },
];
