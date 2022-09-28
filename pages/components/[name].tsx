/* eslint-disable react/display-name */
import { useRouter } from "next/router";
import { useEffect, useState, forwardRef, useContext } from "react";
import styles from "../../styles/Component.module.scss";

import AzukiGridDisplay from "../../components/AzukiGridDisplay";
import Accordion from "../../components/Accordion";
import AccordionVersion2 from "../../components/AccordionVer2";

import { FiveItemLists, MultilevelOptions } from "../../utils/constants/data";
import Error404Component from "../../components/Error404";

import {
  ComponentNames,
  ComponentTypeNames,
  SocialEnums,
} from "../../utils/constants/enums";
import Meta from "../../components/Meta";
import Description from "../../components/Description";
import Icon from "../../components/Icon";
import MultilevelDropdown from "../../components/MultilevelDropdown";
import RandomColorTextSelection from "../../components/RandomColorTextSelection";
import ProxmityHover from "../../components/ProximityHover";
import ProgressBar from "../../components/ProgressBar";
import { ColorThemeContext } from "../../context/colorThemeContext";
import Navigation from "../../components/Navigation";

const renderComponent = (_componentName: ComponentTypeNames) => {
  return (
    <div className={styles.main}>
      <Description
        heading={ComponentNames[_componentName].title}
        description={ComponentNames[_componentName].desc}
      />
      {(() => {
        switch (_componentName) {
          case ComponentTypeNames.ERROR404:
            return <Error404Component />;
          case ComponentTypeNames.ACCORDTIONV1:
            return <Accordion data={FiveItemLists} />;
          case ComponentTypeNames.ACCORDTIONV2:
            return <AccordionVersion2 data={FiveItemLists} />;
          case ComponentTypeNames.AZUKIGRID:
            return <AzukiGridDisplay />;
          case ComponentTypeNames.MULTILEVELDROPDOWN:
            return <MultilevelDropdown data={MultilevelOptions} />;
          case ComponentTypeNames.RANDOMCOLORTEXTSELECTION:
            return <RandomColorTextSelection />;
          case ComponentTypeNames.PROXIMITY:
            return <ProxmityHover />;
          case ComponentTypeNames.PROGRESSBAR:
            return <ProgressBar currentValue={50} maxValue={120} />;
          default:
            return <Error404Component />;
        }
      })()}
      <Icon
        url={ComponentNames[_componentName].url}
        platform={SocialEnums.GITHUB}
      />
    </div>
  );
};

const Component = () => {
  const router = useRouter();
  const [componentName, setComponentName] = useState<ComponentTypeNames>(
    ComponentTypeNames.ERROR404
  );
  const { appState: ColorThemeState, appDispatch: ColorThemeDispatch } =
    useContext(ColorThemeContext);

  useEffect(() => {
    if (router && router.query && router.query.name) {
      const _componentName =
        (router.query.name as unknown as ComponentTypeNames) ||
        ComponentTypeNames.ERROR404;
      setComponentName(_componentName);
    }
  }, [router]);

  return (
    <div
      className={styles.container}
      style={{
        ["--background-color" as any]: `${ColorThemeState.colorCode.background_color}`,
        ["--headerOne-font-color" as any]: `${ColorThemeState.colorCode.headerOne}`,
        ["--headerTwo-font-color" as any]: `${ColorThemeState.colorCode.headerTwo}`,
        ["--paragraph-font-color" as any]: `${ColorThemeState.colorCode.paragraph}`,
      }}
    >
      <Meta title={`UI Stockpile | ${componentName}`} />

      <Navigation subPage />
      {renderComponent(componentName)}
    </div>
  );
};

export default Component;
