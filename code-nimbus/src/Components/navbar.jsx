import {
  menuItems
} from "./menudata";
import MenuItems from "./MenuItems";
const Navbar = () => {
  return ( <
      nav >
      <
      ul className = "menus" > {
          menuItems.map((menu, index) => {
              const depthLevel = 0;
              return <MenuItems items = {
                 menu
              }
              key = {
                  index
              }
              depthLevel = {
                  depthLevel
              }
              href="/"
              />;
          })
      } </ul> </nav>
  );
};

export default Navbar;