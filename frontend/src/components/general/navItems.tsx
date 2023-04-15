import { NavItem } from "./Sidebar";
import { IMAGES } from "../../constants/images";

export const navItemsUni: NavItem[] = [
  {
    label: "All Degrees",
    href: "/uni/all/degrees",
    activeIcon: IMAGES.bar_icon_active,
    inactiveIcon: IMAGES.bar_icon,
  },
  {
    label: "Verified Degrees",
    href: "/uni/verified/degrees",
    activeIcon: IMAGES.verified_icon_active,
    inactiveIcon: IMAGES.verified_icon,
  },
  {
    label: "Unverified Degrees",
    href: "/uni/unverified/degrees",
    activeIcon: IMAGES.user_icon_active,
    inactiveIcon: IMAGES.user_icon,
  },
  {
    label: "Edit Requests",
    href: "/uni/edit/requests",
    activeIcon: IMAGES.users_icon_active,
    inactiveIcon: IMAGES.users_icon,
  },
];


export const navItemsHec: NavItem[] = [
  {
    label: "All Degrees",
    href: "/hec/all/degrees",
    activeIcon: IMAGES.bar_icon_active,
    inactiveIcon: IMAGES.bar_icon,
  },
  {
    label: "Verified Degrees",
    href: "/hec/verified/degrees",
    activeIcon: IMAGES.verified_icon_active,
    inactiveIcon: IMAGES.verified_icon,
  },
  {
    label: "Unverified Degrees",
    href: "/hec/unverified/degrees",
    activeIcon: IMAGES.user_icon_active,
    inactiveIcon: IMAGES.user_icon,
  },
];

export const navItemsStudent: NavItem[] = [
  {
    label: "View Details",
    href: "/view/details",
    activeIcon: IMAGES.user_icon_active,
    inactiveIcon: IMAGES.user_icon,
  },
];
