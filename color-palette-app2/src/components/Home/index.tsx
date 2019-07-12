import React from "react";
import { RouteComponentProps, navigate, Link } from "@reach/router";
import { StyledHome, Container, Nav, Palettes } from "./style";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MiniPalette from "../MiniPalette";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

type Props = {
  palettes: any;
  deletePalette: any;
};

const Home: React.FC<Props & RouteComponentProps> = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const [deletingId, setDeletingId] = React.useState("");
  const { palettes, deletePalette } = props;

  const goToPalette = (id: string) => {
    navigate(`palette/${id}`);
  };

  const openDialog = (id: string) => {
    setOpen(true);
    setDeletingId(id);
  };

  const closeDialog = () => {
    setOpen(false);
    setDeletingId("");
  };

  const deleteMiniPalette = () => {
    deletePalette(deletingId);
    setOpen(false);
  };

  const templateRows = Math.ceil(palettes.length / 3);
  return (
    <StyledHome>
      <Container>
        <Nav>
          <h1>React Colors</h1>
          <Link to="palette/new">Create Palette</Link>
        </Nav>
        <Palettes templateRows={templateRows}>
          <TransitionGroup component={null}>
            {palettes.map((palette: any) => (
              <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                <MiniPalette
                  openDialog={openDialog}
                  key={palette.id}
                  {...palette}
                  handleClick={goToPalette}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </Palettes>
        <div />
      </Container>
      <Dialog
        open={open}
        aria-labelledby="delete dialog title"
        onClose={closeDialog}
      >
        <DialogTitle id="delete-dialog-title">Delete This Palette?</DialogTitle>
        <List>
          <ListItem button onClick={deleteMiniPalette}>
            <ListItemAvatar>
              <Avatar style={{ background: blue[100], color: blue[600] }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Delete" />
          </ListItem>
          <ListItem button onClick={closeDialog}>
            <ListItemAvatar>
              <Avatar style={{ background: red[100], color: red[600] }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItem>
        </List>
      </Dialog>
    </StyledHome>
  );
};

export default Home;
