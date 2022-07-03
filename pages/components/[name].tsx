/* eslint-disable react/display-name */
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState, forwardRef } from 'react';
import styles from '../../styles/Component.module.scss';
import { IoMdArrowBack } from 'react-icons/io';

import AzukiGridDisplay from '../../components/AzukiGridDisplay';
import Accordion from '../../components/Accordion';
import AccordionVersion2 from '../../components/AccordionVer2';

import { FiveItemLists } from '../../utils/constants/data';
import Error404Component from '../../components/Error404';
import BookAnimation from '../../components/BookAnimation';

import {
  ComponentNames,
  ComponentTypeNames,
  SocialEnums,
} from '../../utils/constants/enums';
import Meta from '../../components/Meta';
import Description from '../../components/Description';
import Icon from '../../components/Icon';

const renderComponent = (_componentName: ComponentTypeNames) => {
  return (
    <div className={styles.container}>
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
          case ComponentTypeNames.BOOKANIMATION:
            return <BookAnimation />;
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

const RenderBrand = forwardRef(
  (
    {
      onClick = undefined,
      href = undefined,
    }: { onClick: undefined; href: undefined },
    ref: any
  ) => {
    return (
      <IoMdArrowBack
        href={href}
        onClick={onClick}
        size={50}
        color='black'
        style={{ cursor: 'pointer' }}
      />
    );
  }
);

const Component = () => {
  const router = useRouter();
  const [componentName, setComponentName] = useState<ComponentTypeNames>(
    ComponentTypeNames.ERROR404
  );

  useEffect(() => {
    if (router && router.query && router.query.name) {
      const _componentName =
        (router.query.name as unknown as ComponentTypeNames) ||
        ComponentTypeNames.ERROR404;
      setComponentName(_componentName);
    }
  }, [router]);

  return (
    <div>
      <Meta title={`UI Stockpile | ${componentName}`} />
      <div className={styles.actionBar}>
        <Link href='/' passHref>
          <RenderBrand onClick={undefined} href={undefined} />
        </Link>
      </div>
      {renderComponent(componentName)}
    </div>
  );
};

export default Component;
