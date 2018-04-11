import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import ChildCare from "@material-ui/icons/es/ChildCare";
import FormatListNumbered from "@material-ui/icons/es/FormatListNumbered";
import Event from "@material-ui/icons/es/Event";
import Casino from "@material-ui/icons/es/Casino";
import Toys from "@material-ui/icons/es/Toys";
import {Collapse, List} from "material-ui";
import StarBorder from "@material-ui/icons/es/StarBorder";
import ExpandLess from "@material-ui/icons/es/ExpandLess";
import ExpandMore from "@material-ui/icons/es/ExpandMore";

export const mailFolderListItems = (

    <div>
        <ListItem button>
            <ListItemIcon>
                <ChildCare />
            </ListItemIcon>
            <ListItemText primary="Mein Baby" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <FormatListNumbered />
            </ListItemIcon>
            <ListItemText primary="Sprünge" />
        </ListItem>


        <ListItem button>
            <ListItemIcon>
                <Event />
            </ListItemIcon>
            <ListItemText primary="Mein Sprungkalender" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Casino/>
            </ListItemIcon>
            <ListItemText primary="Spiele" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Toys />
            </ListItemIcon>
            <ListItemText primary="Spielzeuge" />
        </ListItem>
    </div>
);

export const otherMailFolderListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <MailIcon />
            </ListItemIcon>
            <ListItemText primary="All mail" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ReportIcon />
            </ListItemIcon>
            <ListItemText primary="Spam" />
        </ListItem>
    </div>
);