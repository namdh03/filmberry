import { FC, PropsWithChildren } from "react";
import { Wrapper } from "./Container.styled";

const Container: FC<PropsWithChildren> = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

export default Container;
