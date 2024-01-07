import { Link } from "react-router-dom";

export const menuItems = [
 {
  title: "HOME",
    submenu: [
      {
        title: "Menu variation",
        submenu: [
          {
            title: "Top Bar Transparent",
          },
          { title: "Top Bar Colour" },
          { title: "Bottom Bar Transparent" },
          { title: "bottom bar colour" },
        ],
      },
    ],
 },
 { title: "❤️" },
 {
    title: "ABOUT",
    submenu: [
      {
        title: (
          
            <a href="/forhim" className="him">
              FOR-HIM
            </a>
        
        ),
      },
      { title: "About HER" },
    ],
 },
 { title: "❤️" },
 {
    title: "Gallery",
    submenu: [
      { title: "Gallery With Slider" },
      { title: "Full Gallery" },
      { title: "Gallery Column 5" },
      { title: "Gallery Column 4" },
      { title: "Gallery Column 3" },
    ],
 },
 { title: "❤️" },
 { title: "The Story" },
 { title: "❤️" },
 {
    title: (
      <p href="/" className="logo1">
        G❤️D
      </p>
    ),
 },
 {
    title: "THE Wedding",
    submenu: [
      { title: "Location" },
      { title: "Accomodation" },
      {
        title: "Bridesmade",
        submenu: [
          { title: "Bridesmaid Gallery" },
          { title: "Bridesmaid Parallax" },
        ],
      },
      {
        title: "GroomsMEN",
        submenu: [
          { title: "Groomsmen Gallery" },
          { title: "Groomsmen Parallax" },
        ],
      },
    ],
 },
 { title: "❤️" },
 {
    title: "BLOG",
    submenu: [
      { title: "BLOG" },
      { title: "Blog Slider" },
      { title: "Blog Parallax IMAGE" },
      { title: "BLOG Parallax Sidebar" },
    ],
 },
 { title: "❤️" },
 { title: "PAGE" },
 { title: "❤️" },
 { title: "RSVP" },
];