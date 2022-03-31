import React, { Children } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import propTypes from "prop-types";

const SideBarLink = ({ children, acitveClassName, ...props }) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const isActive = asPath === props.href ? "true" : "false";
  return (
    <Link {...props}>
      {React.cloneElement(child, {
        target: child.props.target || "",
        active: isActive || ''
      })}
    </Link>
  );
};

export default SideBarLink;
