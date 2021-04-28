import React from 'react';
import { Button } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import ImageIcon from '@material-ui/icons/Image';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import { ButtonSign, Content, Header } from './styles';
import logoImg from '../../assets/logo.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '96ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }),
);

const Dashboard: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Header>
        <img src={logoImg} alt="GoInternship" />

        <p>Encontre uma vaga de estágio aqui!</p>

        <ButtonSign>
          <Link to="/signin">
            <Button color="primary" style={{ color: 'white', minWidth: 135 }}>
              Entrar
            </Button>
          </Link>
          <Link to="/signup">
            <Button color="primary" style={{ color: 'white', minWidth: 135 }}>
              Cadastre-se
            </Button>
          </Link>
        </ButtonSign>
      </Header>
      <Content>
        <h1>Novas Vagas</h1>
        {/*eslint-disable  */}
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              style={{ color: 'black' }}
              primary="Bunge Alimentos"
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Descrição: Objetivo do Cargo: Auxiliar nas demandas da área,
                  objetivando aprendizado na carreira. Principais atividades:
                  Preencher a planilha de produtividade da área. Realizar
                  fechamento dos itens movimentados. Atualizar os quadros de
                  gestão à vista. Substituir os cadernos de registro nas áreas.
                  Sugerir e desenvolver melhorias na área. Apoiar no lançamento
                  da produção. Apoiar nas ...
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              style={{ color: 'black' }}
              primary="Summer BBQ"
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Descrição: Objetivo do Cargo: Auxiliar nas demandas da área,
                  objetivando aprendizado na carreira. Principais atividades:
                  Preencher a planilha de produtividade da área. Realizar
                  fechamento dos itens movimentados. Atualizar os quadros de
                  gestão à vista. Substituir os cadernos de registro nas áreas.
                  Sugerir e desenvolver melhorias na área. Apoiar no lançamento
                  da produção. Apoiar nas ...
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              style={{ color: 'black' }}
              primary="Oui Oui"
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Descrição: Objetivo do Cargo: Auxiliar nas demandas da área,
                  objetivando aprendizado na carreira. Principais atividades:
                  Preencher a planilha de produtividade da área. Realizar
                  fechamento dos itens movimentados. Atualizar os quadros de
                  gestão à vista. Substituir os cadernos de registro nas áreas.
                  Sugerir e desenvolver melhorias na área. Apoiar no lançamento
                  da produção. Apoiar nas ...
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              style={{ color: 'black' }}
              primary="Bango Bango"
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Descrição: Objetivo do Cargo: Auxiliar nas demandas da área,
                  objetivando aprendizado na carreira. Principais atividades:
                  Preencher a planilha de produtividade da área. Realizar
                  fechamento dos itens movimentados. Atualizar os quadros de
                  gestão à vista. Substituir os cadernos de registro nas áreas.
                  Sugerir e desenvolver melhorias na área. Apoiar no lançamento
                  da produção. Apoiar nas ...
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Content>
    </>
  );
};

export default Dashboard;
