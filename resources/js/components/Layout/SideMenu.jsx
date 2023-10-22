import AppRoutes from "../../AppRoutes";
import { useLocation } from "react-router-dom";
import { Menu } from "antd";
import { useSelector } from "react-redux";

export const SideMenu = () => {
  const { pathname } = useLocation();
  const permission = useSelector((state) =>
    state.auth.isLoggedIn ? state.auth.user.permission : {}
  );
  const items = AppRoutes.reduce((accumulator, currentValue) => {
    if (currentValue.label !== undefined) {
      if (
        currentValue.label.props.children === "Dashboard" ||
        currentValue.label.props.children === "Coupon" ||
        currentValue.label.props.children === "Coupon Brand" ||
        currentValue.label.props.children === "Advertisement" ||
        currentValue.label.props.children === "Coupon Category"
      ) {
        return [
          ...accumulator,
          { label: currentValue.label, key: currentValue.path },
        ];
      } else {
        if (
          permission[currentValue.label.props.children.toLowerCase()]?.view ===
          1
        ) {
          return [
            ...accumulator,
            { label: currentValue.label, key: currentValue.path },
          ];
        } else {
          return [...accumulator];
        }
      }
    } else {
      return [...accumulator];
    }
  }, []);

  return (
    <Menu
      style={{ width: "100%" }}
      defaultSelectedKeys={[pathname]}
      mode="inline"
      items={items}
    ></Menu>
  );
};
