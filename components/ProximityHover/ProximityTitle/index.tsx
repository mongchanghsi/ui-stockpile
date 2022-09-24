import { useState, MouseEvent } from "react";
import styles from "./index.module.scss";
import RickAndMortyTitle from "../../../public/assets/rick_and_morty.svg";
import Image from "next/image";
import { IMovement } from "..";

const ProximityTitle = ({ data }: { data: IMovement }) => {
  return (
    <div
      className={styles.container}
      style={{
        transform: `translate(-${data.x}px, -${data.y}px)`,
      }}
    >
      <Image src={RickAndMortyTitle} alt="Rick and Morty Title" layout="fill" />
    </div>
};

export default ProximityTitle;
