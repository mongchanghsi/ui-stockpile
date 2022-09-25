import { FC, forwardRef, useContext } from "react";
import styles from "./index.module.scss";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";
import { ColorThemeContext, ThemeEnum } from "../../context/colorThemeContext";
import {
  SET_COLOR_THEME_DARK,
  SET_COLOR_THEME_LIGHT,
} from "../../context/actionType";
import { getThemeIcons } from "../../utils/helpers";

interface NavProps {
  subPage?: boolean;
}

const RenderBrand = forwardRef(
  (
    {
      onClick = undefined,
      href = undefined,
      color = "black",
    }: { onClick: undefined; href: undefined; color: string },
    ref: any
  ) => {
    return (
      <IoMdArrowBack
        href={href}
        onClick={onClick}
        size={50}
        color={color}
        style={{ cursor: "pointer" }}
      />
    );
  }
);

const Navigation: FC<NavProps> = ({ subPage }) => {
  const { appState: ColorThemeState, appDispatch: ColorThemeDispatch } =
    useContext(ColorThemeContext);

  const handleThemeChange = () => {
    if (ColorThemeState.theme === ThemeEnum.LIGHT) {
      ColorThemeDispatch({ type: SET_COLOR_THEME_DARK, value: null });
    } else {
      ColorThemeDispatch({ type: SET_COLOR_THEME_LIGHT, value: null });
    }
  };

  return (
    <nav className={styles.container}>
      <div className={styles.main}>
        {subPage ? (
          <Link href="/" passHref>
            <RenderBrand
              onClick={undefined}
              href={undefined}
              color={ColorThemeState.colorCode.paragraph}
            />
          </Link>
        ) : (
          <div></div>
        )}
        <button
          type="button"
          className={styles.button}
          onClick={handleThemeChange}
        >
          {getThemeIcons(ColorThemeState.theme)}
        </button>
      </div>
    </nav>
  );
};
export default Navigation;
