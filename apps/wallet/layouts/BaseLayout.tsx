import * as React from "react";
import { Container } from "@mui/material";

type Props = React.PropsWithChildren<{ className?: string }>;

const BaseLayout = ({ children, className }: Props) => {
  return (
    <Container maxWidth="sm" className={className}>
      {children}
    </Container>
  );
};

export default BaseLayout;
